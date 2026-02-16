import tw from 'tailwind-styled-components';

import About from '@/components/About';
import Contact from '@/components/Contact';
import Cursor from '@/components/Cursor';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Work from '@/components/Work';

import type { NextPage } from 'next';

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
  z-0
  overflow-x-hidden
  overflow-y-visible
  md:cursor-none
`;
