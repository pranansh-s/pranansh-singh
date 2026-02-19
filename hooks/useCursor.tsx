import { Dispatch, SetStateAction, useEffect } from 'react';

import { useMotionValue, useSpring } from 'framer-motion';

import { cursorSpringConfig } from '@/constants/motion';

export type CursorType = 'default' | 'hover';

const useCursor = (setVariant: Dispatch<SetStateAction<CursorType>>) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, cursorSpringConfig);
  const springY = useSpring(cursorY, cursorSpringConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const checkHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest('.hov')) {
        setVariant('hover');
      } else {
        setVariant('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', checkHoverState);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkHoverState);
    };
  }, [cursorX, cursorY, setVariant]);

  return { springX, springY };
};

export default useCursor;
