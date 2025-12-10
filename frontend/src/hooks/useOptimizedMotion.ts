import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export const useOptimizedMotion = () => {
  const shouldReduceMotion = useReducedMotion();

  const getVariants = (defaultVariants: Variants): Variants => {
    if (shouldReduceMotion) {
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
    }
    return defaultVariants;
  };

  const getTransition = (defaultTransition: any) => {
    if (shouldReduceMotion) {
      return { duration: 0.01 };
    }
    return defaultTransition;
  };

  return { getVariants, getTransition, shouldReduceMotion };
};
