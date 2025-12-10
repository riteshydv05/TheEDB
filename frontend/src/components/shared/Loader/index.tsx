// Loader Components
import { memo } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';

// Main Page Loader
export const PageLoader = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-white">
    <div className="text-center">
      {/* Animated logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="relative w-24 h-24 mx-auto">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 border-4 border-orange-200 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner spinning ring */}
          <motion.div
            className="absolute inset-2 border-4 border-accent-orange border-t-transparent rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
          />
          {/* Center dot */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <div className="w-4 h-4 bg-accent-orange rounded-full" />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Loading text */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <h2 className="text-xl font-semibold text-gray-800">Loading</h2>
        <div className="flex items-center justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 bg-accent-orange rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
        <p className="text-gray-500 text-sm">Please wait...</p>
      </motion.div>
    </div>
  </div>
));
PageLoader.displayName = 'PageLoader';

// Spinner Loader
interface SpinnerLoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white' | 'gray';
  className?: string;
}

export const SpinnerLoader = memo(({ 
  size = 'md', 
  color = 'primary',
  className 
}: SpinnerLoaderProps) => {
  const sizeClasses = {
    sm: 'w-5 h-5 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };
  
  const colorClasses = {
    primary: 'border-accent-orange border-t-transparent',
    white: 'border-white border-t-transparent',
    gray: 'border-gray-300 border-t-gray-600',
  };

  return (
    <motion.div
      className={cn(
        'rounded-full animate-spin',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );
});
SpinnerLoader.displayName = 'SpinnerLoader';

// Skeleton Loader
interface SkeletonLoaderProps {
  variant?: 'text' | 'rectangular' | 'circular' | 'card';
  width?: string | number;
  height?: string | number;
  lines?: number;
  className?: string;
}

export const SkeletonLoader = memo(({ 
  variant = 'text',
  width,
  height,
  lines = 1,
  className 
}: SkeletonLoaderProps) => {
  const baseClasses = 'bg-gray-200 animate-pulse rounded';
  
  const variantStyles = {
    text: 'h-4 rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
    card: 'rounded-2xl',
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={cn('space-y-2', className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(baseClasses, variantStyles.text)}
            style={{ 
              width: i === lines - 1 ? '75%' : '100%',
              height: height || undefined
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(baseClasses, variantStyles[variant], className)}
      style={{ 
        width: width || (variant === 'circular' ? 48 : '100%'),
        height: height || (variant === 'circular' ? 48 : variant === 'card' ? 200 : 16)
      }}
    />
  );
});
SkeletonLoader.displayName = 'SkeletonLoader';

// Generic Loader (alias)
export const Loader = PageLoader;
