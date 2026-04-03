import { createContext, useContext, useEffect, useRef, useState } from 'react';

const SECTION_IDS = ['hero', 'about', 'work', 'contact'];

interface SectionContextType {
  currentSection: string;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState('hero');
  const ratioMap = useRef(new Map<string, number>());

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => ratioMap.current.set(e.target.id, e.intersectionRatio));

        let maxRatio = 0;
        let mostVisible = '';
        ratioMap.current.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisible = id;
          }
        });

        if (mostVisible) setCurrentSection(mostVisible);
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    );

    const observed = new Set<string>();
    const tryObserve = () => {
      SECTION_IDS.forEach(id => {
        if (observed.has(id)) return;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observed.add(id);
        }
      });
    };

    tryObserve();

    const domWatcher = new MutationObserver(() => {
      tryObserve();
      if (observed.size === SECTION_IDS.length) domWatcher.disconnect();
    });

    if (observed.size < SECTION_IDS.length) {
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
  const ctx = useContext(SectionContext);
  if (!ctx) throw new Error('useSection must be used within a SectionProvider');
  return ctx;
}
