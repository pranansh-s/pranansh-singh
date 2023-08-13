import { motion } from "framer-motion";
import { FC, useEffect } from "react";
import { useSection } from "../utils/SectionContext";

const Navbar: FC = () => {
  const { currentSection } = useSection();

  useEffect(() => console.log(currentSection));
  return (
    <motion.header
        initial={{
            x: 100,
            opacity: 0
        }}
        animate={{
            x: 0,
            opacity: 1
        }}
        transition={{ duration: 1.5 }}
        className="fixed h-screen flex-col justify-center sm:flex hidden items-center gap-7 right-0 m-2 md:m-8 z-20">
        <div className={`w-min rounded-full transition-all duration-300 ${currentSection == 'hero' ? 'bg-secondary outline outline-2 outline-white md:p-2 p-[5px]' : 'bg-white/60 md:p-1 p-[3px]'}`}/>
        <div className={`w-min rounded-full transition-all duration-300 ${currentSection == 'about' ? 'bg-secondary outline outline-2 outline-white md:p-2 p-[5px]' : 'bg-white/60 md:p-1 p-[3px]'}`}/>
        <div className={`w-min rounded-full transition-all duration-300 ${currentSection == 'work' ? 'bg-secondary outline outline-2 outline-white md:p-2 p-[5px]' : 'bg-white/60 md:p-1 p-[3px]'}`}/>
        <div className={`w-min rounded-full transition-all duration-300 ${currentSection == 'contact' ? 'bg-secondary outline outline-2 outline-white md:p-2 p-[5px]' : 'bg-white/60 md:p-1 p-[3px]'}`}/>
    </motion.header>
  )
}

export default Navbar