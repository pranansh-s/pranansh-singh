import { createContext, useContext, useEffect, useRef, useState } from 'react';

const SECTION_IDS = ['hero', 'about', 'work', 'contact'];

interface SectionContextType {
  currentSection: string;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const currentSectionRef = useRef<string>('hero');
  const ratioMap = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          ratioMap.current.set(entry.target.id, entry.intersectionRatio);
        });

        let maxRatio = 0;
        let mostVisible = '';

        ratioMap.current.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisible = id;
          }
        });

        if (mostVisible && mostVisible !== currentSectionRef.current) {
          currentSectionRef.current = mostVisible;
          setCurrentSection(mostVisible);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    const observedIds = new Set<string>();

    const tryObserveSections = () => {
      SECTION_IDS.forEach(id => {
        if (observedIds.has(id)) return;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observedIds.add(id);
        }
      });
    };

    tryObserveSections();

    const domWatcher = new MutationObserver(() => {
      tryObserveSections();
      if (observedIds.size === SECTION_IDS.length) {
        domWatcher.disconnect();
      }
    });

    if (observedIds.size < SECTION_IDS.length) {
      domWatcher.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      observer.disconnect();
      domWatcher.disconnect();
    };
  }, []);

  return <SectionContext.Provider value={{ currentSection }}>{children}</SectionContext.Provider>;
}

export function useSection() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
}
