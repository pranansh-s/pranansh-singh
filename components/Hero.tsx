import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import AnimatedArrow from '@/components/AnimatedArrow';
import Canvas from '@/components/Canvas';

import { draggableSpringConfig } from '@/constants/motion';

const Hero = () => (
  <HeroContainer id="hero">
    <Canvas />
    <HeroHeader>
      <NameTag
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="col-span-2 mr-auto"
      >
        pranansh
      </NameTag>
      <SubText
        initial={{ y: 50, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        {...draggableSpringConfig}
        drag
        className="mt-auto whitespace-nowrap font-outerMedium text-base md:text-lg xl:text-xl"
      >
        clean work on time
      </SubText>
      <SubText
        initial={{ y: 50, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        {...draggableSpringConfig}
        drag
        className="mb-auto w-48 font-cedarville text-lg md:w-64 md:text-xl xl:text-2xl"
      >
        get creative projects for your needs
      </SubText>
      <AnimatedArrow />
      <NameTag
        initial={{ x: 100, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="ml-auto"
      >
        singh
      </NameTag>
    </HeroHeader>
  </HeroContainer>
);

export default Hero;

const HeroContainer = tw.section`
  relative
  mx-auto
  flex
  h-screen
  max-h-[768px]
  max-w-[1600px]
  items-center
  justify-center
  text-center
  text-white
`;

const HeroHeader = tw.header`
  grid
  max-w-[90vw]
  grid-cols-3
  items-center
  justify-items-end
`;

const NameTag = tw(motion.h1)`
  pointer-events-none
  font-outerBold
  text-6xl
  uppercase
  drop-shadow-[0_0_4px_rgba(0,0,0,1)]
  lg:text-8xl
`;

const SubText = tw(motion.sub)`
  hov
  hidden
  text-white/30
  transition-colors
  duration-500
  hover:text-secondary
  sm:block
`;
