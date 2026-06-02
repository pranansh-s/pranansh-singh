import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import Canvas from '@/components/layout/Canvas';
import AnimatedArrow from '@/components/ui/AnimatedArrow';

import { draggableSpringConfig } from '@/constants/motion';

const Hero = () => (
  <HeroContainer id="hero" aria-label="Hero">
    <Canvas />
    <DotGrid />

    <HeroFrame
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <CornerStatus $position="topLeft">
        <StatusIndicator /> [sys_status // active]
      </CornerStatus>
      <CornerStatus $position="bottomRight">[role // software_developer]</CornerStatus>

      <CornerCrosshair $position="topLeft">+</CornerCrosshair>
      <CornerCrosshair $position="topRight">+</CornerCrosshair>
      <CornerCrosshair $position="bottomLeft">+</CornerCrosshair>
      <CornerCrosshair $position="bottomRight">+</CornerCrosshair>

      <HeroHeader>
        <NameTag
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          pranansh
        </NameTag>
        <MutedTagline
          initial={{ y: 30, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          {...draggableSpringConfig}
          transition={{ delay: 0.4 }}
          drag
        >
          ship fast. ship clean.
        </MutedTagline>
        <HandwrittenQuote
          initial={{ y: 30, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ y: 0, opacity: 1 }}
          {...draggableSpringConfig}
          transition={{ delay: 0.5 }}
          drag
        >
          your weird idea? let&apos;s build it.
        </HandwrittenQuote>
        <AnimatedArrow />
        <LastNameTag
          initial={{ x: 100, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          singh
        </LastNameTag>
      </HeroHeader>
    </HeroFrame>
  </HeroContainer>
);

export default Hero;

const HeroContainer = tw.section`
  relative
  mx-auto
  flex
  h-screen
  max-h-[1200px]
  items-center
  justify-center
  px-6
  text-center
  text-primary
  sm:px-12
`;

const DotGrid = tw.div`
  pointer-events-none
  absolute
  inset-0
  [background-image:radial-gradient(rgba(245,241,249,0.08)_1px,transparent_0)]
  [background-size:24px_24px]
  [-webkit-mask-image:radial-gradient(circle_at_center,transparent_20%,black_75%)]
  [mask-image:radial-gradient(circle_at_center,transparent_20%,black_75%)]
`;

const HeroFrame = tw(motion.div)`
  relative
  flex
  items-center
  justify-center
  rounded-xl
  border
  border-primary/[0.04]
  bg-primary/[0.005]
  p-8
  md:p-12
`;

const HeroHeader = tw.header`
  grid
  w-full
  grid-cols-3
  items-center
  justify-items-end
  gap-12
  px-sm
  sm:gap-0
  sm:px-0
`;

const StatusIndicator = tw.div`
  mr-3
  h-2
  w-2
  rounded-full
  bg-green-400
`;

const NameTag = tw(motion.h1)`
  pointer-events-none
  col-span-full
  mr-auto
  w-full
  text-left
  font-bagelRegular
  text-6xl
  uppercase
  drop-shadow-[0_0_4px_rgba(0,0,0,1)]
  sm:col-span-2
  sm:w-auto
  sm:text-7xl
  md:text-8xl
  xl:text-9xl
`;

const LastNameTag = tw(motion.h2)`
  pointer-events-none
  col-span-full
  ml-auto
  w-full
  text-right
  font-bagelRegular
  text-6xl
  uppercase
  drop-shadow-[0_0_4px_rgba(0,0,0,1)]
  sm:col-span-1
  sm:w-auto
  sm:text-7xl
  md:text-8xl
  xl:text-9xl
`;

const MutedTagline = tw(motion.sub)`
  hov
  mt-auto
  hidden
  whitespace-nowrap
  font-outerRegular
  text-xl
  text-primary/30
  transition-[color]
  duration-300
  hover:text-secondary
  sm:block
  md:text-2xl
  xl:text-3xl
`;

const HandwrittenQuote = tw(motion.sub)`
  hov
  mb-auto
  hidden
  w-[15rem]
  font-cedarville
  text-2xl
  !leading-[3rem]
  tracking-widest
  text-primary/30
  transition-[color]
  duration-300
  hover:text-secondary
  sm:block
  md:text-2xl
  xl:w-[25rem]
  xl:text-3xl
  xl:text-4xl
`;

const CornerCrosshair = tw.div<{ $position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' }>`
  pointer-events-none
  absolute
  font-outerRegular
  text-sm
  text-primary/20
  transition-opacity
  duration-300
  ${p => p.$position === 'topLeft' && 'top-0 left-0 -translate-x-1/2 -translate-y-1/2'}
  ${p => p.$position === 'topRight' && 'top-0 right-0 translate-x-1/2 -translate-y-1/2'}
  ${p => p.$position === 'bottomLeft' && 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2'}
  ${p => p.$position === 'bottomRight' && 'bottom-0 right-0 translate-x-1/2 translate-y-1/2'} `;

const CornerStatus = tw.div<{ $position: 'topLeft' | 'bottomRight' }>`
  pointer-events-none
  absolute
  flex
  items-center
  font-outerRegular
  text-[8px]
  uppercase
  tracking-widest
  text-primary/40
  sm:text-[10px]
  ${p => p.$position === 'topLeft' && '-top-6 left-0'}
  ${p => p.$position === 'bottomRight' && '-bottom-6 right-0'} `;
