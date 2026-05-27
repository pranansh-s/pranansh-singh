import dynamic from 'next/dynamic';

import tw from 'tailwind-styled-components';

import Cursor from '@/components/layout/Cursor';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';

import type { NextPage } from 'next';

const About = dynamic(() => import('@/components/sections/About'), { ssr: false });
const Work = dynamic(() => import('@/components/sections/Work'), { ssr: false });
const Contact = dynamic(() => import('@/components/sections/Contact'), { ssr: false });

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Cursor />
      <Navbar />

      <Hero />
      <About />
      <Work />
      <Contact />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = tw.div`
  relative
  w-full
  overflow-hidden
  md:cursor-none
`;
