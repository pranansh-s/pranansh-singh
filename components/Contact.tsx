import { FC } from 'react';

import tw from 'tailwind-styled-components';

import Header from './Header';

const Contact: FC = () => {
  return (
    <ContactContainer id="contact">
      <Header title="contact" />
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = tw.section`
  relative
  mx-auto
  flex
  max-h-[768px]
  max-w-[1600px]
  flex-col
  gap-16
  overflow-clip
  p-sm
  md:p-md
  xl:gap-24
  xl:p-xl
`;
