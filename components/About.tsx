import { motion } from "framer-motion";
import { FC } from "react";
import { Card, Row1, Row2, Row3, Row4, RowAll } from "../data/skills";

const About: FC = () => {
  return (
    <section id="about" className="relative w-screen h-max min-h-screen overflow-hidden text-white xl:snap-center text-center bg-primary flex flex-col items-start pl-3 pt-10 justify-start md:pl-16 xl:pl-24 md:pt-12">
      <header className="relative top-10">
        <h1 className="font-cedarville text-6xl lg:text-7xl opacity-20 whitespace-nowrap">about</h1>
        <h1 className="font-outerBold text-5xl lg:text-6xl absolute top-3 left-4 whitespace-nowrap">about</h1>
      </header>
      <motion.div
          transition={{ staggerChildren: 10 }}
          className="xl:w-[35%] w-full h-max leading-6 font-outerLight lg:text-[0.9rem] text-sm text-left md:mt-24 mt-20 pr-6">
          <motion.p initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, type: 'spring', stiffness: 80 }}>Hello! I&apos;m <span className="text-secondary">&lt;PrananshSingh/&gt;</span>, a full stack developer with a passion for building beautiful and responsive user interfaces. While I enjoy working on both the frontend and backend of web applications, my true passion lies in crafting intuitive and user-friendly experiences.</motion.p> 
          <motion.p initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, type: 'spring', stiffness: 80, delay: 0.1 }}><br />In addition to my frontend skills, I have a strong interest in machine learning and data analysis. I&apos;m always looking for opportunities to incorporate data-driven insights into my projects, and I&apos;m excited about the potential for machine learning to revolutionize the way we interact with technology.</motion.p> 
          <motion.p initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1, type: 'spring', stiffness: 80, delay: 0.2 }}><br />When I&apos;m not coding, I love to explore my creative side through design and illustration. I believe that good design is an essential component of any successful project, and I strive to create beautiful and functional designs that enhance the user experience.</motion.p> 
      </motion.div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, type: 'spring', stiffness: 80, delay: 0.1 }}
        className="flex lg:space-x-6 space-x-3 mt-16">
          <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/pranansh-singh-9288a523b/" className="click md:hover:cursor-none hover:cursor-pointer hover:bg-white rounded-full p-2 transition-all duration-300 ease-out"><img src="../social-media/linkedin.svg" alt="" className="md:w-8 w-6"/></a>
          <a rel="noreferrer" target="_blank" href="https://github.com/pranansh-s/" className="click md:hover:cursor-none hover:cursor-pointer hover:bg-white rounded-full p-2 transition-all duration-300 ease-out"><img src="../social-media/github.svg" alt="" className="md:w-8 w-6"/></a>
          <a rel="noreferrer" target="_blank" href="https://www.instagram.com/prononshu/" className="click md:hover:cursor-none hover:cursor-pointer hover:bg-white rounded-full p-2 transition-all duration-300 ease-out"><img src="../social-media/instagram.svg" alt="" className="md:w-8 w-6"/></a>
          <a rel="noreferrer" target="_blank" href="https://twitter.com/pronounshu/" className="click md:hover:cursor-none hover:cursor-pointer hover:bg-white rounded-full p-2 transition-all duration-300 ease-out"><img src="../social-media/twitter.svg" alt="" className="md:w-8 w-6"/></a>
          <a rel="noreferrer" target="_blank" href="https://discord.com/users/569124912527310853/" className="click md:hover:cursor-none hover:cursor-pointer hover:bg-white rounded-full p-2 transition-all duration-300 ease-out"><img src="../social-media/discord.svg" alt="" className="md:w-8 w-6"/></a>
      </motion.div>
      <div
        className="bg-[#382773] absolute -right-[43rem] -top-1/3 h-[110vh] xl:flex hidden w-[200vh] rotate-45 items-center pb-2 flex-col justify-end">
          <div className={`h-[18%] w-max space-x-3 flex p-[0.375rem] hover:pause animate-scroll4 will-change-transform`}>
            {Array(4).fill(Row4).flat().map((item: Card, index: number) =>
              <motion.div
                key={index}
                initial={{y: 0, x: 0}}
                whileHover={{y: 6, x: -6}}
                className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[18vh] bg-${item.color}`}
                style={{ backgroundColor: `#${item.color}` }}>
                  <img src={item.logo} alt="" className="w-[60%] h-[60%] -rotate-90" />
              </motion.div>)}
          </div>
          <div className={`h-[18%] w-max space-x-3 flex p-[0.375rem] hover:pause animate-scroll3 will-change-transform`}>
            {Array(4).fill(Row3).flat().map((item: Card, index: number) =>
              <motion.div
                key={index}
                initial={{y: 0, x: 0}}
                whileHover={{y: 6, x: -6}}
                className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[18vh] bg-${item.color}`}
                style={{ backgroundColor: `#${item.color}` }}>
                  <img src={item.logo} alt="" className="w-[60%] h-[60%] -rotate-90" />
              </motion.div>)}
          </div>
          <div className={`h-[18%] w-max space-x-3 flex p-[0.375rem] hover:pause animate-scroll2 will-change-transform`}>
            {Array(4).fill(Row2).flat().map((item: Card, index: number) =>
              <motion.div
                key={index}
                initial={{y: 0, x: 0}}
                whileHover={{y: 6, x: -6}}
                className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[18vh] bg-${item.color}`}
                style={{ backgroundColor: `#${item.color}` }}>
                  <img src={item.logo} alt="" className="w-[60%] h-[60%] -rotate-90" />
              </motion.div>)}
          </div>
          <div className={`h-[18%] w-max space-x-3 flex p-[0.375rem] hover:pause animate-scroll1 will-change-transform`}>
            {Array(4).fill(Row1).flat().map((item: Card, index: number) =>
              <motion.div
                key={index}
                initial={{y: 0, x: 0}}
                whileHover={{y: 6, x: -6}}
                className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[18vh] bg-${item.color}`}
                style={{ backgroundColor: `#${item.color}` }}>
                  <img src={item.logo} alt="" className="w-[60%] h-[60%] -rotate-90" />
              </motion.div>)}
          </div>
      </div>
      <div className="animate-scrollResp hover:pause h-32 mt-16 w-max xl:hidden flex items-center p-3 space-x-3 bg-[#382773] will-change-transform">
        {(RowAll).map((item: Card, index: number) =>
          <motion.div
            key={index}
            initial={{y: 0, x: 0}}
            whileHover={{y: 6, x: -6}}
            className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[8rem] cursor-pointer bg-${item.color}`}
            style={{ backgroundColor: `#${item.color}` }}>
              <img src={item.logo} alt="" className="w-[60%] h-[60%]" />
          </motion.div>)}
          {(RowAll).map((item: Card, index: number) =>
          <motion.div
            key={index}
            initial={{y: 0, x: 0}}
            whileHover={{y: 6, x: -6}}
            className={`flex items-center shadow-lg rounded-xl justify-center h-full w-[8rem] cursor-pointer bg-${item.color}`}
            style={{ backgroundColor: `#${item.color}` }}>
              <img src={item.logo} alt="" className="w-[60%] h-[60%]" />
          </motion.div>)}
      </div>
    </section>
  )
}

export default About;