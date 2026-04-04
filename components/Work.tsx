import { useState } from 'react';

import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import Header from '@/components/Header';
import ProjectCard from '@/components/ProjectCard';
import Typewriter from '@/components/Typewriter';

import { staggerContainer } from '@/constants/motion';
import { projects, work, WorkDetail } from '@/constants/work';

const Work = () => {
  const [active, setActive] = useState<number>(-1);
  const handleSetActive = (index: number) => {
    setActive(index);
  };

  return (
    <WorkContainer id="work" aria-label="Work & Projects">
      <Header title="work" />
      <ProjectList {...staggerContainer}>
        {work.map((item: WorkDetail, index: number) => (
          <ProjectCard key={`work-${index}`} handleSet={handleSetActive} index={index} active={active} item={item} />
        ))}
      </ProjectList>
      <Header title="projects" />
      <ProjectList {...staggerContainer}>
        {projects.map((item: WorkDetail, index: number) => (
          <ProjectCard
            key={`project-${index}`}
            handleSet={handleSetActive}
            index={index + work.length}
            active={active}
            item={item}
          />
        ))}
      </ProjectList>
      <Typewriter text=". . . find more of my work and their source codes on github" />
    </WorkContainer>
  );
};

export default Work;

const WorkContainer = tw.section`
  relative
  mx-auto
  flex
  max-w-[1600px]
  flex-col
  gap-16
  border-b-2
  p-sm
  sm:gap-20
  md:p-md
  xl:p-xl
`;

const ProjectList = tw(motion.ul)`
  relative
  flex
  flex-col
  gap-3
  sm:gap-6
`;
