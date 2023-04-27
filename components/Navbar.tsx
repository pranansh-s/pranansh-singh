import { motion } from "framer-motion";
import { FC } from "react";

const Navbar: FC = () => {
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
        <div className="md:p-2 p-[5px] w-min rounded-full bg-secondary outline outline-2 outline-white"/>
        <div className="md:p-1 p-[3px] w-min rounded-full bg-white/60"/>
        <div className="md:p-1 p-[3px] w-min rounded-full bg-white/60"/>
        <div className="md:p-1 p-[3px] w-min rounded-full bg-white/60"/>
    </motion.header>
  )
}

export default Navbar