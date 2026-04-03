import { FC } from 'react';

import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import LazyLottie from './LazyLottie';

const loadTypingLottie = () => import('@/public/lottie/typing.json').then(m => m.default);

const sentenceVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
};

interface ITypewriterProps {
  text: string;
}

const Typewriter: FC<ITypewriterProps> = ({ text }) => (
  <TypewriterContainer
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <StyledLottie loader={loadTypingLottie} />
    {text.split('').map((char, i) => (
      <motion.span
        className="relative bottom-10 -left-3 xl:bottom-0 xl:-left-16"
        key={`${char}-${i}`}
        variants={letterVariants}
      >
        {char}
      </motion.span>
    ))}
  </TypewriterContainer>
);

export default Typewriter;

const TypewriterContainer = tw(motion.div)`
  w-full
  whitespace-nowrap
  px-1
  text-left
  font-outerRegular
  text-[2.7vw]
  text-secondary/80
  sm:px-3
  xl:text-[2.5rem]
`;

const StyledLottie = tw(LazyLottie)`
  pointer-events-none
  absolute
  right-0
  bottom-0
  origin-bottom-right
  translate-x-10
  translate-y-8
  scale-[0.4]
  opacity-40
  md:scale-[0.35]
  lg:translate-y-12
  xl:opacity-100
`;
