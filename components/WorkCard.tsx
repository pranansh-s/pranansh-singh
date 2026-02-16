import { FC } from 'react';

import { WorkDetail } from '@/data/work';

const WorkCard: FC<{ setState: any; index: number; active: number; item: WorkDetail }> = ({
  setState,
  index,
  active,
  item,
}) => {
  return (
    <>
      <div
        className={`relative bg-black ${active === index ? 'h-0' : 'h-48'} hov group flex w-screen snap-none flex-col items-center justify-center overflow-hidden px-3 transition-all duration-300 md:items-start md:px-16 xl:snap-center xl:px-24`}
        onClick={() => setState(index)}
      >
        <img src={item.images[0]} alt="" className="absolute left-0 w-screen object-cover brightness-[0.2]" />
        <h4 className="font-outline z-10 font-outerBold text-3xl text-black transition-all duration-300 md:text-5xl">
          {item.name}
        </h4>
        <div className="absolute bottom-6 left-1/2 h-2 w-screen -translate-x-1/2 rounded-full border transition-all duration-300 group-hover:w-[50vw] md:left-0 md:translate-x-0" />
      </div>
      <div
        className={`${active === index ? 'h-max scale-y-100 py-16 opacity-100' : 'h-0 scale-y-0 opacity-0'} max-h-max w-screen origin-top px-8 transition-all duration-500 md:px-24 xl:max-h-screen xl:snap-center`}
        style={{ backgroundColor: item.color }}
      >
        <div className="flex flex-col items-center justify-between space-y-10 text-center font-outerBold text-5xl lg:text-7xl xl:flex-row xl:space-y-0 xl:text-left">
          <h4
            onClick={() => setState(-1)}
            className="w-full leading-[1.2] transition-all duration-200 hover:drop-shadow-xl lg:hover:pb-3 xl:w-1/3"
          >
            {item.name.toUpperCase()}
          </h4>
          <div className="w-full xl:w-1/2">
            <img src={item.images[0]} className="drop-shadow-xl" alt="" />
          </div>
        </div>
        <div className="flex flex-col-reverse space-y-10 xl:flex-row xl:space-y-0">
          <div className="mt-16 flex w-full items-end justify-center xl:mt-0 xl:w-1/2 xl:justify-start">
            <img src={item.phone[0]} className="h-[19rem] drop-shadow-lg md:h-[23rem]" alt="" />
            <div>
              <div className="flex w-full origin-bottom scale-75 items-end justify-between px-0 xl:scale-100 xl:px-10">
                <img src={item.doodleIcons[0]} alt="" className="h-max" />
                <img src={item.doodleIcons[1]} alt="" className="h-max" />
              </div>
              <img src={item.phone[1]} className="w-[19rem] drop-shadow-lg md:w-[23rem]" alt="" />
            </div>
          </div>
          <div className="flex w-full flex-col items-start justify-center space-y-6 text-left xl:w-1/2 xl:items-end xl:text-right">
            {item.link && (
              <a
                rel="noreferrer"
                target="_blank"
                className="hov group flex w-max items-center rounded-full py-2 px-4 font-outerLight text-sm outline outline-1 transition-all duration-300 hover:cursor-pointer hover:bg-white hover:text-black focus:outline-1 active:outline-1 md:hover:cursor-none"
                href={item.link}
              >
                Visit Site
                <svg
                  className="ml-1 w-5 rotate-45 fill-white transition-all duration-300 group-hover:rotate-90 group-hover:fill-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z" />
                </svg>
              </a>
            )}
            <p className="font-outerLight text-sm lg:text-base 2xl:text-lg">{item.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkCard;
