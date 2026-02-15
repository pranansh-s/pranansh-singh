import { FC } from 'react';

import { motion } from 'framer-motion';

import { useSection } from '../utils/SectionContext';

const Navbar: FC = () => {
  const { currentSection } = useSection();

  return (
    <motion.header
      initial={{
        x: 100,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="fixed right-0 z-20 m-2 hidden h-screen flex-col items-center justify-center gap-7 sm:flex md:m-8"
    >
      <div
        className={`w-min rounded-full transition-all duration-300 ${currentSection == 'hero' ? 'bg-secondary p-[5px] outline outline-2 outline-white md:p-2' : 'bg-white/60 p-[3px] md:p-1'}`}
      />
      <div
        className={`w-min rounded-full transition-all duration-300 ${currentSection == 'about' ? 'bg-secondary p-[5px] outline outline-2 outline-white md:p-2' : 'bg-white/60 p-[3px] md:p-1'}`}
      />
      <div
        className={`w-min rounded-full transition-all duration-300 ${currentSection == 'work' ? 'bg-secondary p-[5px] outline outline-2 outline-white md:p-2' : 'bg-white/60 p-[3px] md:p-1'}`}
      />
      <div
        className={`w-min rounded-full transition-all duration-300 ${currentSection == 'contact' ? 'bg-secondary p-[5px] outline outline-2 outline-white md:p-2' : 'bg-white/60 p-[3px] md:p-1'}`}
      />
    </motion.header>
  );
};

export default Navbar;
