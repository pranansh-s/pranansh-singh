import { motion } from "framer-motion";

const sentenceVariants = {
  hidden: {},
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const letterVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { opacity: { duration: 0 } } }
};

interface ITypewriterProps {
	text: string;
}

const Typewriter: React.FC<ITypewriterProps> = ({ text, ...rest }) => (
  <motion.p
		className="absolute bottom-4 font-mono left-8 text-4xl md:text-7xl text-white/40 whitespace-nowrap"
    key={text}
    variants={sentenceVariants}
    initial="hidden"
    animate="visible"
    {...rest}
  >
    {text.split("").map((char, i) => (
      <motion.span key={`${char}-${i}`} variants={letterVariants}>
        {char}
      </motion.span>
    ))}
  </motion.p>
);

export default Typewriter;