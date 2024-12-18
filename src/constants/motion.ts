export const motionSection = {
  variants: {
    hidden: {
      y: 0,
      opacity: 0,
    },
    visible: {
      y: 20,
      opacity: 1,
    },
  },

  transition: {
    duration: 1.1,
    ease: 'easeInOut',
  },

  viewport: {
    // amount: 0.2,
    once: true,
  },

  initial: { opacity: 0 },
  whileInView: 'visible',
}

export const motionAnimatedContainer = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },

  transition: {
    duration: 0.2,
  },

  animate: {
    opacity: 1,
    scale: 1,
  },

  exit: {
    opacity: 0,
    scale: 0.8,
  },
}
