import { FC, useState } from "react";
import { work, WorkDetail } from "../data/work";
import WorkCard from "./WorkCard";

const Work: FC = () => {
  const [active, setActive] = useState<number>(-1);
  return (
    <section id="work" className="relative w-screen h-max text-white text-center bg-primary flex flex-col justify-center items-start md:justify-start border-t-2 border-white border-double">
      <header className="relative md:pl-24 pl-3 md:pt-12 pt-10 mt-10">
        <h1 className="font-cedarville text-6xl lg:text-7xl opacity-20 absolute md:left-[5.5rem] left-0 top-7 whitespace-nowrap">work</h1>
        <h1 className="font-outerBold text-5xl lg:text-6xl whitespace-nowrap">work</h1>
      </header>
      <ul className="flex flex-col mt-24">
        {work.map((item: WorkDetail, index: number) => <WorkCard key={index} setState={setActive} active={active} index={index} item={item}/>)}
        <span className="text-left font-outerLight text-xs opacity-30 md:pl-24 pl-3 my-16">. . . find more of my work and their source codes on github</span>
      </ul>
    </section>
  )
}

export default Work;