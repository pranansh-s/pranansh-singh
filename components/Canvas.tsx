import { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import { DelaunaySystem } from '@/utils/canvas';

const Canvas = () => {
  const canRef = useRef<HTMLCanvasElement>(null);
  const systemRef = useRef<DelaunaySystem | null>(null);

  useEffect(() => {
    if (!canRef.current) return;

    systemRef.current = new DelaunaySystem(canRef.current);
    systemRef.current.start();

    const handleResize = () => {
      systemRef.current?.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      systemRef.current?.stop();
      window.removeEventListener('resize', handleResize);
    };
  }, [canRef]);

  return (
    <CanvasContainer>
      <canvas className="absolute" ref={canRef} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute h-screen w-screen shadow-[inset_0px_0px_100px_83px_rgba(0,0,0,0.7)]"
      />
    </CanvasContainer>
  );
};

export default Canvas;

const CanvasContainer = tw.div`
  fixed
  top-0
  left-0
  -z-10
`;
