// Card Component
import React, { memo } from 'react';
import { cn } from '../../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outlined' | 'ghost';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

const cardVariants = {
  default: 'bg-white border border-gray-100 shadow-sm',
  elevated: 'bg-white shadow-lg shadow-gray-200/50',
  outlined: 'bg-white border-2 border-gray-200',
  ghost: 'bg-transparent',
};

const cardPadding = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card = memo(({
  children,
  variant = 'default',
  padding = 'md',
  hoverable = false,
  className,
  ...props
}: CardProps) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  const hoverClasses = hoverable 
    ? 'hover:shadow-xl hover:shadow-gray-300/50 hover:border-orange-200 hover:-translate-y-1 cursor-pointer' 
    : '';

  return (
    <div
      className={cn(
        baseClasses,
        cardVariants[variant],
        cardPadding[padding],
        hoverClasses,
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

// Card sub-components
export const CardHeader = memo(({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mb-4', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

export const CardTitle = memo(({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn('text-xl font-bold text-gray-900', className)} {...props} />
));
CardTitle.displayName = 'CardTitle';

export const CardDescription = memo(({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-gray-600 mt-2', className)} {...props} />
));
CardDescription.displayName = 'CardDescription';

export const CardContent = memo(({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('', className)} {...props} />
));
CardContent.displayName = 'CardContent';

export const CardFooter = memo(({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-4 pt-4 border-t border-gray-100', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';
