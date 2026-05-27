import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import { useSection } from '@/utils/SectionContext';

const sections = [{ id: 'hero' }, { id: 'about' }, { id: 'work' }, { id: 'connect' }];

const Navbar = () => {
  const { currentSection } = useSection();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <NavbarContainer
      role="navigation"
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{ duration: 1 }}
    >
      {sections.map(section => (
        <NavDot
          key={section.id}
          $isActive={currentSection === section.id}
          onClick={() => scrollTo(section.id)}
          aria-label={`Navigate to ${section.id}`}
          role="button"
          tabIndex={0}
        />
      ))}
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = tw(motion.nav)`
  fixed
  right-0
  z-20
  m-2
  hidden
  h-screen
  flex-col
  items-center
  justify-center
  gap-7
  sm:flex
  md:m-8
`;

const NavDot = tw.div<{ $isActive: boolean }>`
  relative
  -m-2
  w-min
  cursor-pointer
  rounded-full
  p-3
  transition-[background-color,box-shadow]
  duration-300
  before:block
  before:rounded-full
  before:transition-[background-color,padding,outline]
  before:duration-300
  md:cursor-none
  ${p =>
    p.$isActive
      ? 'before:bg-secondary before:p-[5px] before:outline before:outline-2 before:outline-white sm:before:p-2'
      : 'before:bg-white/60 sm:before:p-1 hover:before:bg-white/80 hover:before:scale-[2]'} `;
