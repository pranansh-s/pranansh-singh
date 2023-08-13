import type { NextPage } from 'next'
import About from '../components/About'
import Contact from '../components/Contact'
import Cursor from '../components/Cursor'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Work from '../components/Work'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <div className='relative overflow-x-hidden overflow-y-visible h-screen z-0 md:cursor-none'>
      <NextSeo
        title="Pranansh Singh"
        description="Pranansh Singh - Portfolio website"
        canonical="https://pranansh-singh.vercel.app"
        openGraph={{
          url: "https://pranansh-singh.vercel.app",
          title:"Pranansh Singh",
          description: "Pranansh Singh - Portfolio website",
          site_name: "Pranansh Singh",
          type: "website"
        }}
      />
      <Cursor />
      <Navbar />
    
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  )
}

export default Home;
