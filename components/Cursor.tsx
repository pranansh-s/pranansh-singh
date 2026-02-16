import { useEffect, useState } from 'react';

import { motion, useMotionValue, useSpring, Variants } from 'framer-motion';
import tw from 'tailwind-styled-components';

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
    default: { padding: '1.5rem' },
    hover: { padding: '2.5rem' },
  };

  return (
    <CursorContainer
      variants={containerVariants}
      animate={cursorVariant}
      style={{
        x: springX,
        y: springY,
      }}
    >
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ ease: 'linear', duration: 2.5, repeat: Infinity }}
        className="absolute rounded-full p-8 outline-dashed outline-2"
      />
    </CursorContainer>
  );
};

export default Cursor;

const CursorContainer = tw(motion.div)`
  pointer-events-none
  fixed
  -top-8
  -left-5
  z-50
  hidden
  items-center
  justify-center
  rounded-full
  bg-white
  mix-blend-difference
  md:flex
`;
