import { FC } from "react";
import { work, WorkCard } from "../data/work";

const Work: FC = () => {
  return (
    <section className="relative w-screen h-max text-white lg:snap-start text-center bg-primary flex justify-center items-start md:justify-start md:pl-24 pl-3 md:pt-12 pt-10">
      <header className="relative top-[10%]">
        <h1 className="font-cedarville text-6xl lg:text-7xl opacity-20 whitespace-nowrap">work</h1>
        <h1 className="font-outerBold text-5xl lg:text-6xl absolute top-3 left-4 whitespace-nowrap">work</h1>
      </header>
      <ul className="mt-36 flex flex-col w-full -translate-x-36">
        {work.map((item: WorkCard, index: number) => 
          <div key={index} className="flex lg:flex-row flex-col lg:space-x-16 space-x-0 lg:items-start items-center">
            <img src={item.img} alt="" className="lg:w-[30rem] w-full" />
            <div className="flex flex-col items-center space-y-5">
              <h2 className="font-outerBold text-3xl">{item.name}</h2>
              <p className="font-outerLight text-base">{item.text}</p>
            </div>
          </div>)}
      </ul>
    </section>
  )
}

export default Work;