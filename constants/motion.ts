export const cursorSpringConfig = { damping: 25, stiffness: 700, mass: 0.5 };

export const draggableSpringConfig = {
  dragConstraints: { top: 0, right: 0, bottom: 0, left: 0 },
  dragTransition: { bounceStiffness: 800, bounceDamping: 30 },
  dragElastic: 0.05,
  transition: { duration: 0.8, type: 'spring' as const, stiffness: 100 },
};

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

export const swipeUpReveal = {
  initial: { y: 60, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.6, ease: smoothEase },
};

export const staggerContainer = {
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true, margin: '-50px' },
  variants: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  },
};

export const swipeUpRevealChild = {
  variants: {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: smoothEase },
    },
  },
};
