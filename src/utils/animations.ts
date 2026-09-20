import { Variants } from 'motion/react';

// Motion variants for subtle, staggered section header animations
export const headerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

export const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const headerViewportConfig = {
  once: true,
  amount: 0.25 as const,
  margin: '0px 0px -50px 0px',
};
