import { createContext, useContext, useEffect, useRef, useState } from 'react';

const SECTION_IDS = ['hero', 'about', 'work', 'contact'];

interface SectionContextType {
  currentSection: string;
}

const SectionContext = createContext<SectionContextType | undefined>(undefined);

export function SectionProvider({ children }: { children: React.ReactNode }) {
  const [currentSection, setCurrentSection] = useState<string>('');
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        let maxVisiblePercentage = 0;
        let mostInView = '';

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const visiblePercentage = entry.intersectionRatio * 100;
            if (visiblePercentage > maxVisiblePercentage) {
              maxVisiblePercentage = visiblePercentage;
              mostInView = entry.target.id;
            }
          }
        });

        if (mostInView && mostInView !== currentSection) {
          setCurrentSection(mostInView);
        }
      },
      { threshold: 0.5 }
    );

    observerRef.current = observer;

    SECTION_IDS.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [currentSection]);

  return <SectionContext.Provider value={{ currentSection }}>{children}</SectionContext.Provider>;
}

export function useSection() {
  const context = useContext(SectionContext);
  if (context === undefined) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
}
