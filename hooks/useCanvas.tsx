import { useEffect, useRef } from 'react';

import { DelaunaySystem } from '@/utils/canvas';
import { useSection } from '@/utils/SectionContext';

const useCanvas = () => {
  const { currentSection } = useSection();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const systemRef = useRef<DelaunaySystem | null>(null);

  useEffect(() => {
    if (!systemRef.current) return;

    switch (currentSection) {
      case 'hero':
        systemRef.current.setColor(78, 58, 128);
        break;
      case 'about':
        systemRef.current.setColor(79, 93, 163);
        break;
      case 'work':
        systemRef.current.setColor(145, 71, 110);
        break;
      case 'connect':
        systemRef.current.setColor(139, 68, 77);
        break;
    }
  }, [currentSection]);

  useEffect(() => {
    if (!canvasRef.current) return;

    systemRef.current = new DelaunaySystem(canvasRef.current);
    systemRef.current.start();

    let resizeRafId: number | null = null;
    const handleResize = () => {
      if (resizeRafId) cancelAnimationFrame(resizeRafId);
      resizeRafId = requestAnimationFrame(() => {
        systemRef.current?.resize();
        resizeRafId = null;
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
      systemRef.current?.stop();
      window.removeEventListener('resize', handleResize);
      if (resizeRafId) cancelAnimationFrame(resizeRafId);
    };
  }, []);

  return canvasRef;
};

export default useCanvas;
