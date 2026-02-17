import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import { Card, Row1, Row2, Row3, Row4, RowAll } from '@/data/skills';

const About = () => (
  <AboutContainer id="about">
    {/* <Lottie animationData={cat} /> */}
    <header className="relative top-10 text-white">
      <h1 className="whitespace-nowrap font-cedarville text-6xl opacity-20 lg:text-7xl">about</h1>
      <h1 className="absolute top-3 left-4 whitespace-nowrap font-outerBold text-5xl lg:text-6xl">about</h1>
    </header>
    <motion.div
      transition={{ staggerChildren: 10 }}
      className="mt-20 h-max w-full pr-6 text-left font-outerLight text-sm leading-6 md:mt-24 lg:text-[0.9rem] xl:w-[35%]"
    >
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: 'spring', stiffness: 80 }}
      >
        Hello! I&apos;m <span className="text-secondary">&lt;PrananshSingh/&gt;</span>, a developer who enjoys crafting
        software across the entire spectrum—from polished user interfaces to the nitty-gritty of system internals. I
        believe great engineering means understanding how the pieces fit together, whether I&apos;m designing a robust
        API, tuning a database query, or exploring what happens at the metal.
      </motion.p>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: 'spring', stiffness: 80, delay: 0.1 }}
      >
        <br />
        I&apos;m drawn to the challenge of building systems that are both elegant and resilient. That means thinking
        about architecture from the start—structuring code for maintainability, choosing the right data flows, and
        optimizing performance where it counts. And I love digging into low-level concepts: memory models, concurrency,
        and the fundamentals that make software fast and reliable.
      </motion.p>
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, type: 'spring', stiffness: 80, delay: 0.2 }}
      >
        <br />
        Ultimately, I&apos;m driven by curiosity—whether it&apos;s a new framework, a systems programming language, or a
        clever architectural pattern. I&apos;m always looking to learn and apply those insights to build software
        that&apos;s not just functional, but a joy to use and maintain.
      </motion.p>
    </motion.div>
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, type: 'spring', stiffness: 80, delay: 0.1 }}
      className="mt-16 flex space-x-3 lg:space-x-6"
    >
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.linkedin.com/in/pranansh-singh-9288a523b/"
        className="hov rounded-full p-2 transition-all duration-300 ease-out hover:cursor-pointer hover:bg-white md:hover:cursor-none"
      >
        <img src="../social-media/linkedin.svg" alt="" className="w-6 md:w-8" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/pranansh-s/"
        className="hov rounded-full p-2 transition-all duration-300 ease-out hover:cursor-pointer hover:bg-white md:hover:cursor-none"
      >
        <img src="../social-media/github.svg" alt="" className="w-6 md:w-8" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://www.instagram.com/prononshu/"
        className="hov rounded-full p-2 transition-all duration-300 ease-out hover:cursor-pointer hover:bg-white md:hover:cursor-none"
      >
        <img src="../social-media/instagram.svg" alt="" className="w-6 md:w-8" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/pronounshu/"
        className="hov rounded-full p-2 transition-all duration-300 ease-out hover:cursor-pointer hover:bg-white md:hover:cursor-none"
      >
        <img src="../social-media/twitter.svg" alt="" className="w-6 md:w-8" />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://discord.com/users/569124912527310853/"
        className="hov rounded-full p-2 transition-all duration-300 ease-out hover:cursor-pointer hover:bg-white md:hover:cursor-none"
      >
        <img src="../social-media/discord.svg" alt="" className="w-6 md:w-8" />
      </a>
    </motion.div>
    <div className="absolute -right-[43rem] -top-1/3 hidden h-[110vh] w-[200vh] rotate-45 flex-col items-center justify-end bg-[#382773] pb-2 xl:flex">
      <div className={`hover:pause flex h-[18%] w-max animate-scroll4 space-x-3 p-[0.375rem] will-change-transform`}>
        {Array(4)
          .fill(Row4)
          .flat()
          .map((item: Card, index: number) => (
            <motion.div
              key={index}
              initial={{ y: 0, x: 0 }}
              whileHover={{ y: 6, x: -6 }}
              className={`flex h-full w-[18vh] items-center justify-center rounded-xl shadow-lg bg-${item.color}`}
              style={{ backgroundColor: `#${item.color}` }}
            >
              <img src={item.logo} alt="" className="h-[60%] w-[60%] -rotate-90" />
            </motion.div>
          ))}
      </div>
      <div className={`hover:pause flex h-[18%] w-max animate-scroll3 space-x-3 p-[0.375rem] will-change-transform`}>
        {Array(4)
          .fill(Row3)
          .flat()
          .map((item: Card, index: number) => (
            <motion.div
              key={index}
              initial={{ y: 0, x: 0 }}
              whileHover={{ y: 6, x: -6 }}
              className={`flex h-full w-[18vh] items-center justify-center rounded-xl shadow-lg bg-${item.color}`}
              style={{ backgroundColor: `#${item.color}` }}
            >
              <img src={item.logo} alt="" className="h-[60%] w-[60%] -rotate-90" />
            </motion.div>
          ))}
      </div>
      <div className={`hover:pause flex h-[18%] w-max animate-scroll2 space-x-3 p-[0.375rem] will-change-transform`}>
        {Array(4)
          .fill(Row2)
          .flat()
          .map((item: Card, index: number) => (
            <motion.div
              key={index}
              initial={{ y: 0, x: 0 }}
              whileHover={{ y: 6, x: -6 }}
              className={`flex h-full w-[18vh] items-center justify-center rounded-xl shadow-lg bg-${item.color}`}
              style={{ backgroundColor: `#${item.color}` }}
            >
              <img src={item.logo} alt="" className="h-[60%] w-[60%] -rotate-90" />
            </motion.div>
          ))}
      </div>
      <div className={`hover:pause flex h-[18%] w-max animate-scroll1 space-x-3 p-[0.375rem] will-change-transform`}>
        {Array(4)
          .fill(Row1)
          .flat()
          .map((item: Card, index: number) => (
            <motion.div
              key={index}
              initial={{ y: 0, x: 0 }}
              whileHover={{ y: 6, x: -6 }}
              className={`flex h-full w-[18vh] items-center justify-center rounded-xl shadow-lg bg-${item.color}`}
              style={{ backgroundColor: `#${item.color}` }}
            >
              <img src={item.logo} alt="" className="h-[60%] w-[60%] -rotate-90" />
            </motion.div>
          ))}
      </div>
    </div>
    <div className="hover:pause mt-16 flex h-32 w-max animate-scrollResp items-center space-x-3 bg-[#382773] p-3 will-change-transform xl:hidden">
      {RowAll.map((item: Card, index: number) => (
        <motion.div
          key={index}
          initial={{ y: 0, x: 0 }}
          whileHover={{ y: 6, x: -6 }}
          className={`flex h-full w-[8rem] cursor-pointer items-center justify-center rounded-xl shadow-lg bg-${item.color}`}
          style={{ backgroundColor: `#${item.color}` }}
        >
          <img src={item.logo} alt="" className="h-[60%] w-[60%]" />
        </motion.div>
      ))}
      {RowAll.map((item: Card, index: number) => (
        <motion.div
          key={index}
          initial={{ y: 0, x: 0 }}
          whileHover={{ y: 6, x: -6 }}
          className={`flex h-full w-[8rem] cursor-pointer items-center justify-center rounded-xl shadow-lg bg-${item.color}`}
          style={{ backgroundColor: `#${item.color}` }}
        >
          <img src={item.logo} alt="" className="h-[60%] w-[60%]" />
        </motion.div>
      ))}
    </div>
  </AboutContainer>
);

export default About;

const AboutContainer = tw.section`
  relative
  mx-auto
  flex
  h-screen
  max-w-[1600px]
  flex-col
  items-start
  justify-start
  overflow-hidden
  p-sm
  text-white/60
  md:p-md
  xl:snap-center
  xl:p-xl
`;
