import { FC, memo } from 'react';
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
      $isActive={isActive}
    >
      <BackdropImage
        src={item.image}
        fill
        alt={`project-backdrop`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
      />
      <BackdropOverlay style={{ background: `linear-gradient(to top, ${item.color}44 0%, transparent 60%)` }} />
      <ProjectHeader>
        <span className="font-bagelRegular">
          &apos;{item.year}&nbsp;<span className="font-outerRegular text-xl opacity-60">//</span> &nbsp;
        </span>
        <span>{item.name}</span>
      </ProjectHeader>
      <TabMarquee />
    </StyledProjectTab>
  );
};

interface IProjectMediaGallery {
  item: WorkDetail;
}

const ProjectMediaGallery: FC<IProjectMediaGallery> = ({ item }) => {
  return (
    <>
      <MainImageWrapper>
        <Image
          src={item.image}
          width={800}
          height={500}
          className="drop-shadow-lg"
          alt={`project-${item.name}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
      </MainImageWrapper>
      <DisplayImagesContainer>
        <div className="row-span-2">
          <Image
            className="object-cover drop-shadow-lg"
            src={item.phone[0]}
            width={300}
            height={400}
            alt={`project-phone-${item.phone[0]}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 300px"
          />
        </div>
        <DoodlesWrapper>
          <Image
            src={item.doodleIcons[1]}
            width={60}
            height={60}
            alt={`project-doodle-${item.doodleIcons[1]}`}
            className="aspect-square"
            sizes="60px"
          />
          <Image
            src={item.doodleIcons[0]}
            width={60}
            height={60}
            alt={`project-doodle-${item.doodleIcons[0]}`}
            className="aspect-square"
            sizes="60px"
          />
        </DoodlesWrapper>
        <div>
          <Image
            className="object-cover drop-shadow-lg"
            src={item.phone[1]}
            width={300}
            height={300}
            alt={`project-phone-${item.phone[1]}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          />
        </div>
      </DisplayImagesContainer>
    </>
  );
};

interface IProjectDetailsContent {
  item: WorkDetail;
}

const ProjectDetailsContent: FC<IProjectDetailsContent> = ({ item }) => {
  return (
    <StyledProjectDetail>
      <Links>
        {item.link && (
          <StyledVisitLink
            rel="noopener noreferrer"
            aria-label={`Visit ${item.name} website`}
            target="_blank"
            href={item.link}
          >
            Visit Site <ArrowIcon />
          </StyledVisitLink>
        )}
        {item.github && (
          <StyledVisitLink
            rel="noopener noreferrer"
            aria-label={`Visit ${item.name} github`}
            target="_blank"
            href={item.github}
          >
            Visit Github &nbsp; <GithubIcon />
          </StyledVisitLink>
        )}
      </Links>
      <ProjectAbout>
        {item.toolIcons && (
          <ToolIconsContainer>
            {item.toolIcons.map((icon, i) => {
              const name = icon.split('/').pop()?.replace('.svg', '').replace(/-/g, ' ').replace('c ', 'C++') || '';
              return (
                <ToolIconWrapper key={`icon-${i}`}>
                  <Image src={icon} alt={name} width={44} height={44} />
                  <ToolIconTooltip>{name}</ToolIconTooltip>
                </ToolIconWrapper>
              );
            })}
          </ToolIconsContainer>
        )}
        <ToolTagsContainer>
          {item.tools.map((tool, i) => (
            <ToolTag key={i}>{tool}</ToolTag>
          ))}
        </ToolTagsContainer>
        {item.text}
      </ProjectAbout>
    </StyledProjectDetail>
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
            <ProjectTitle>
              {item.name}
            </ProjectTitle>
            <ProjectMediaGallery item={item} />
            <ProjectDetailsContent item={item} />
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
  object-cover
  brightness-[0.35]
  transition-[filter]
  duration-500
  group-hover:brightness-[0.45]
`;

const BackdropOverlay = tw.div`
  pointer-events-none
  absolute
  inset-0
  z-10
`;

const ProjectHeader = tw.h2`
  z-10
  flex
  grow
  items-center
  gap-4
  font-outerRegular
  text-2xl
  text-purple-200/80
  transition-colors
  duration-300
  group-hover:text-secondary
  sm:gap-16
  sm:text-3xl
  lg:text-5xl
`;

const TabMarquee = tw.div`
  absolute
  bottom-3
  z-10
  h-1
  w-full
  border-y-[1px]
  rounded-r-full
  transition-[width,background-color,box-shadow]
  duration-300
  ease-out
  group-hover:w-3/4
  group-hover:bg-secondary
  group-hover:shadow-[0_0_12px_rgba(255,88,88,0.3)]
  sm:h-2
  left-0
  translate-x-0
  rounded-l-none
`;

const MainImageWrapper = tw.div`
  w-full
  xl:w-auto
`;

const DisplayImagesContainer = tw.div`
  mx-auto
  grid
  grid-cols-[auto_auto]
  items-end
  gap-6
  xl:w-[40%]
  xl:-translate-y-24
`;

const DoodlesWrapper = tw.span`
  flex
  max-h-72
  items-end
  justify-around
`;

const StyledProjectDetail = tw.div`
  flex
  flex-1
  flex-col
  items-start
  gap-10
  sm:gap-0
  xl:items-end
`;

const Links = tw.div`
  mx-auto
  flex
  gap-6
  sm:mb-12
  xl:mx-0
`;

const StyledVisitLink = tw.a`
  hov
  group
  mx-auto
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
  hover:cursor-pointer
  hover:bg-primary
  hover:text-black
  focus:outline
  sm:text-sm
  md:hover:cursor-none
  lg:mx-0
`;

const ProjectAbout = tw.div`
  text-center
  font-outerRegular
  text-xs
  leading-6
  sm:text-sm
  md:leading-8
  xl:text-right
  xl:text-base
  2xl:text-lg
`;

const ToolIconsContainer = tw.div`
  mb-6
  flex
  flex-wrap
  justify-center
  gap-8
  xl:justify-end
`;

const ToolIconWrapper = tw.div`
  group
  relative
  flex
  items-center
  justify-center
`;

const ToolIconTooltip = tw.span`
  invisible
  absolute
  -top-2
  left-1/2
  z-50
  -translate-x-1/2
  -translate-y-[80%]
  whitespace-nowrap
  rounded-md
  bg-black/80
  px-2.5
  py-1
  font-outerRegular
  text-xs
  capitalize
  text-white/90
  opacity-0
  backdrop-blur-sm
  transition-all
  duration-300
  group-hover:visible
  group-hover:-translate-y-full
  group-hover:opacity-100
`;

const ToolTagsContainer = tw.div`
  mb-6
  flex
  flex-wrap
  justify-center
  gap-2
  xl:justify-end
`;

const ToolTag = tw.span`
  bg-black/15
  mx-1
  inline-block
  rounded-md
  border
  border-black/20
  px-2.5
  py-0.5
  text-xs
  leading-7
  text-black/90
  opacity-80
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
  gap-6
  px-3
  py-12
  sm:gap-12
  sm:px-8
  sm:py-16
  md:px-24
  xl:flex-row
  xl:flex-wrap
`;

const ProjectTitle = tw.h3`
  my-auto
  flex-1
  text-center
  font-bagelRegular
  text-3xl
  uppercase
  sm:text-4xl
  md:text-7xl
  xl:text-left
`;
