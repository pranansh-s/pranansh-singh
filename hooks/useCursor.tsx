import { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';

import { useMotionValue, useSpring } from 'framer-motion';

import { cursorSpringConfig } from '@/constants/motion';

export type CursorType = 'default' | 'hover';

const THROTTLE_MS = 16;

const useCursor = (setVariant: Dispatch<SetStateAction<CursorType>>) => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, cursorSpringConfig);
  const springY = useSpring(cursorY, cursorSpringConfig);

  const lastUpdateTime = useRef(0);

  const moveCursor = useCallback(
    (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastUpdateTime.current >= THROTTLE_MS) {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
        lastUpdateTime.current = now;
      }
    },
    [cursorX, cursorY]
  );

  const checkHoverState = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (target.closest('.hov')) {
        setVariant('hover');
      } else {
        setVariant('default');
      }
    },
    [setVariant]
  );

  useEffect(() => {
    window.addEventListener('mousemove', moveCursor, { passive: true });
    window.addEventListener('mouseover', checkHoverState, { passive: true });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', checkHoverState);
    };
  }, [moveCursor, checkHoverState]);

  return { springX, springY };
};

export default useCursor;
