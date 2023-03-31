import type { NextPage } from 'next'
import About from '../components/About'
import Contact from '../components/Contact'
import Cursor from '../components/Cursor'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Work from '../components/Work'

const Home: NextPage = () => {
  return (
    <div className='relative overflow-x-hidden overflow-y-visible h-screen lg:snap-y snap-mandatory z-0 md:cursor-none select-none'>
      <Cursor />
      <Navbar />
    
      <Hero />
      <About />
      <div style={{backgroundImage: "url(./under-construction.png)"}} className='w-full h-72 -mt-20 snap-center bg-repeat-x bg-primary'></div>
      {/* <Work /> */}
      {/* <Contact /> */}
    </div>
  )
}

export default Home;
