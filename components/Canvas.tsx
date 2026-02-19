import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import useCanvas from '@/hooks/useCanvas';

const Canvas = () => {
  const canvasRef = useCanvas();

  return (
    <CanvasContainer>
      <canvas className="absolute" ref={canvasRef} />
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
