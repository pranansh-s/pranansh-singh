import React, { useState } from 'react';

import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import Header from '@/components/Header';

import { swipeUpReveal } from '@/constants/motion';

import LazyLottie from './LazyLottie';

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
    <ContactContainer id="contact" aria-label="Contact Me">
      <Header title="contact" />
      <ContactContent>
        <LazyLottie loader={loadGameLottie} />
        <StyledForm {...swipeUpReveal} onSubmit={handleMailSend}>
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
  relative
  mx-auto
  max-w-[1600px]
  flex-col
  gap-12
  space-y-8
  overflow-clip
  p-sm
  sm:gap-16
  md:p-md
  xl:mb-24
  xl:gap-24
  xl:p-xl
`;

const StyledForm = tw(motion.form)`
  flex
  w-full
  flex-col
  gap-3
  rounded-lg
  border
  border-primary/10
  bg-primary/10
  p-5
  font-outerRegular
  text-black/60
  backdrop-blur-xl
  sm:gap-6
  sm:p-8
  sm:text-lg
  xl:w-2/3
  xl:-translate-x-24
`;

const StyledInput = tw(motion.input)`
  hov
  rounded-xl
  border
  border-primary/10
  bg-primary/10
  p-3
  text-white/70
  drop-shadow-md
  backdrop-blur-xl
  placeholder:text-white/20
  focus:outline-none
  sm:p-5
  md:cursor-none
`;

const StyledTextArea = tw(motion.textarea)`
  hov
  resize-none
  rounded-xl
  border
  border-primary/10
  bg-primary/10
  p-3
  text-white
  backdrop-blur-xl
  placeholder:text-white/20
  focus:outline-none
  sm:p-5
  md:cursor-none
`;

const ContactContent = tw.div`
  flex
  flex-col
  items-center
  xl:flex-row
`;

const SubmitButton = tw.button`
  hov
  mx-auto
  mt-4
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
  transition-all
  duration-300
  hover:bg-secondary
  hover:shadow-[0_0_24px_rgba(255,88,88,0.4)]
  active:scale-[0.98]
  md:cursor-none
  md:hover:cursor-none
`;
