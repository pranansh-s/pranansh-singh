import { FC, memo } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import { swipeUpRevealChild } from '@/constants/motion';
import { WorkDetail } from '@/constants/work';

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    className="ml-1 w-5 rotate-45 fill-black transition-transform duration-300 group-hover:rotate-90"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
  </svg>
);

const GithubIcon = () => (
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

interface IProjectCard {
  handleSet: any;
  active: number;
  index: number;
  item: WorkDetail;
}

const ProjectCard: FC<IProjectCard> = memo(({ handleSet, active, index, item }) => (
  <motion.li {...swipeUpRevealChild}>
    <ProjectTab
      role="button"
      aria-label={`View details for ${item.name} project`}
      aria-expanded={active === index}
      tabIndex={0}
      whileTap={{ scale: 1.05 }}
      $isActive={active == index}
      onClick={() => handleSet(index)}
    >
      <StyledBackdrop
        src={item.image}
        layout="fill"
        alt={`project-backdrop-${index}`}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
      />
      <ProjectHeader>{item.name}</ProjectHeader>
      <TabMarquee />
    </ProjectTab>
    <ProjectDetailsContainer $isActive={active == index} style={{ backgroundColor: item.color }}>
      <ProjectTitle>{item.name}</ProjectTitle>
      <span className="mx-auto">
        <Image
          src={item.image}
          width={800}
          height={500}
          className="drop-shadow-lg"
          alt={`project-${index}-${item.name}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
        />
      </span>
      <DisplayImagesContainer>
        <span className="row-span-2 flex">
          <Image
            className="drop-shadow-lg"
            src={item.phone[0]}
            width={300}
            height={400}
            alt={`project-phone-${index}-${item.phone[0]}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 40vw, 300px"
          />
        </span>
        <span className="flex max-h-72 items-end justify-around">
          <Image
            src={item.doodleIcons[1]}
            width={60}
            height={60}
            alt={`project-doodle-${index}-${item.doodleIcons[1]}`}
            className="aspect-square"
            sizes="60px"
          />
          <Image
            src={item.doodleIcons[0]}
            width={60}
            height={60}
            alt={`project-doodle-${index}-${item.doodleIcons[0]}`}
            className="aspect-square"
            sizes="60px"
          />
        </span>
        <span>
          <Image
            className="drop-shadow-lg"
            src={item.phone[1]}
            width={500}
            height={300}
            alt={`project-phone-${index}-${item.phone[1]}`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
          />
        </span>
      </DisplayImagesContainer>
      <ProjectDetail>
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
          {item.tools.map((tool, i) => (
            <span
              key={i}
              className="mx-1 inline-block rounded-md border border-black/30 bg-black/20 px-2 leading-7 text-black"
            >
              {tool}
            </span>
          ))}
          <br />
          <br />
          {item.text}
        </ProjectAbout>
      </ProjectDetail>
    </ProjectDetailsContainer>
  </motion.li>
));

ProjectCard.displayName = 'ProjectCard';
export default ProjectCard;

const ProjectTab = tw(motion.div)<{ $isActive: boolean }>`
  hov
  group
  relative
  flex
  items-center
  justify-center
  overflow-hidden
  rounded-md
  px-3
  transition-[height]
  duration-300
  ease-out
  md:justify-start
  md:px-16
  md:hover:cursor-none
  lg:rounded-xl
  lg:px-24
  ${p => (p.$isActive ? 'h-0' : 'sm:h-48 h-36')} `;

const StyledBackdrop = tw(Image)`
  object-cover
  brightness-[0.2]
  hue-rotate-90
`;

const ProjectHeader = tw.h2`
  z-10
  text-center
  font-outerRegular
  text-2xl
  text-purple-200/70
  transition-colors
  duration-300
  group-hover:text-secondary
  sm:text-3xl
  lg:text-5xl
`;

const TabMarquee = tw.div`
  absolute
  bottom-3
  left-1/2
  h-1
  w-full
  -translate-x-1/2
  rounded-r-full
  rounded-l-full
  border-y-[1px]
  transition-[width,background-color]
  duration-300
  ease-out
  group-hover:w-1/2
  group-hover:bg-secondary
  sm:h-2
  md:left-0
  md:translate-x-0
  lg:rounded-l-none
`;

const ProjectDetailsContainer = tw.div<{ $isActive: boolean }>`
  flex
  flex-col
  gap-8
  px-3
  transition-[transform,opacity,height,padding,margin]
  duration-300
  ease-out
  sm:gap-16
  sm:px-8
  md:px-24
  xl:flex-row
  xl:flex-wrap
  ${p => (p.$isActive ? 'scale-y-100 py-16 opacity-100 -mx-sm md:-mx-md xl:-mx-xl' : 'h-0 scale-y-20 opacity-0')} `;

const ProjectDetail = tw.div`
  flex
  flex-1
  flex-col
  items-start
  gap-12
  sm:gap-0
  xl:items-end
`;

const Links = tw.div`
  mx-auto
  flex
  gap-6
  sm:mb-16
  xl:mx-0
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

const ProjectAbout = tw.p`
  text-center
  font-outerRegular
  text-xs
  leading-6
  opacity-80
  sm:text-sm
  md:leading-8
  xl:text-right
  xl:text-base
  2xl:text-lg
`;

const DisplayImagesContainer = tw.div`
  mx-auto
  grid
  grid-cols-[auto_auto]
  gap-6
  xl:w-[40%]
  xl:-translate-y-24
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
