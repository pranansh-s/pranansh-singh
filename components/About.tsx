import Image from 'next/image';

import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import Header from '@/components/Header';

import { swipeUpReveal } from '@/constants/motion';
import { Card, RowAll } from '@/constants/skills';
import { IconLink, SocialLinks } from '@/constants/socials';

import LazyLottie from './LazyLottie';

const loadMarioLottie = () => import('@/public/lottie/mario.json').then(m => m.default);
const loadAmongUsLottie = () => import('@/public/lottie/among-us.json').then(m => m.default);

const Carousel = () => (
  <>
    <CarouselContainer>
      {RowAll.map((row: Card[], rowIdx: number) => (
        <CarouselRow
          className={rowIdx % 2 === 0 ? 'animate-xlcarouselScrollUp' : 'animate-xlcarouselScrollDown'}
          key={rowIdx}
          style={{ animationDuration: `${row.length * row.length}s` }}
        >
          {[...row, ...row].map((item: Card, idx: number) => (
            <SkillCard
              whileHover={{ scale: 1.1 }}
              className="w-48"
              key={`${rowIdx}-card-${idx}`}
              style={{ backgroundColor: `#${item.color}` }}
            >
              <Image
                src={item.logo}
                alt={item.logo}
                loading="lazy"
                className="-rotate-90"
                width={80}
                height={80}
                sizes="80px"
              />
            </SkillCard>
          ))}
        </CarouselRow>
      ))}
    </CarouselContainer>
    <CarouselRow className="mb-24 animate-carouselScroll xl:hidden">
      {[...RowAll.flat(), ...RowAll.flat()].map((item: Card, idx: number) => (
        <SkillCard
          whileTap={{ scale: 1.1 }}
          className="h-24 w-24 p-5"
          key={`card-${idx}`}
          style={{ backgroundColor: `#${item.color}` }}
        >
          <Image src={item.logo} alt={item.logo} loading="lazy" width={48} height={48} sizes="48px" />
        </SkillCard>
      ))}
    </CarouselRow>
  </>
);

const About = () => (
  <AboutContainer id="about" aria-label="About me">
    <Header title="about me" />
    <AboutMeContent>
      <motion.p {...swipeUpReveal}>
        Hello! I&apos;m{' '}
        <span className="font-cedarville text-lg text-secondary sm:text-xl lg:text-2xl">&lt;PrananshSingh/&gt;</span>, a
        developer who enjoys crafting software across the entire spectrum—from polished user interfaces to the
        nitty-gritty of system internals.
        I've debugged layout thrashing, shaved seconds off initial loads, and learned why useCallback isn't a free lunch.
      </motion.p>
      <motion.p {...swipeUpReveal}>
        I design <u>UI/UX</u> that doesn't fight back, <u>maintainable APIs</u> that don't crumble under load, optimize <u>database queries</u> before they become problems, and think
        about <u>memory & concurrency</u> as first-class concerns.
      </motion.p>
      <motion.p {...swipeUpReveal}>
        I care about architecture that outlives the first feature request.
        No fluff, no magic — just code that earns its keep.
        I avoid cleverness that becomes tomorrow's footgun, document the why not just the what, and treat <u>maintainability</u> as a feature — not an afterthought.
      </motion.p>
    </AboutMeContent>
    <SocialLinkContainer {...swipeUpReveal}>
      {SocialLinks.map((item: IconLink, idx: number) => (
        <SocialLink
          rel="noopener noreferrer"
          aria-label={item.name}
          {...swipeUpReveal}
          initial={{ y: 100, rotate: -45, opacity: 0 }}
          key={idx}
          href={item.link}
          target="_blank"
        >
          <Image width={24} height={24} src={item.icon} alt={item.name} sizes="24px" className='md:p-0 p-1' />
        </SocialLink>
      ))}
    </SocialLinkContainer>
    <Carousel />
    <CharacterContainer>
      <motion.div
        className="absolute -bottom-36 sm:-bottom-64"
        initial={{ x: '-750%' }}
        animate={{ x: '750%' }}
        viewport={{ once: true }}
        transition={{ duration: 16, repeat: Infinity, repeatType: 'loop' }}
      >
        <LazyLottie loader={loadMarioLottie} />
      </motion.div>
      <motion.div
        className="absolute -bottom-32 sm:-bottom-52"
        initial={{ x: '-750%' }}
        animate={{ x: '750%' }}
        viewport={{ once: true }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'loop' }}
      >
        <LazyLottie loader={loadAmongUsLottie} />
      </motion.div>
    </CharacterContainer>
  </AboutContainer>
);

export default About;

const AboutContainer = tw.section`
  relative
  mx-auto
  flex
  sm:h-[750px]
  max-w-[1600px]
  flex-col
  items-start
  justify-start
  gap-12
  overflow-y-clip
  border-y-2
  p-sm
  before:pointer-events-none
  before:absolute
  before:top-0
  before:left-0
  before:z-10
  before:h-6
  before:w-full
  before:bg-gradient-to-t
  before:from-transparent
  before:to-[#1C172E]
  after:pointer-events-none
  after:absolute
  after:bottom-0
  after:left-0
  after:h-12
  after:w-full
  after:bg-gradient-to-b
  after:from-transparent
  after:to-[#1C172E]
  sm:gap-16
  md:p-md
  lg:before:h-24
  lg:after:h-24
  xl:h-full
  xl:gap-20
  xl:p-xl
`;

const AboutMeContent = tw.div`
  space-y-5
  pr-6
  text-left
  font-outerRegular
  text-sm
  leading-6
  sm:leading-9
  text-primary/60
  xl:w-[35%]
  xl:text-[0.9rem]
`;

const SocialLinkContainer = tw(motion.div)`
  flex
  space-x-3
  xl:space-x-6
`;

const SocialLink = tw(motion.a)`
  hov
  flex
  items-center
  rounded-full
  p-2
  transition-all
  duration-300
  ease-out
  hover:cursor-pointer
  hover:bg-primary
  md:hover:cursor-none
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
