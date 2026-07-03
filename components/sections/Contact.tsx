import React, { useState } from 'react';

import { motion } from 'framer-motion';
import tw from 'tailwind-styled-components';

import Header from '@/components/ui/Header';
import LazyLottie from '@/components/ui/LazyLottie';

import { staggerContainer, swipeUpRevealChild } from '@/constants/motion';

const loadGameLottie = () => import('@/public/lottie/game.json').then(m => m.default);

const inputFields = [
  { name: 'name', label: '[01 // name]', type: 'text', placeholder: 'what do i call you?' },
  { name: 'email', label: '[02 // email]', type: 'email', placeholder: 'where do i reply?' },
] as const;

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', name: '', body: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMailSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, name, body } = formData;
    if (!email.length || !name.length || !body.length) return;
    const subject = encodeURIComponent(`project: ${name}`);
    const mailBody = encodeURIComponent(`${body}\n\n— ${name} (${email})`);
    window.location.href = `mailto:prananshsingh@gmail.com?subject=${subject}&body=${mailBody}`;
  };

  return (
    <ContactContainer id="connect" aria-label="Connect With Me">
      <Header title="let's_connect" />
      <ContactContent>
        <StyledForm {...staggerContainer} onSubmit={handleMailSend}>
          {inputFields.map(field => (
            <Field key={field.name} {...swipeUpRevealChild}>
              <FieldLabel htmlFor={field.name}>{field.label}</FieldLabel>
              <StyledInput
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                placeholder={field.placeholder}
                onChange={handleInputChange}
                required
              />
            </Field>
          ))}
          <Field {...swipeUpRevealChild}>
            <FieldLabel htmlFor="body">[03 // message]</FieldLabel>
            <StyledTextArea
              id="body"
              name="body"
              value={formData.body}
              placeholder="let's talk about . . ."
              onChange={handleInputChange}
              rows={4}
              required
            />
          </Field>
          <SubmitButton aria-label="Send message" type="submit" whileTap={{ scale: 0.97 }} {...swipeUpRevealChild}>
            let&apos;s go <SubmitArrow aria-hidden>&rarr;</SubmitArrow>
          </SubmitButton>
        </StyledForm>
        <LottieWrapper>
          <LazyLottie loader={loadGameLottie} />
        </LottieWrapper>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = tw.section`
  relative
  mx-auto
  max-w-[1600px]
  space-y-12
  overflow-clip
  p-sm-md
  sm:space-y-16
  md:p-md
  xl:space-y-24
  xl:p-xl
`;

const ContactContent = tw.div`
  flex
  flex-col-reverse
  items-center
  gap-10
  xl:flex-row
  xl:items-center
  xl:gap-16
`;

const StyledForm = tw(motion.form)`
  flex
  w-full
  flex-col
  gap-10
  font-outerRegular
  sm:gap-12
  xl:w-3/5
`;

const Field = tw(motion.div)`
  group
  flex
  flex-col
  gap-3
`;

const FieldLabel = tw.label`
  w-max
  text-xs
  uppercase
  tracking-widest
  text-primary/60
  transition-colors
  duration-300
  group-focus-within:text-secondary/80
`;

const StyledInput = tw.input`
  hov
  w-full
  border-b-2
  border-primary/10
  bg-transparent
  py-3
  text-xl
  text-primary/90
  transition-[border-color]
  duration-300
  placeholder:text-primary/40
  focus:border-secondary/60
  focus:outline-none
  sm:py-4
  sm:text-3xl
  md:cursor-none
`;

const StyledTextArea = tw.textarea`
  hov
  w-full
  resize-none
  border-b-2
  border-primary/10
  bg-transparent
  py-3
  text-xl
  text-primary/90
  transition-[border-color]
  duration-300
  placeholder:text-primary/40
  focus:border-secondary/60
  focus:outline-none
  sm:py-4
  sm:text-3xl
  md:cursor-none
`;

const SubmitButton = tw(motion.button)`
  hov
  group
  mt-2
  flex
  w-max
  items-center
  gap-4
  font-bagelRegular
  text-3xl
  uppercase
  tracking-wide
  text-secondary
  transition-colors
  duration-300
  hover:text-secondary-glow
  sm:text-4xl
  md:hover:cursor-none
`;

const SubmitArrow = tw.span`
  inline-block
  transition-transform
  duration-300
  group-hover:translate-x-3
`;

const LottieWrapper = tw.div`
  pointer-events-none
  w-full
  max-w-md
  self-center
  xl:w-2/5
  xl:max-w-2xl
`;
