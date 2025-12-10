// Animation System - Unified animations for the application
import type { Variants, Transition } from 'framer-motion';

// Transition presets
export const transitions = {
  // Fast transitions for micro-interactions
  fast: { duration: 0.2, ease: 'easeOut' } as Transition,
  
  // Normal transitions for most animations
  normal: { duration: 0.3, ease: 'easeOut' } as Transition,
  
  // Slow transitions for page elements
  slow: { duration: 0.5, ease: 'easeOut' } as Transition,
  
  // Smooth transitions with custom easing
  smooth: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] } as Transition,
  
  // Spring transitions for playful animations
  spring: { type: 'spring', stiffness: 300, damping: 30 } as Transition,
  
  // Bounce effect
  bounce: { type: 'spring', stiffness: 500, damping: 25 } as Transition,
};

// Fade animations
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.normal },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: transitions.smooth },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: transitions.smooth },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: transitions.smooth },
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: transitions.smooth },
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: transitions.spring },
};

// Slide animations
export const slideInUp: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: transitions.smooth },
};

export const slideInDown: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: transitions.smooth },
};

// Container animations (for staggered children)
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Item animations (for staggered children)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: transitions.fast,
};

export const hoverLift = {
  y: -5,
  transition: transitions.fast,
};

export const hoverGlow = {
  boxShadow: '0 10px 40px rgba(255, 107, 53, 0.3)',
  transition: transitions.fast,
};

// Tap animations
export const tapScale = {
  scale: 0.98,
};

// Loading animations
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.7, 1, 0.7],
  transition: {
    duration: 1.5,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const spinAnimation = {
  rotate: 360,
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: 'linear',
  },
};

export const bounceAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 0.6,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Background blob animations
export const blobAnimation = {
  scale: [1, 1.2, 1],
  opacity: [0.1, 0.2, 0.1],
  transition: {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

// Page transition animations
export const pageTransition: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// Mobile specific animations (reduced motion)
export const mobileAnimations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  },
  slideUp: {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  },
};

// Desktop specific animations (full motion)
export const desktopAnimations = {
  fadeIn: fadeInUp,
  slideUp: slideInUp,
  scale: scaleIn,
  stagger: staggerContainer,
  item: staggerItem,
};
