import Image from 'next/image';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import tw from 'tailwind-styled-components';

import Header from '@/components/Header';

import { swipeUpReveal } from '@/constants/motion';
import { Card, RowAll } from '@/constants/skills';
import { IconLink, SocialLinks } from '@/constants/socials';

import amongUsLottie from '@/public/lottie/among-us.json';
import marioLottie from '@/public/lottie/mario.json';

const Carousel = () => (
  <>
    <CarouselContainer>
      {RowAll.map((row: Card[], rowIdx: number) => (
        <CarouselRow
          className="animate-xlcarouselScroll"
          key={rowIdx}
          style={{ animationDuration: `${row.length * 20}s` }}
        >
          {Array(row.length * 2)
            .fill(row)
            .flat()
            .map((item: Card, idx: number) => (
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
      {[...RowAll, ...RowAll].flat().map((item: Card, idx: number) => (
        <SkillCard
          whileTap={{ scale: 1.1 }}
          className="w-36"
          key={`card-${idx}`}
          style={{ backgroundColor: `#${item.color}` }}
        >
          <Image src={item.logo} alt={item.logo} loading="lazy" width={64} height={64} sizes="64px" />
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
        <span className="font-bagelRegular text-xl text-secondary lg:text-2xl">&lt;PrananshSingh/&gt;</span>, a
        developer who enjoys crafting software across the entire spectrum—from polished user interfaces to the
        nitty-gritty of system internals. I believe great engineering means understanding how the pieces fit together,
        whether I&apos;m designing a <u>robust API</u>, tuning a database query, or exploring what happens at the metal.
      </motion.p>
      <motion.p {...swipeUpReveal}>
        I&apos;m drawn to the challenge of <u>building systems</u> that are both elegant and resilient. That means
        thinking about architecture from the start—structuring code for maintainability, choosing the right data flows,
        and optimizing performance where it counts. And I love digging into <u>low-level concepts</u>: memory models,
        concurrency, and the fundamentals that make software fast and reliable.
      </motion.p>
      <motion.p {...swipeUpReveal}>
        Ultimately, I&apos;m driven by curiosity—whether it&apos;s <u>a new framework</u>,{' '}
        <u>a systems programming language</u>, or a &nbsp;
        <u>clever architectural pattern</u>. I&apos;m always looking to learn and apply those insights to build software
        that&apos;s not just functional, but a joy to use and maintain.
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
          <Image width={24} height={24} src={item.icon} alt={item.name} />
        </SocialLink>
      ))}
    </SocialLinkContainer>
    <Carousel />
    <CharacterContainer>
      <motion.div
        className="absolute -bottom-44 lg:-bottom-20"
        initial={{ x: '-750%' }}
        animate={{ x: '750%' }}
        viewport={{ once: true }}
        transition={{ duration: 16, repeat: Infinity, repeatType: 'loop' }}
      >
        <Lottie animationData={marioLottie} />
      </motion.div>
      <motion.div
        className="absolute -bottom-36 lg:-bottom-10"
        initial={{ x: '-750%' }}
        animate={{ x: '750%' }}
        viewport={{ once: true }}
        transition={{ duration: 12, repeat: Infinity, repeatType: 'loop' }}
      >
        <Lottie animationData={amongUsLottie} />
      </motion.div>
    </CharacterContainer>
  </AboutContainer>
);

export default About;

const AboutContainer = tw.section`
  relative
  mx-auto
  flex
  h-full
  max-h-[800px]
  max-w-[1600px]
  flex-col
  items-start
  justify-start
  gap-16
  overflow-y-clip
  p-sm
  md:p-md
  xl:h-screen
  xl:max-h-[768px]
  xl:gap-20
  xl:p-xl
`;

const AboutMeContent = tw.div`
  space-y-5
  pr-6
  text-left
  font-outerRegular
  text-sm
  leading-7
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
  hover:bg-white
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
  z-10
  h-full
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
