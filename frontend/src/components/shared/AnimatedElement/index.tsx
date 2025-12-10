// Animated Element Component - Wrapper for animations
import { memo, type ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { useResponsiveAnimation } from '../../../hooks';

export interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'fadeInUp' | 'scaleIn' | 'slideInUp' | 'staggerItem';
  delay?: number;
  duration?: number;
  once?: boolean;
  as?: 'div' | 'section' | 'article' | 'span';
  className?: string;
}

export const AnimatedElement = memo(({
  children,
  animation = 'fadeInUp',
  delay = 0,
  duration,
  once = true,
  as = 'div',
  className,
}: AnimatedElementProps) => {
  const animations = useResponsiveAnimation();
  
  const selectedAnimation = animations[animation] || animations.fadeInUp;
  
  // Add delay to the animation
  const animationWithDelay: Variants = {
    ...selectedAnimation,
    visible: {
      ...(selectedAnimation.visible as Record<string, unknown>),
      transition: {
        ...(selectedAnimation.visible as { transition?: Record<string, unknown> })?.transition,
        delay,
        ...(duration && { duration }),
      },
    },
  };

  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      variants={animationWithDelay}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  );
});

AnimatedElement.displayName = 'AnimatedElement';

// Stagger Container for child animations
export interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  className?: string;
}

export const StaggerContainer = memo(({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.2,
  className,
}: StaggerContainerProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
});

StaggerContainer.displayName = 'StaggerContainer';
