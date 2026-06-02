import Image from 'next/image';

import { HTMLMotionProps, motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import Header from '@/components/ui/Header';
import LazyLottie from '@/components/ui/LazyLottie';

import { staggerContainer, swipeUpRevealChild } from '@/constants/motion';
import { Card, RowAll, RowAllResponsive } from '@/constants/skills';
import { IconLink, SocialLinks } from '@/constants/socials';

const loadMarioLottie = () => import('@/public/lottie/mario.json').then(m => m.default);
const loadAmongUsLottie = () => import('@/public/lottie/among-us.json').then(m => m.default);

interface HoverSkillCardProps extends HTMLMotionProps<'div'> {
  item: Card;
  isResponsive: boolean;
}

const HoverSkillCard = ({ item, isResponsive, ...props }: HoverSkillCardProps) => {
  return (
    <SkillCard
      className={`group relative ${isResponsive ? 'h-24 w-24 p-5 sm:h-36 sm:w-36 sm:p-3' : 'w-48'}`}
      style={{ backgroundColor: `#${item.color}` }}
      {...props}
    >
      <Image
        src={item.logo}
        alt={item.name}
        loading="lazy"
        className={isResponsive ? '' : '-rotate-90'}
        width={isResponsive ? 48 : 80}
        height={isResponsive ? 48 : 80}
        sizes={isResponsive ? '48px' : '80px'}
      />
      <Tooltip className={isResponsive ? '' : 'origin-bottom -rotate-90'}>
        <TooltipTitle>{item.name}</TooltipTitle>
      </Tooltip>
    </SkillCard>
  );
};

const Carousel = () => (
  <>
    <CarouselContainer>
      {RowAll.map((row: Card[], rowIdx: number) => (
        <CarouselRow
          className={rowIdx % 2 === 0 ? 'animate-xlcarouselScrollUp' : 'animate-xlcarouselScrollDown'}
          key={rowIdx}
          style={{ animationDuration: `${(row.length * row.length) / 2}s` }}
        >
          {[...row, ...row].map((item: Card, idx: number) => (
            <HoverSkillCard
              whileHover={{ scale: 1.1 }}
              key={`${rowIdx}-card-${idx}`}
              item={item}
              isResponsive={false}
            />
          ))}
        </CarouselRow>
      ))}
    </CarouselContainer>
    {RowAllResponsive.map((row: Card[], rowIdx: number) => (
      <CarouselRow
        key={rowIdx}
        className={`${rowIdx % 2 === 0 ? 'animate-carouselScrollLeft' : 'animate-carouselScrollRight'} xl:hidden`}
      >
        {[...row, ...row].map((item: Card, idx: number) => (
          <HoverSkillCard whileTap={{ scale: 1.1 }} key={`card-${idx}`} item={item} isResponsive={true} />
        ))}
      </CarouselRow>
    ))}
  </>
);

const About = () => (
  <AboutContainer id="about" aria-label="About me">
    <TopVignette />
    <Header title="about me" />
    <AboutMeContent {...staggerContainer}>
      <motion.p {...swipeUpRevealChild}>
        Hey there! I&apos;m <DeveloperName>&lt;PrananshSingh/&gt;</DeveloperName>, a software developer fueled by a deep
        curiosity for how things work under the hood. For me, programming isn&apos;t just about writing code; it&apos;s
        a creative craft. I love the process of translating complex, abstract ideas into tangible, polished digital
        tools that feel natural to use.
      </motion.p>
      <motion.p {...swipeUpRevealChild}>
        I thrive at the intersection of aesthetics and solid engineering. I believe software should not only look
        exceptionally premium but also run with absolute efficiency. From buttery-smooth 60fps micro-interactions to
        fine-tuning database indexes and optimizing layout render cycles, I focus on the tiny details that separate the
        good from the outstanding.
      </motion.p>
      <SocialLinkContainer>
        {SocialLinks.map((item: IconLink, idx: number) => (
          <SocialLink
            rel="noopener noreferrer"
            aria-label={item.name}
            {...swipeUpRevealChild}
            key={idx}
            href={item.link}
            target="_blank"
          >
            <SocialIcon width={28} height={28} src={item.icon} alt={item.name} sizes="28px" />
          </SocialLink>
        ))}
      </SocialLinkContainer>
    </AboutMeContent>
    <Carousel />
    <CharacterContainer>
      <MarioWrapper
        initial={{ x: '-750%' }}
        animate={{ x: '750%' }}
        viewport={{ once: true }}
        transition={{ duration: 16, repeat: Infinity, repeatType: 'loop' }}
      >
        <LazyLottie loader={loadMarioLottie} />
      </MarioWrapper>
      <AmongUsWrapper
        initial={{ x: '-750%' }}
        animate={{ x: '750%' }}
        viewport={{ once: true }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'loop' }}
      >
        <LazyLottie loader={loadAmongUsLottie} />
      </AmongUsWrapper>
    </CharacterContainer>
    <BottomVignette />
  </AboutContainer>
);

export default About;

const AboutContainer = tw.section`
  relative
  mx-auto
  flex
  max-w-[1600px]
  flex-col
  items-start
  justify-start
  gap-16
  overflow-clip
  rounded-xl
  border-2
  border-primary/10
  p-sm
  pb-24
  sm:gap-16
  md:p-md
  xl:h-full
  xl:gap-20
  xl:p-xl
  xl:!pb-36
`;

const AboutMeContent = tw(motion.div)`
  space-y-10
  pr-6
  text-left
  font-outerRegular
  text-sm
  leading-6
  text-primary/60
  sm:leading-9
  xl:w-[35%]
  xl:text-[0.9rem]
`;

const CarouselContainer = tw.div`
  absolute
  top-1/3
  left-full
  hidden
  origin-left
  rotate-[45deg]
  flex-col
  gap-3
  xl:flex
`;

const CharacterContainer = tw.div`
  pointer-events-none
  absolute
  bottom-0
  z-10
  w-screen
  origin-bottom
  scale-[0.5]
`;

const CarouselRow = tw.div`
  hover:pause
  flex
  w-max
  will-change-transform
`;

const SkillCard = tw(motion.div)`
  mr-3
  flex
  aspect-square
  items-center
  justify-center
  rounded-xl
`;

const SocialLinkContainer = tw.div`
  mt-8
  flex
  gap-6
`;

const SocialLink = tw(motion.a)`
  hov
  flex
  items-center
  rounded-full
  p-2
  transition-[background-color]
  duration-300
  ease-out
  hover:cursor-pointer
  hover:bg-secondary/20
  md:hover:cursor-none
`;

const Tooltip = tw.div`
  invisible
  absolute
  -top-2
  left-1/2
  z-50
  flex
  -translate-x-1/2
  -translate-y-[80%]
  flex-col
  items-center
  justify-center
  whitespace-nowrap
  rounded-md
  bg-[#1C172E]/95
  px-3
  py-1.5
  opacity-0
  backdrop-blur-sm
  transition-all
  duration-300
  group-hover:visible
  group-hover:-translate-y-full
  group-hover:opacity-100
`;

const TooltipTitle = tw.span`
  font-outerRegular
  text-sm
  text-white/90
`;

const DeveloperName = tw.span`
  font-cedarville
  text-lg
  text-secondary
  sm:text-xl
  lg:text-2xl
`;

const MarioWrapper = tw(motion.div)`
  absolute
  -bottom-44
  sm:-bottom-64
`;

const AmongUsWrapper = tw(motion.div)`
  absolute
  -bottom-40
  sm:-bottom-52
`;

const SocialIcon = tw(Image)`
  p-0.5
  opacity-80
  transition-opacity
  duration-300
  hover:opacity-100
  md:p-0
`;

const TopVignette = tw.div`
  pointer-events-none
  absolute
  top-0
  left-0
  z-10
  h-6
  w-full
  bg-gradient-to-t
  from-transparent
  to-[#1C172E]
  lg:h-24
`;

const BottomVignette = tw.div`
  pointer-events-none
  absolute
  bottom-0
  left-0
  h-12
  w-full
  bg-gradient-to-b
  from-transparent
  to-[#1C172E]
  lg:h-24
`;
