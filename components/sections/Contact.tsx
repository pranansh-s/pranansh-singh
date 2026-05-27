import React, { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import Header from '@/components/ui/Header';
import LazyLottie from '@/components/ui/LazyLottie';

import { staggerContainer, swipeUpReveal, swipeUpRevealChild } from '@/constants/motion';

const loadGameLottie = () => import('@/public/lottie/game.json').then(m => m.default);

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
    <ContactContainer id="connect" aria-label="Connect With Me">
      <Header title="let's connect" />
      <ContactContent>
        <LazyLottie loader={loadGameLottie} />
        <StyledForm {...staggerContainer} onSubmit={handleMailSend}>

          <StyledInput
            name="name"
            id="name"
            value={formData.name}
            type="text"
            aria-label="name"
            placeholder="your name"
            onChange={handleInputChange}
            required
            whileTap={{ scale: 1.02 }}
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
            whileTap={{ scale: 1.02 }}
            {...swipeUpRevealChild}
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
            whileTap={{ scale: 1.02 }}
            {...swipeUpRevealChild}
          />
          <SubmitButton aria-label="Submit" type="submit">
            let&apos;s go &rarr;
          </SubmitButton>
        </StyledForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = tw.section`
  sm:gap-18
  relative
  mx-auto
  max-w-[1600px]
  flex-col
  gap-14
  space-y-8
  overflow-clip
  p-sm-md
  md:p-md
  xl:gap-24
  xl:p-xl
`;

const StyledForm = tw(motion.form)`
  flex
  w-full
  max-w-[800px]
  flex-col
  gap-4
  rounded-xl
  border
  border-primary/10
  bg-surface
  p-6
  font-outerRegular
  text-primary-muted
  shadow-[inset_0_1px_0_rgba(245,241,249,0.08)]
  sm:gap-6
  sm:p-8
  sm:text-lg
  xl:w-3/4
`;

const StyledInput = tw(motion.input)`
  hov
  rounded-lg
  border-b-2
  border-primary/10
  bg-surface-light
  p-3
  text-white/80
  drop-shadow-md
  transition-[border-color]
  duration-300
  placeholder:text-white/25
  focus:border-secondary/40
  focus:outline-none
  sm:p-5
  md:cursor-none
`;

const StyledTextArea = tw(motion.textarea)`
  hov
  resize-none
  rounded-lg
  border-b-2
  border-primary/10
  bg-surface-light
  p-3
  text-white/80
  transition-[border-color]
  duration-300
  placeholder:text-white/25
  focus:border-secondary/40
  focus:outline-none
  sm:p-5
  md:cursor-none
`;

const ContactContent = tw.div`
  flex
  flex-col
  items-center
  xl:flex-row
  xl:gap-12
`;



const SubmitButton = tw.button`
  hov
  mx-auto
  mt-6
  w-full
  cursor-pointer
  rounded-xl
  bg-secondary/90
  py-4
  font-bagelRegular
  text-lg
  uppercase
  tracking-wider
  text-white
  transition-[background-color,box-shadow,transform]
  duration-300
  hover:bg-secondary
  hover:shadow-[0_0_24px_rgba(255,88,88,0.4)]
  active:scale-[0.98]
  md:cursor-none
  md:hover:cursor-none
`;
