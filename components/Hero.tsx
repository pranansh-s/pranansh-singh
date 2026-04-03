import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import AnimatedArrow from '@/components/AnimatedArrow';
import Canvas from '@/components/Canvas';

import { draggableSpringConfig } from '@/constants/motion';

const Hero = () => (
  <HeroContainer id="hero" aria-label="Hero">
    <Canvas />
    <HeroHeader>
      <NameTag
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1.5 }}
        className="col-span-2 mr-auto"
      >
        pranansh
      </NameTag>
      <SubText
        initial={{ y: 50, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        {...draggableSpringConfig}
        transition={{ delay: 1 }}
        drag
        className="mt-auto whitespace-nowrap font-outerRegular"
      >
        ship fast. ship clean.
      </SubText>
      <SubText
        initial={{ y: 50, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ y: 0, opacity: 1 }}
        {...draggableSpringConfig}
        transition={{ delay: 1 }}
        drag
        className="mb-auto w-[15rem] font-cedarville text-2xl !leading-[3rem] tracking-widest xl:w-[25rem] xl:text-4xl"
      >
        your weird idea? let&apos;s build it.
      </SubText>
      <AnimatedArrow />
      <NameTag
        initial={{ x: 100, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
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
  max-h-[1200px]
  max-w-[1600px]
  items-center
  justify-center
  text-center
  text-primary
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
  font-bagelRegular
  text-6xl
  uppercase
  drop-shadow-[0_0_4px_rgba(0,0,0,1)]
  sm:text-7xl
  md:text-8xl
  xl:text-9xl
`;

const SubText = tw(motion.sub)`
  hov
  hidden
  text-xl
  text-primary/30
  transition-colors
  duration-500
  hover:text-secondary
  sm:block
  md:text-2xl
  xl:text-3xl
`;
