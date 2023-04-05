import { motion } from "framer-motion";
import { FC } from "react";
import { Card } from "../data/skills";

const Carousel: FC<{animationClass: string, data: any}> = ({animationClass, data}) => {
  return (
    <div className={`h-[18%] w-max space-x-3 flex p-[0.375rem] hover:pause animate-${animationClass || "scroll1"}`}>
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
