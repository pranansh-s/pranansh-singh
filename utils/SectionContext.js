import { createContext, useContext, useEffect, useRef, useState } from 'react';

const SectionContext = createContext();

export function SectionProvider({ children }) {
  const [currentSection, setCurrentSection] = useState('');

  const determineInViewSection = () => {
    const sections = ['hero', 'about', 'work', 'contact'];

    const observer = new IntersectionObserver(
      entries => {
        let maxVisiblePercentage = 0;
        let mostInView = '';

        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const visiblePercentage = entry.intersectionRatio * 100;

            if (visiblePercentage > maxVisiblePercentage) {
              maxVisiblePercentage = visiblePercentage;
              mostInView = sectionId;
            }
          }
        });

        if (mostInView && mostInView !== currentSection) {
          setCurrentSection(mostInView);
        }
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });
  };

  useEffect(() => {
    determineInViewSection();
  }, []);

  return <SectionContext.Provider value={{ currentSection }}>{children}</SectionContext.Provider>;
}

export function useSection() {
  return useContext(SectionContext);
}
