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

const Typewriter = () => {
  return (
    <TypewriterContainer
      variants={sentenceVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <StyledLottie loader={loadTypingLottie} />
      {". . . find more of my work and their source codes on ".split('').map((char, i) => (
        <motion.span
          className="relative -bottom-10 -left-3 xl:bottom-0 xl:-left-16"
          key={`${char}-${i}`}
          variants={letterVariants}
        >
          {char}
        </motion.span>
      ))}
      <motion.a
        href="https://github.com/pranansh-s"
        target="_blank"
        rel="noopener noreferrer"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="relative -bottom-10 -left-3 xl:bottom-0 xl:-left-16 inline-flex transition-colors duration-300 underline decoration-secondary/30 hover:decoration-secondary hover:text-white md:cursor-none hov underline-offset-[6px]"
      >
        {"github".split('').map((char, i) => (
          <motion.span
            key={`github-${char}-${i}`}
            variants={letterVariants}
          >
            {char}
          </motion.span>
        ))}
      </motion.a>
    </TypewriterContainer>
  );
};

export default Typewriter;

const TypewriterContainer = tw(motion.div)`
  whitespace-nowrap
  px-1
  text-left
  font-outerRegular
  text-[clamp(0.75rem,2.5vw,2.5rem)]
  text-secondary/80
  xl:pb-0
  pb-16
  sm:px-3
`;

const StyledLottie = tw(LazyLottie)`
  pointer-events-none
  absolute
  right-0
  bottom-0
  origin-bottom-right
  translate-x-10
  translate-y-6
  scale-[0.4]
  opacity-40
  md:scale-[0.35]
  lg:translate-y-12
  xl:opacity-100
`;
