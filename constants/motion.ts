export const cursorSpringConfig = { damping: 25, stiffness: 700, mass: 0.5 };

export const draggableSpringConfig = {
  dragConstraints: { top: 0, right: 0, bottom: 0, left: 0 },
  dragTransition: { bounceStiffness: 800, bounceDamping: 30 },
  dragElastic: 0.05,
  transition: { duration: 0.8, type: 'spring' as const, stiffness: 100, delay: 0.5 },
};

export const swipeUpReveal = {
  initial: { y: 100, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true },
  transition: { duration: 1, type: 'spring' as const, stiffness: 80 },
};
