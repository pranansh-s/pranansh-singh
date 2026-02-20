import { FC, memo } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import { swipeUpReveal } from '@/constants/motion';
import { WorkDetail } from '@/constants/work';

const ArrowIcon = () => (
  <svg
    aria-hidden="true"
    className="ml-1 w-5 rotate-45 fill-black transition-all duration-300 group-hover:rotate-90"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
  >
    <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
  </svg>
);

interface IProjectCard {
  handleSet: any;
  active: number;
  index: number;
  item: WorkDetail;
}

const ProjectCard: FC<IProjectCard> = memo(({ handleSet, active, index, item }) => (
  <motion.li {...swipeUpReveal}>
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
        priority
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
          width={600}
          height={300}
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
        <span className="flex items-end justify-around">
          <Image
            src={item.doodleIcons[1]}
            width={80}
            height={80}
            alt={`project-doodle-${index}-${item.doodleIcons[1]}`}
            sizes="80px"
          />
          <Image
            src={item.doodleIcons[0]}
            width={80}
            height={80}
            alt={`project-doodle-${index}-${item.doodleIcons[0]}`}
            sizes="80px"
          />
        </span>
        <span className="flex p-2">
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
              Visit Github <ArrowIcon />
            </StyledVisitLink>
          )}
        </Links>
        <ProjectAbout>
          <span className="text-sm italic">
            <b className="font-bagelRegular text-lg not-italic">Knowledge:</b> {item.tools.join(' | ')}
          </span>
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
  transition-all
  duration-300
  ease-out
  md:justify-start
  md:px-16
  lg:rounded-xl
  lg:px-24
  md:hover:cursor-none
  ${p => (p.$isActive ? 'h-0' : 'h-48')} `;

const StyledBackdrop = tw(Image)`
  object-cover
  brightness-[0.2]
  hue-rotate-90
`;

const ProjectHeader = tw.h2`
  z-10
  text-center
  font-outerRegular
  text-3xl
  text-purple-200/70
  group-hover:text-secondary
  lg:text-5xl
`;

const TabMarquee = tw.div`
  absolute
  bottom-3
  left-1/2
  h-2
  w-full
  -translate-x-1/2
  rounded-r-full
  rounded-l-full
  border-y-[1px]
  transition-all
  duration-300
  ease-out
  group-hover:w-1/2
  group-hover:bg-secondary
  md:left-0
  md:translate-x-0
  lg:rounded-l-none
`;

const ProjectDetailsContainer = tw.div<{ $isActive: boolean }>`
  flex
  flex-col
  gap-16
  px-8
  transition-all
  duration-300
  ease-out
  md:px-24
  lg:flex-row
  lg:flex-wrap
  ${p => (p.$isActive ? 'scale-y-100 py-16 opacity-100 -mx-sm md:-mx-md xl:-mx-xl' : 'h-0 scale-y-20 opacity-0')} `;

const ProjectDetail = tw.div`
  flex
  flex-1
  flex-col
  items-start
  gap-6
  lg:items-end
`;

const Links = tw.div`
  mx-auto
  flex
  gap-6
  lg:mx-0
  lg:mb-16
`;

const ProjectTitle = tw.h3`
  my-auto
  flex-1
  text-center
  font-bagelRegular
  text-4xl
  uppercase
  md:text-7xl
  xl:text-left
`;

const ProjectAbout = tw.p`
  text-center
  font-outerRegular
  text-sm
  opacity-80
  lg:text-right
  lg:text-base
  2xl:text-lg
`;

const DisplayImagesContainer = tw.div`
  mx-auto
  grid
  grid-cols-[auto_auto]
  grid-rows-[40%_60%]
  gap-12
  lg:w-[40%]
  lg:-translate-y-24
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
  text-sm
  outline
  outline-1
  transition-all
  duration-300
  hover:cursor-pointer
  hover:bg-white
  hover:text-black
  md:hover:cursor-none
  lg:mx-0
`;
