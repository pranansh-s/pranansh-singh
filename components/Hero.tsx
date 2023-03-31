import { motion, useMotionValue, useTransform } from "framer-motion";
import { FC } from "react";
import Canvas from "./Canvas"

const Hero: FC = () => {
  const y = useMotionValue(0);
  const rotate = useTransform(y, [-150, 150], [-90, 90])
  
  return (
    <section className="relative h-screen flex items-center justify-center text-white snap-center text-center">
      <Canvas />
      <div className="h-max xl:w-[70rem] lg:w-[53rem] md:w-[35rem] w-[26rem] grid grid-cols-3 gap-x-3 lg:gap-x-8 justify-items-end items-center">
        <motion.h1 
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }} className="uppercase xl:text-8xl lg:text-7xl md:text-5xl text-4xl font-outerBold text-left col-span-2 mr-auto">pranansh</motion.h1>
        <motion.sub
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 1000, bounceDamping: 30 }}
          dragElastic={0.05}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.5 }} className="hov hover:text-white/70 text-white/30 font-outerMedium xl:text-xl lg:text-lg md:text-sm text-xs mt-auto transition-colors duration-500 pb-1">clean work on time</motion.sub>
        <motion.sub
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 1000, bounceDamping: 30 }}
          dragElastic={0.03}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, delay: 0.5 }} className="hov hover:text-white/70  text-white/30 font-cedarville xl:text-2xl lg:text-xl md:text-base text-sm transition-colors duration-500 lg:w-52 w-36">get creative projects for your needs</motion.sub>
        <div className="hov relative mr-auto md:scale-125 lg:scale-[1.8]">
          <motion.svg width="80" height="80" viewBox="0 0 156 137" fill="none" strokeLinecap="round"
              drag='y' dragElastic={0.01} style={{ rotate: rotate, y: y}}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 15 }}>
              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 0.52, opacity: 1 }} transition={{ duration: 2 }} strokeWidth={4} d="M20.7433 63.9884C13.1188 70.3958 10.2626 81.1531 12.0573 91.1792C13.9745 101.884 21.2174 110.799 31.081 115.153C41.0416 119.551 52.5977 119.546
              62.106 114.961C72.2543 110.066 79.7569 100.547 83.3192 89.7519C86.8217 79.1341 88.0108 64.0793 78.1076 55.8794C73.839 52.3437 68.0791 50.852 63.1235 53.1549C58.1949 55.4432 54.9671 60.5469 54.5457 66.0844C53.6151 78.3339
              64.3555 88.6096 74.9882 92.5308C84.6763 96.1028 95.549 95.6302 104.734 91.6562C114.533 87.4166 121.995 79.4199 125.952 69.3578C129.957 59.1668 130.614 47.33 127.754 36.4444C127.064 33.8249 126.171 31.2858 125.043 28.809C124.524
              27.6648 123.397 26.888 122.163 27.2756C121.027 27.6343 120.356 28.9581 120.781 30.1453C124.129 39.4627 125.383 49.4076 123.586 58.988C121.879 68.0852 117.378 76.8082 110.12 82.3696C96.4211 92.8642 72.3201 93.0257 61.9364
              76.0298C59.2905 71.7009 58.4949 66.6589 60.5341 62.1216C62.3013 58.1849 66.0413 55.507 70.4964 56.4199C75.2195 57.3862 78.8591 61.2843 80.5298 65.7719C82.5127 71.0953 82.2894 76.9827 81.3033 82.3748C79.4514 92.5048 74.1296
              102.054 66.058 108.161C58.3424 113.997 48.4779 116.175 38.7813 114.091C29.5884 112.116 20.8781 106.247 16.8197 97.307C12.8788 88.6232 12.7088 78.2548 17.3893 70.1992C18.5257 68.2429 19.9626 66.5045 21.6103 64.9825C22.1251
              64.5033 21.2922 63.5283 20.7433 63.9884Z" stroke="#FF5858"/>
              <motion.path initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 0.22, opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }} strokeWidth={5} d="M120.644 27.3614C119.023 27.7556 117.98 30.038 117.11 31.3431C116.048 32.9358 114.99 34.5256 113.963 36.1433C112.917 37.789 111.875 39.4355 110.83 41.0812C109.768 42.7572 108.422 44.4386
              107.636 46.272C106.757 48.3172 109.58 50.4565 111.032 48.6118C112.263 47.0481 113.118 45.0827 114.086 43.3342C115.068 41.5605 116.052 39.789 117.034 38.0153C118.017 36.2438 118.959 34.4516 119.895 32.6505C120.613 31.2671 121.884
              29.4815 121.511 27.8198C121.423 27.4384 120.963 27.2845 120.644 27.3614Z M123.007 27.5754C123.622 29.1538 125.398 30.1009 126.723 31.0288C128.299 32.1332 129.875 33.2449 131.467 34.3227C134.768 36.5592 138.034 38.8826 141.431
              40.952C142.734 41.7442 144.126 39.6378 142.848 38.7395C139.635 36.4737 136.273 34.4352 132.963 32.327C131.36 31.3075 129.739 30.316 128.122 29.3217C126.701 28.4477 124.972 27.053 123.28 27.1604C123.087 27.1732 122.929 27.374 123.007 27.5754Z" stroke="#FF5858"/>
          </motion.svg>
        </div>
        <motion.h1 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }} className="uppercase xl:text-8xl lg:text-7xl md:text-5xl text-4xl font-outerBold text-right">singh</motion.h1>
      </div>
      <div className="rotate-90 absolute lg:-right-18 md:-right-12 -right-8 md:bottom-20 bottom-12 flex items-center md:gap-3 gap-1 opacity-40">
        <div className="h-[0.1rem] w-10 md:w-24 rounded-xl bg-white"/>
        <div className="font-outerRegular lg:text-[0.5rem] md:text-[0.4rem] text-[0.35rem]">Portfolio</div>
      </div>
      <motion.div 
      initial={{opacity: 0, bottom: '1rem'}}
      whileInView={{opacity: 1, bottom: '5rem'}}
      transition={{duration: 1, delay: 4}}
      className="absolute left-1/2">
        <div className="chevron absolute before:bg-secondary after:bg-secondary"></div>
        <div className="chevron absolute before:bg-secondary after:bg-secondary"></div>
        <div className="chevron absolute before:bg-secondary after:bg-secondary"></div>
      </motion.div>
    </section>
  )
}

export default Hero