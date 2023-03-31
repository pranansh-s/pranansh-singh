import { motion, useMotionValue, useSpring } from 'framer-motion';
import { FC, useEffect, useRef } from "react";

const Cursor: FC = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const cursorTextPull = useRef<HTMLSpanElement>(null);
  const cursorTextClick = useRef<HTMLSpanElement>(null);

  const posX = useMotionValue(0);
  const posY = useMotionValue(0);

  const springConfig = { damping: 100, stiffness: 900 };
  const cursorX = useSpring(posX, springConfig);
  const cursorY = useSpring(posY, springConfig);
  
  useEffect(() => {
    const setPos = (e: MouseEvent) => {
      posX.set(e.clientX);
      posY.set(e.clientY);
    }

    const hoverMousePull = () => {
      cursor.current!.style.padding = '2rem';
      cursorTextPull.current!.style.transform = "scale(1, 1)";
    }

    const hoverMouseClick = () => {
      cursor.current!.style.padding = '2rem';
      cursorTextClick.current!.style.transform = "scale(1, 1)";
    }
    
    const unHoverMousePull = () => {
      cursor.current!.style.padding = '1.25rem';
      cursorTextPull.current!.style.transform = "scale(0, 0)";
    }

    const unHoverMouseClick = () => {
      cursor.current!.style.padding = '1.25rem';
      cursorTextClick.current!.style.transform = "scale(0, 0)";
    }


    Array.from(document.getElementsByClassName('hov')).forEach((el) => el.addEventListener('mouseover', hoverMousePull));
    Array.from(document.getElementsByClassName('hov')).forEach((el) => el.addEventListener('mouseout', unHoverMousePull));
    Array.from(document.getElementsByClassName('click')).forEach((el) => el.addEventListener('mouseover', hoverMouseClick));
    Array.from(document.getElementsByClassName('click')).forEach((el) => el.addEventListener('mouseout', unHoverMouseClick));
    window.addEventListener('mousemove', setPos);
    return () => {
      Array.from(document.getElementsByClassName('hov')).forEach((el) => el.removeEventListener('mouseover', hoverMousePull));
      Array.from(document.getElementsByClassName('hov')).forEach((el) => el.removeEventListener('mouseout', unHoverMousePull));
      Array.from(document.getElementsByClassName('click')).forEach((el) => el.removeEventListener('mouseover', hoverMouseClick));
      Array.from(document.getElementsByClassName('click')).forEach((el) => el.removeEventListener('mouseout', unHoverMouseClick));
      window.removeEventListener('mousemove', setPos);
    }
  }, []);

  return (
    <motion.div
      style={{
        translateX: cursorX,
        translateY: cursorY,
        transitionProperty: 'padding'
      }}
      className="md:flex fixed pointer-events-none -top-8 -left-8 bg-white rounded-full mix-blend-difference duration-300 p-5 z-30 hidden justify-center items-center" ref={cursor}>
        <span className="transition-all duration-300 text-xs text-primary text-center font-outerMedium opacity-60 w-10 scale-0 absolute" ref={cursorTextPull}>Pull Me</span>
        <span className="transition-all duration-300 text-xs text-primary text-center font-outerMedium opacity-60 w-10 scale-0 absolute" ref={cursorTextClick}>Click Me</span>
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ ease: "linear", duration: 5, repeat: Infinity }}
          className="rounded-full outline-dashed outline-2 p-6 absolute"></motion.span>
    </motion.div>
  )
}

export default Cursor