// Badge Component
import React, { memo } from 'react';
import { cn } from '../../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const badgeVariants = {
  default: 'bg-gray-100 text-gray-800',
  primary: 'bg-accent-orange/10 text-accent-orange',
  secondary: 'bg-accent-blue/10 text-accent-blue',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-amber-100 text-amber-800',
  error: 'bg-red-100 text-red-800',
  outline: 'bg-transparent border border-current text-gray-600',
};

const badgeSizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
  lg: 'px-4 py-1.5 text-sm',
};

export const Badge = memo(({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-semibold rounded-full uppercase tracking-wider',
        badgeVariants[variant],
        badgeSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';
