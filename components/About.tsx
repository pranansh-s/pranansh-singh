import { motion } from "framer-motion";
import { FC } from "react";
import { Card, Row1, Row2, Row3, Row4 } from "../data/skills";
import Carousel from "./Carousel";

const About: FC = () => {
  return (
    <section className="relative w-screen md:h-screen h-max overflow-hidden text-white lg:snap-center text-center bg-primary flex flex-col items-start pl-3 pt-10 justify-start md:pl-24 md:pt-12">
      <header className="relative top-[10%]">
        <h1 className="font-cedarville text-6xl lg:text-7xl opacity-20 whitespace-nowrap">about</h1>
        <h1 className="font-outerBold text-5xl lg:text-6xl absolute top-3 left-4 whitespace-nowrap">about</h1>
      </header>
      <motion.p
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, type: 'spring', stiffness: 80 }}
          className="xl:w-[35%] w-full leading-6 font-outerLight lg:text-base text-sm text-left md:mt-36 mt-24 pr-6">
          Hello! I'm <span className="text-secondary">&lt;PrananshSingh/&gt;</span>, a full stack developer with a passion for building beautiful and responsive user interfaces. While I enjoy working on both the frontend and backend of web applications, my true passion lies in crafting intuitive and user-friendly experiences.
          <br /><br />In addition to my frontend skills, I have a strong interest in machine learning and data analysis. I'm always looking for opportunities to incorporate data-driven insights into my projects, and I'm excited about the potential for machine learning to revolutionize the way we interact with technology.
          <br /><br />When I'm not coding, I love to explore my creative side through design and illustration. I believe that good design is an essential component of any successful project, and I strive to create beautiful and functional designs that enhance the user experience.
      </motion.p>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, type: 'spring', stiffness: 80, delay: 0.2 }}
        className="flex lg:space-x-6 space-x-3 mt-16">
          <a href="https://www.linkedin.com/in/pranansh-singh-9288a523b/" className="click md:hover:cursor-none hover:cursor-pointer hover:bg-white rounded-full p-2 transition-all duration-300 ease-out"><img src="../social-media/linkedin.svg" alt="" className="md:w-8 w-6"/></a>
          <a href="https://github.com/pranansh-s/" className="click md:hover:cursor-none hover:cursor-pointer hover:bg-white rounded-full p-2 transition-all duration-300 ease-out"><img src="../social-media/github.svg" alt="" className="md:w-8 w-6"/></a>
          <a href="https://www.instagram.com/prononshu/" className="click md:hover:cursor-none hover:cursor-pointer hover:bg-white rounded-full p-2 transition-all duration-300 ease-out"><img src="../social-media/instagram.svg" alt="" className="md:w-8 w-6"/></a>
          <a href="https://twitter.com/pronounshu/" className="click md:hover:cursor-none hover:cursor-pointer hover:bg-white rounded-full p-2 transition-all duration-300 ease-out"><img src="../social-media/twitter.svg" alt="" className="md:w-8 w-6"/></a>
          <a href="https://discord.com/users/569124912527310853/" className="click md:hover:cursor-none hover:cursor-pointer hover:bg-white rounded-full p-2 transition-all duration-300 ease-out"><img src="../social-media/discord.svg" alt="" className="md:w-8 w-6"/></a>
      </motion.div>
      <div
        className="bg-[#382773] absolute -right-[43rem] -top-1/3 h-[110vh] xl:flex hidden w-[200vh] rotate-45 items-center pb-2 flex-col justify-end">
          <Carousel data={Row4} animationClass="scroll4"/>
          <Carousel data={Row3} animationClass="scroll3"/>
          <Carousel data={Row2} animationClass="scroll2"/>
          <Carousel data={Row1} animationClass="scroll1"/>
      </div>
      <div className="bg-[#382773] mt-36 md:-ml-24 -ml-3">
        <div className="animate-scrollResp hover:pause h-36 w-max xl:hidden flex items-center p-3 space-x-3">
        {(Row1).map((item: Card, index: number) =>
          <motion.div
            key={index}
            initial={{y: 0, x: 0}}
            whileHover={{y: 6, x: -6}}
            className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[8rem] cursor-pointer bg-${item.color}`}
            style={{ backgroundColor: `#${item.color}` }}>
              <img src={item.logo} alt="" className="w-[60%] h-[60%]" />
          </motion.div>)}
        {(Row2).map((item: Card, index: number) =>
          <motion.div
            key={index}
            initial={{y: 0, x: 0}}
            whileHover={{y: 6, x: -6}}
            className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[8rem] cursor-pointer bg-${item.color}`}
            style={{ backgroundColor: `#${item.color}` }}>
              <img src={item.logo} alt="" className="w-[60%] h-[60%]" />
          </motion.div>)}
        {(Row3).map((item: Card, index: number) =>
          <motion.div
            key={index}
            initial={{y: 0, x: 0}}
            whileHover={{y: 6, x: -6}}
            className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[8rem] cursor-pointer bg-${item.color}`}
            style={{ backgroundColor: `#${item.color}` }}>
              <img src={item.logo} alt="" className="w-[60%] h-[60%]" />
          </motion.div>)}
        {(Row4).map((item: Card, index: number) =>
          <motion.div
            key={index}
            initial={{y: 0, x: 0}}
            whileHover={{y: 6, x: -6}}
            className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[8rem] cursor-pointer bg-${item.color}`}
            style={{ backgroundColor: `#${item.color}` }}>
              <img src={item.logo} alt="" className="w-[60%] h-[60%]" />
          </motion.div>)}
          {(Row1).map((item: Card, index: number) =>
          <motion.div
            key={index}
            initial={{y: 0, x: 0}}
            whileHover={{y: 6, x: -6}}
            className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[8rem] cursor-pointer bg-${item.color}`}
            style={{ backgroundColor: `#${item.color}` }}>
              <img src={item.logo} alt="" className="w-[60%] h-[60%]" />
          </motion.div>)}
        </div>
      </div>
    </section>
  )
}

export default About;