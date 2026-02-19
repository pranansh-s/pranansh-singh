import { useState } from 'react';

import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import useCursor, { CursorType } from '@/hooks/useCursor';

const containerVariants = {
  default: { padding: '1.5rem' },
  hover: { padding: '2.5rem' },
};

const Cursor = () => {
  const [cursorVariant, setCursorVariant] = useState<CursorType>('default');
  const { springX, springY } = useCursor(setCursorVariant);

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
