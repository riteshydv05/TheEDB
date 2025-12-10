// Responsive Animation Hook - Returns animations optimized for device
import { useMemo } from 'react';
import type { Variants } from 'framer-motion';
import { useDevice } from './useDevice';
import { 
  fadeInUp, 
  fadeIn, 
  staggerContainer, 
  staggerItem,
  scaleIn,
  slideInUp,
  mobileAnimations,
} from '../theme/animations';

interface ResponsiveAnimations {
  fadeIn: Variants;
  fadeInUp: Variants;
  staggerContainer: Variants;
  staggerItem: Variants;
  scaleIn: Variants;
  slideInUp: Variants;
  shouldAnimate: boolean;
  reduceMotion: boolean;
}

export const useResponsiveAnimation = (): ResponsiveAnimations => {
  const { isMobile } = useDevice();
  
  // Check for reduced motion preference
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  const animations = useMemo(() => {
    const shouldAnimate = !prefersReducedMotion;
    const reduceMotion = prefersReducedMotion || isMobile;

    if (reduceMotion) {
      // Simplified animations for mobile or reduced motion
      return {
        fadeIn: mobileAnimations.fadeIn,
        fadeInUp: mobileAnimations.slideUp,
        staggerContainer: {
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1, 
            transition: { staggerChildren: 0.05, delayChildren: 0.1 } 
          },
        },
        staggerItem: mobileAnimations.slideUp,
        scaleIn: mobileAnimations.fadeIn,
        slideInUp: mobileAnimations.slideUp,
        shouldAnimate,
        reduceMotion: true,
      };
    }

    // Full animations for desktop
    return {
      fadeIn,
      fadeInUp,
      staggerContainer,
      staggerItem,
      scaleIn,
      slideInUp,
      shouldAnimate,
      reduceMotion: false,
    };
  }, [isMobile, prefersReducedMotion]);

  return animations;
};
