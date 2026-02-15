import { FC, useEffect, useState } from 'react';

import { motion, useMotionValue, useSpring, Variants } from 'framer-motion';

import { cursorSpringConfig } from '@/constants/motion';

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, cursorSpringConfig);
  const springY = useSpring(cursorY, cursorSpringConfig);

  const [cursorVariant, setCursorVariant] = useState<'default' | 'hover'>('default');

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const checkHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest('.hov')) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', checkHoverState);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkHoverState);
    };
  }, [cursorX, cursorY]);

  const containerVariants: Variants = {
    default: { padding: '1.25rem' },
    hover: { padding: '2rem' },
  };

  return (
    <motion.div
      variants={containerVariants}
      animate={cursorVariant}
      className="pointer-events-none fixed z-50 hidden -top-5 -left-5 items-center justify-center rounded-full bg-white mix-blend-difference md:flex"
      style={{
        x: springX,
        y: springY,
      }}
    >
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 2.5, repeat: Infinity }}
        className="absolute rounded-full p-6 outline-dashed outline-2"
      />
    </motion.div>
  );
};

export default Cursor;