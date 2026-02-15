import { FC, useState } from 'react';

import WorkCard from '@/components/WorkCard';

import { work, WorkDetail } from '@/data/work';

const Work: FC = () => {
  const [active, setActive] = useState<number>(-1);
  return (
    <section
      id="work"
      className="relative flex h-max w-screen flex-col items-start justify-center border-t-2 border-double border-white bg-primary text-center text-white md:justify-start"
    >
      <header className="relative mt-10 pl-3 pt-10 md:pl-24 md:pt-12">
        <h1 className="absolute left-0 top-7 whitespace-nowrap font-cedarville text-6xl opacity-20 md:left-[5.5rem] lg:text-7xl">
          work
        </h1>
        <h1 className="whitespace-nowrap font-outerBold text-5xl lg:text-6xl">work</h1>
      </header>
      <ul className="mt-24 flex flex-col">
        {work.map((item: WorkDetail, index: number) => (
          <WorkCard key={index} setState={setActive} active={active} index={index} item={item} />
        ))}
        <span className="my-16 pl-3 text-left font-outerLight text-xs opacity-30 md:pl-24">
          . . . find more of my work and their source codes on github
        </span>
      </ul>
    </section>
  );
};

export default Work;
