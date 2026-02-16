import { motion, useMotionValue, useTransform } from 'framer-motion';
import Lottie from 'lottie-react';
import tw from 'tailwind-styled-components';

import AnimatedArrow from '@/components/AnimatedArrow';
import Canvas from '@/components/Canvas';

import { draggableSpringConfig } from '@/constants/motion';

import typingLottie from '@/public/typing.json';
import Typewriter from './Typewriter';

const PortfolioTag = () => (
  <ProfileTagContainer>
    <div className="h-[0.1rem] w-10 rounded-xl bg-white md:w-24" />
    <span className="font-outerRegular text-[0.65rem]">Portfolio</span>
  </ProfileTagContainer>
);

const Hero = () => (
  <HeroContainer id="hero">
    <Canvas />
    <HeroHeader>
      <NameTag
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="col-span-2 mr-auto"
      >
        pranansh
      </NameTag>
      <SubText
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        {...draggableSpringConfig}
        drag
        className="mt-auto whitespace-nowrap font-outerMedium text-base md:text-lg xl:text-xl"
      >
        clean work on time
      </SubText>
      <SubText
        initial={{ y: 50, opacity: 0 }}
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
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="ml-auto"
      >
        singh
      </NameTag>
    </HeroHeader>
    <Typewriter text='hello bonjour aloha नमस्ते привет こんにちは مرحبًا'/>
    <StyledLottie animationData={typingLottie} />
    <PortfolioTag />
  </HeroContainer>
);

export default Hero;

const HeroContainer = tw.section`
  relative
  flex
  h-screen
  max-w-[1600px]
  items-center
  justify-center
  text-center
  text-white
  xl:snap-center
`;

const StyledLottie = tw(Lottie)`
  absolute
  right-0
  bottom-0
  origin-bottom-right
  translate-x-12
  translate-y-8
  lg:translate-y-12
  scale-[0.6]
  md:scale-[0.35]
`;

const HeroHeader = tw.header`
  grid
  max-w-[90vw]
  grid-cols-3
  items-center
  justify-items-end
`;

const NameTag = tw(motion.h1)`
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
  hover:text-white/70
  sm:block
`;

const ProfileTagContainer = tw.div`
  absolute
  right-0
  bottom-0
  flex
  translate-x-16
  -translate-y-20
  rotate-90
  items-center
  gap-2
  opacity-40
`;
