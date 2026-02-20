import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import { useSection } from '@/utils/SectionContext';

const Navbar = () => {
  const { currentSection } = useSection();

  return (
    <NavbarContainer
      role='navigation'
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
      <SectionDot $isActive={currentSection == 'hero'} />
      <SectionDot $isActive={currentSection == 'about'} />
      <SectionDot $isActive={currentSection == 'work'} />
      <SectionDot $isActive={currentSection == 'contact'} />
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

const SectionDot = tw.div<{ $isActive: boolean }>`
  w-min
  rounded-full
  transition-all
  duration-300
  ${p => (p.$isActive ? 'bg-secondary p-[5px] outline outline-2 outline-white sm:p-2' : 'bg-white/60 sm:p-1')} `;
