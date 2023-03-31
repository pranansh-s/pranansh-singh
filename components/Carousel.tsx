import { motion } from "framer-motion";
import { FC, useEffect, useRef } from "react";
import { Card } from "../data/skills";

const Carousel: FC<{animation: string, data: any}> = ({animation, data}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    carouselRef.current?.classList.add(`animate-${animation}`);
  }, []);
  return (
    <div ref={carouselRef} className={`h-[18%] w-max space-x-3 flex p-[0.375rem] hover:pause`}>
      {data.map((item: Card, index: number) =>
        <motion.div
          key={index}
          initial={{y: 0, x: 0}}
          whileHover={{y: 6, x: -6}}
          className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[18vh] bg-${item.color}`}
          style={{ backgroundColor: `#${item.color}` }}>
            <img src={item.logo} alt="" className="w-[60%] h-[60%] -rotate-90" />
        </motion.div>)}
      {data.map((item: Card, index: number) =>
        <motion.div
          key={index}
          initial={{y: 0, x: 0}}
          whileHover={{y: 6, x: -6}}
          className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[18vh] bg-${item.color}`}
          style={{ backgroundColor: `#${item.color}` }}>
            <img src={item.logo} alt="" className="w-[60%] h-[60%] -rotate-90" />
        </motion.div>)}
      {data.map((item: Card, index: number) =>
        <motion.div
          key={index}
          initial={{y: 0, x: 0}}
          whileHover={{y: 6, x: -6}}
          className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[18vh] bg-${item.color}`}
          style={{ backgroundColor: `#${item.color}` }}>
            <img src={item.logo} alt="" className="w-[60%] h-[60%] -rotate-90" />
        </motion.div>)}
      {data.map((item: Card, index: number) =>
        <motion.div
          key={index}
          initial={{y: 0}}
          whileHover={{y: 6, x: -6}}
          className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[18vh] bg-${item.color}`}
          style={{ backgroundColor: `#${item.color}` }}>
            <img src={item.logo} alt="" className="w-[60%] h-[60%] -rotate-90" />
        </motion.div>)}
    </div>
  )
};

export default Carousel;
