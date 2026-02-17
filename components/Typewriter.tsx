const DotLottieReact = dynamic(
  () => import('@lottiefiles/dotlottie-react').then((mod) => mod.DotLottieReact),
  { ssr: false }
);

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import tw from 'tailwind-styled-components';

const sentenceVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } },
};

interface ITypewriterProps {
  text: string;
}

const Typewriter: React.FC<ITypewriterProps> = ({ text }) => (
  <TypewriterContainer key={text} variants={sentenceVariants} initial="hidden" animate="visible">
    {text.split('').map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
    <DotLottieReact src="/lottie/typing.lottie" />
  </TypewriterContainer>
);

export default Typewriter;

const TypewriterContainer = tw(motion.div)`
  absolute
  bottom-0
  left-0
  w-screen
  whitespace-nowrap
  p-1
  text-left
  font-sans
  text-6xl
  text-purple-600
  text-opacity-40
  sm:p-3
  md:text-7xl
`;

const StyledLottie = tw(DotLottieReact)`
  absolute
  right-0
  bottom-0
  origin-bottom-right
  translate-x-12
  translate-y-8
  scale-[0.6]
  md:scale-[0.35]
  lg:translate-y-12
`;
