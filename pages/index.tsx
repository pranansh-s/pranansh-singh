import dynamic from 'next/dynamic';

import tw from 'tailwind-styled-components';

import Cursor from '@/components/Cursor';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

import type { NextPage } from 'next';

const About = dynamic(() => import('@/components/About'), { ssr: false });
const Work = dynamic(() => import('@/components/Work'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false });

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
  will-change-scroll
  md:cursor-none
`;
