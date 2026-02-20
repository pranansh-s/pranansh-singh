import React, { useState } from 'react';

import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import tw from 'tailwind-styled-components';

import Header from '@/components/Header';

import { swipeUpReveal } from '@/constants/motion';

import contactLottie from '@/public/lottie/contact.json';
import gameLottie from '@/public/lottie/game.json';

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', name: '', body: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMailSend = (e: React.SubmitEvent) => {
    e.preventDefault();
    const { email, name, body } = formData;
    if (!email.length || !name.length || !body.length) return;
    window.location.href = `mailto:${email}?subject=project:${name}&body=${body}`;
  };

  return (
    <ContactContainer id="contact" aria-label="Contact Me">
      <Header title="contact" />
      <ContactContent>
        <Lottie animationData={gameLottie} />
        <StyledForm onSubmit={handleMailSend}>
          <StyledInput
            name="name"
            id="name"
            value={formData.name}
            type="text"
            aria-label="name"
            placeholder="your name"
            onChange={handleInputChange}
            required
            whileTap={{ scale: 1.05 }}
            {...swipeUpReveal}
          />
          <StyledInput
            name="email"
            value={formData.email}
            type="email"
            id="email"
            aria-label="email"
            placeholder="your email"
            onChange={handleInputChange}
            required
            whileTap={{ scale: 1.05 }}
            {...swipeUpReveal}
          />
          <StyledTextArea
            name="body"
            value={formData.body}
            id="body"
            aria-label="body"
            placeholder="let's talk about . . ."
            onChange={handleInputChange}
            rows={5}
            required
            whileTap={{ scale: 1.05 }}
            {...swipeUpReveal}
          />
          <motion.button aria-label='Submit' {...swipeUpReveal} className="drop-shadow-md md:hover:cursor-none" type="submit">
            <StyledLottie animationData={contactLottie} />
          </motion.button>
        </StyledForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = tw.section`
  relative
  mx-auto
  max-w-[1600px]
  flex-col
  gap-16
  space-y-8
  overflow-clip
  p-sm
  md:p-md
  xl:mb-24
  xl:gap-24
  xl:p-xl
`;

const StyledForm = tw.form`
  flex
  flex-col
  gap-6
  rounded-lg
  bg-[#67506F]
  p-8
  font-outerRegular
  text-lg
  text-black/60
  lg:-translate-x-24
  xl:w-2/3
`;

const StyledInput = tw(motion.input)`
  hov
  rounded-xl
  bg-primary
  p-5
  drop-shadow-md
  focus:text-black
  focus:outline-none
  md:cursor-none
`;

const StyledTextArea = tw(motion.textarea)`
  hov
  resize-none
  rounded-xl
  bg-primary
  p-5
  drop-shadow-md
  focus:text-black
  focus:outline-none
  md:cursor-none
`;

const ContactContent = tw.div`
  flex
  flex-col
  items-center
  xl:flex-row
`;

const StyledLottie = tw(Lottie)`
  hov
  cursor-pointer
  px-24
  transition-all
  duration-300
  md:cursor-none
  lg:mt-12
  lg:hover:px-0
`;
