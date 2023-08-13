import { FC } from "react";
import { WorkDetail } from "../data/work";

const WorkCard: FC<{setState: any, index: number, active: number, item: WorkDetail}> = ({setState, index, active, item}) => {
  return (
    <>
      <div className={`bg-black relative ${active === index ? 'h-0' : 'h-48'} xl:snap-center snap-none group click w-screen px-3 md:px-16 xl:px-24 flex flex-col md:items-start items-center justify-center overflow-hidden transition-all duration-300`} onClick={() => setState(index)}>
          <img src={item.images[0]} alt="" className="w-screen object-cover absolute left-0 brightness-[0.2]" />
          <h4 className="font-outerBold text-black md:text-5xl text-3xl font-outline transition-all duration-300 z-10">{item.name}</h4>
          <div className="w-screen absolute bottom-6 md:left-0 left-1/2 md:translate-x-0 -translate-x-1/2 group-hover:w-[50vw] h-2 border rounded-full transition-all duration-300"/>
      </div>
      <div className={`${active === index ? 'scale-y-100 opacity-100 py-16 h-max' : 'scale-y-0 opacity-0 h-0'} xl:max-h-screen max-h-max w-screen origin-top xl:snap-center md:px-24 px-8 transition-all duration-500`} style={{backgroundColor: item.color}}>
        <div className="flex xl:flex-row flex-col items-center justify-between font-outerBold lg:text-7xl text-5xl xl:text-left text-center xl:space-y-0 space-y-10">
          <h4 onClick={() => setState(-1)} className="xl:w-1/3 w-full lg:hover:pb-3 hover:drop-shadow-xl leading-[1.2] transition-all duration-200">{item.name.toUpperCase()}</h4>
          <div className="xl:w-1/2 w-full">
            <img src={item.images[0]} className="drop-shadow-xl" alt="" />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col-reverse xl:space-y-0 space-y-10">
          <div className="xl:w-1/2 w-full flex items-end xl:justify-start justify-center xl:mt-0 mt-16">
            <img src={item.phone[0]} className="md:h-[23rem] h-[19rem] drop-shadow-lg" alt="" />
            <div>
              <div className="flex w-full justify-between xl:px-10 px-0 xl:scale-100 origin-bottom scale-75 items-end">
                <img src={item.doodleIcons[0]} alt="" className="h-max" />
                <img src={item.doodleIcons[1]} alt="" className="h-max" />
              </div>
              <img src={item.phone[1]} className="md:w-[23rem] w-[19rem] drop-shadow-lg" alt="" />
            </div>
          </div>
          <div className="flex flex-col xl:items-end items-start justify-center space-y-6 xl:text-right text-left xl:w-1/2 w-full">
            {item.link && <a target="_blank" className="focus:outline-1 font-outerLight w-max active:outline-1 click hover:bg-white group hover:text-black md:hover:cursor-none hover:cursor-pointer outline outline-1 py-2 px-4 rounded-full flex text-sm items-center transition-all duration-300" href={item.link}>
              Visit Site
              <svg className="fill-white group-hover:fill-black group-hover:rotate-90 transition-all duration-300 rotate-45 w-5 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg>
            </a>}
            <p className="font-outerLight 2xl:text-lg lg:text-base text-sm">{item.text}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkCard;