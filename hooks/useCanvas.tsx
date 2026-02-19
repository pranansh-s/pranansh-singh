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
        systemRef.current.setColor(65, 41, 90);
        break;
      case 'about':
        systemRef.current.setColor(26, 45, 178);
        break;
      case 'work':
        systemRef.current.setColor(188, 21, 159);
        break;
      case 'contact':
        systemRef.current.setColor(120, 36, 72);
        break;
    }
  }, [currentSection]);

  useEffect(() => {
    if (!canvasRef.current) return;

    systemRef.current = new DelaunaySystem(canvasRef.current);
    systemRef.current.start();

    const handleResize = () => {
      systemRef.current?.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      systemRef.current?.stop();
      window.removeEventListener('resize', handleResize);
    };
  }, [canvasRef]);

  return canvasRef;
};

export default useCanvas;
