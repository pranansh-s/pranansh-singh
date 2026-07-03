import { CSSProperties, FC, KeyboardEvent, memo } from 'react';
import Image from 'next/image';

import { AnimatePresence, motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import { swipeUpRevealChild } from '@/constants/motion';
import { WorkDetail } from '@/constants/work';

const ArrowIcon: FC = () => (
  <svg
    aria-hidden="true"
    className="ml-1 w-5 rotate-45 fill-black transition-transform duration-300 group-hover:rotate-90"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
  </svg>
);

const GithubIcon: FC = () => (
  <svg width="20" height="20" viewBox="0 0 38 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_419_11)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.3318 0C9.19296 0 0.980988 7.8387 0.980988 17.5166C0.980988 25.2678 6.23389 31.8146 13.5283 34.1356C14.4459 34.2888 14.7899 33.7633 14.7899 33.3035C14.7899 32.8875 14.767 31.5081 14.767 30.041C10.1564 30.8512 8.96357 28.9681 8.59656 27.9828C8.39011 27.4792 7.49551 25.9246 6.7156 25.5086C6.07333 25.1802 5.15579 24.37 6.69266 24.3481C8.13779 24.3262 9.17002 25.6181 9.51409 26.1436C11.1657 28.793 13.8036 28.0485 14.8588 27.5887C15.0193 26.4501 15.501 25.6838 16.0286 25.2459C11.9456 24.8079 7.67902 23.2971 7.67902 16.597C7.67902 14.6921 8.39011 13.1156 9.55997 11.8894C9.37646 11.4515 8.73419 9.65605 9.74348 7.24751C9.74348 7.24751 11.2804 6.7877 14.7899 9.04296C16.258 8.64884 17.8178 8.45178 19.3776 8.45178C20.9374 8.45178 22.4973 8.64884 23.9653 9.04296C27.4749 6.7658 29.0118 7.24751 29.0118 7.24751C30.0211 9.65605 29.3788 11.4515 29.1953 11.8894C30.3652 13.1156 31.0762 14.6702 31.0762 16.597C31.0762 23.319 26.7868 24.8079 22.7037 25.2459C23.3689 25.7933 23.9424 26.8442 23.9424 28.4864C23.9424 30.8293 23.9194 32.7123 23.9194 33.3035C23.9194 33.7633 24.2635 34.3107 25.1811 34.1356C28.824 32.9615 31.9895 30.7266 34.2321 27.7454C36.4747 24.7642 37.6814 21.1868 37.6825 17.5166C37.6825 7.8387 29.4706 0 19.3318 0Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_419_11">
        <rect width="36.7015" height="35.0333" fill="white" transform="translate(0.980988)" />
      </clipPath>
    </defs>
  </svg>
);

const flowStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const flowBlockReveal = {
  hidden: { y: 24, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

interface IProjectTab {
  item: WorkDetail;
  isActive: boolean;
  onClick: () => void;
}

const ProjectTab: FC<IProjectTab> = ({ item, isActive, onClick }) => {
  return (
    <StyledProjectTab
      role="button"
      aria-label={`View details for ${item.name} project`}
      aria-expanded={isActive}
      tabIndex={0}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      onKeyDown={(e: KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      style={{ '--pc': item.color } as CSSProperties}
      $isActive={isActive}
    >
      <BackdropImage
        src={item.image}
        fill
        alt={`project-backdrop`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
      />
      <BackdropOverlay style={{ background: `linear-gradient(to top, ${item.color}55 0%, transparent 60%)` }} />
      <ProjectHeader>
        <YearTag>
          &apos;{item.year}&nbsp;<span className="font-outerRegular text-xl opacity-60">//</span> &nbsp;
        </YearTag>
        <span>{item.name}</span>
      </ProjectHeader>
      <TabMeta>[{item.tools[0]}]</TabMeta>
      <TabMarquee />
    </StyledProjectTab>
  );
};

interface IProjectDetails {
  item: WorkDetail;
  isActive: boolean;
}

const ProjectDetails: FC<IProjectDetails> = ({ item, isActive }) => {
  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <StyledDetailsContainer
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ backgroundColor: item.color }}
        >
          <DetailsInner>
            <FlowColumn initial="hidden" animate="visible" variants={flowStagger}>
              <FlowBlock variants={flowBlockReveal}>
                <ProjectTitle>{item.name}</ProjectTitle>
              </FlowBlock>
              <FlowBlock variants={flowBlockReveal}>
                <HeroComposition>
                  <Image
                    src={item.image}
                    width={800}
                    height={500}
                    className="h-auto w-full rounded-xl drop-shadow-lg"
                    alt={`project-${item.name}`}
                    sizes="(max-width: 1200px) 100vw, 960px"
                  />
                  <LandscapeOverlay>
                    <Image
                      className="h-auto w-full rounded-lg drop-shadow-2xl"
                      src={item.phone[1]}
                      width={480}
                      height={300}
                      alt={`${item.name} landscape view`}
                      sizes="(max-width: 1200px) 38vw, 380px"
                    />
                  </LandscapeOverlay>
                  <PortraitOverlay>
                    <Image
                      className="h-auto w-full drop-shadow-2xl"
                      src={item.phone[0]}
                      width={300}
                      height={420}
                      alt={`${item.name} mobile view`}
                      sizes="(max-width: 1200px) 15vw, 150px"
                    />
                  </PortraitOverlay>
                </HeroComposition>
              </FlowBlock>
              <FlowBlock variants={flowBlockReveal}>
                <InfoGrid>
                  <AboutBlock>
                    <ProjectAbout>{item.text}</ProjectAbout>
                    <Links>
                      {item.link && (
                        <StyledVisitLink
                          rel="noopener noreferrer"
                          aria-label={`Visit ${item.name} website`}
                          target="_blank"
                          href={item.link}
                        >
                          visit site <ArrowIcon />
                        </StyledVisitLink>
                      )}
                      {item.github && (
                        <StyledVisitLink
                          rel="noopener noreferrer"
                          aria-label={`Visit ${item.name} github`}
                          target="_blank"
                          href={item.github}
                        >
                          visit github &nbsp; <GithubIcon />
                        </StyledVisitLink>
                      )}
                    </Links>
                  </AboutBlock>
                  <MetaBlock>
                    {item.toolIcons && (
                      <MetaGroup>
                        <MetaLabel>[stack]</MetaLabel>
                        <ToolIconsContainer>
                          {item.toolIcons.map(icon => {
                            const name =
                              icon.split('/').pop()?.replace('.svg', '').replace(/-/g, ' ') || '';
                            return (
                              <ToolChip key={icon}>
                                <Image className="h-6 w-6 object-contain" src={icon} alt="" width={24} height={24} />
                                {name}
                              </ToolChip>
                            );
                          })}
                        </ToolIconsContainer>
                      </MetaGroup>
                    )}
                    <MetaGroup>
                      <MetaLabel>[highlights]</MetaLabel>
                      <ToolTagsContainer>
                        {item.tools.map((tool, i) => (
                          <ToolTag key={i}>{tool}</ToolTag>
                        ))}
                      </ToolTagsContainer>
                    </MetaGroup>
                  </MetaBlock>
                </InfoGrid>
              </FlowBlock>
            </FlowColumn>
          </DetailsInner>
        </StyledDetailsContainer>
      )}
    </AnimatePresence>
  );
};

interface IProjectCard {
  handleSet: (index: number) => void;
  active: number;
  index: number;
  item: WorkDetail;
}

const ProjectCard: FC<IProjectCard> = memo(({ handleSet, active, index, item }) => {
  const isActive = active === index;

  return (
    <motion.li {...swipeUpRevealChild}>
      <ProjectTab item={item} isActive={isActive} onClick={() => handleSet(index)} />
      <ProjectDetails item={item} isActive={isActive} />
    </motion.li>
  );
});

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;

const StyledProjectTab = tw(motion.div)<{ $isActive: boolean }>`
  hov
  group
  relative
  flex
  w-full
  items-center
  justify-center
  overflow-hidden
  rounded-md
  px-8
  transition-[height]
  duration-300
  ease-out
  md:justify-start
  md:px-16
  md:hover:cursor-none
  lg:rounded-xl
  lg:px-24
  ${p => (p.$isActive ? 'h-0' : 'sm:h-52 h-40')} `;

const BackdropImage = tw(Image)`
  scale-105
  object-cover
  opacity-0
  brightness-[0.3]
  transition-[opacity,transform]
  duration-500
  ease-out
  group-hover:scale-100
  group-hover:opacity-100
`;

const BackdropOverlay = tw.div`
  pointer-events-none
  absolute
  inset-0
  z-10
  opacity-0
  transition-opacity
  duration-500
  group-hover:opacity-100
`;

const ProjectHeader = tw.h2`
  z-10
  flex
  grow
  items-center
  gap-4
  font-outerRegular
  text-2xl
  text-primary/60
  transition-colors
  duration-300
  group-hover:text-primary
  group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
  sm:gap-16
  sm:text-3xl
  lg:text-5xl
`;

const YearTag = tw.span`
  font-bagelRegular
  text-secondary/60
  transition-colors
  duration-300
  group-hover:text-secondary
`;

const TabMeta = tw.span`
  z-10
  hidden
  whitespace-nowrap
  font-outerRegular
  text-xs
  uppercase
  tracking-widest
  text-primary/50
  transition-colors
  duration-300
  group-hover:text-primary/90
  lg:block
`;

const TabMarquee = tw.div`
  group-hover:bg-[var(--pc)]
  absolute
  bottom-3
  left-0
  z-10
  h-1
  w-full
  translate-x-0
  rounded-r-full
  rounded-l-none
  border-y-[1px]
  border-primary/25
  transition-[width,background-color,box-shadow]
  duration-300
  ease-out
  group-hover:w-3/4
  group-hover:shadow-[0_0_12px_var(--pc)]
  sm:h-2
`;

const FlowColumn = tw(motion.div)`
  mx-auto
  flex
  w-full
  max-w-[960px]
  flex-col
  items-start
  gap-8
  sm:gap-10
`;

const FlowBlock = tw(motion.div)`
  w-full
`;

const HeroComposition = tw.div`
  relative
  mb-10
  w-full
  sm:mb-14
`;

const LandscapeOverlay = tw.div`
  absolute
  -bottom-8
  right-[10%]
  z-10
  w-[38%]
  sm:-bottom-12
`;

const PortraitOverlay = tw.div`
  absolute
  -bottom-8
  right-[1%]
  z-20
  w-[16%]
  sm:-bottom-12
`;

const InfoGrid = tw.div`
  grid
  w-full
  gap-10
  lg:grid-cols-[minmax(0,1fr)_300px]
  lg:gap-16
`;

const MetaBlock = tw.div`
  flex
  flex-col
  gap-8
  lg:pt-1
`;

const MetaGroup = tw.div`
  flex
  flex-col
  gap-3
`;

const MetaLabel = tw.span`
  font-outerRegular
  text-xs
  uppercase
  tracking-widest
  text-black/60
`;

const AboutBlock = tw.div`
  flex
  flex-col
  items-start
  gap-8
`;

const Links = tw.div`
  flex
  flex-wrap
  gap-4
`;

const StyledVisitLink = tw.a`
  hov
  group
  flex
  items-center
  rounded-full
  py-2
  px-4
  font-outerRegular
  text-xs
  outline
  outline-1
  transition-colors
  duration-300
  hover:bg-primary
  hover:text-black
  focus:outline
  sm:text-sm
  md:hover:cursor-none
`;

const ProjectAbout = tw.p`
  max-w-[75ch]
  text-left
  font-outerRegular
  text-xs
  leading-6
  text-black/80
  sm:text-sm
  md:leading-8
  xl:text-base
`;

const ToolIconsContainer = tw.div`
  flex
  w-full
  flex-wrap
  gap-3
`;

const ToolChip = tw.span`
  flex
  items-center
  gap-2.5
  rounded-lg
  bg-white/90
  py-2
  px-3
  font-outerRegular
  text-sm
  text-black/80
  shadow-sm
`;

const ToolTagsContainer = tw.div`
  flex
  w-full
  flex-wrap
  gap-2
`;

const ToolTag = tw.span`
  inline-block
  rounded-md
  border
  border-black/25
  bg-black/10
  px-2.5
  py-0.5
  font-outerRegular
  text-xs
  leading-7
  text-black/80
  sm:text-sm
`;

const StyledDetailsContainer = tw(motion.div)`
  -mx-sm-md
  overflow-hidden
  md:-mx-md
  xl:-mx-xl
`;

const DetailsInner = tw.div`
  flex
  flex-col
  gap-10
  px-5
  py-12
  sm:gap-14
  sm:px-8
  sm:py-16
  md:px-24
`;

const ProjectTitle = tw.h3`
  text-left
  font-bagelRegular
  text-3xl
  uppercase
  sm:text-4xl
  md:text-6xl
`;
