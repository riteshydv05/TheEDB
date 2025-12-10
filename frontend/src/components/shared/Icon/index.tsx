// Icon Component - Wrapper for consistent icon styling
import { memo } from 'react';
import { cn } from '../../../lib/utils';
import type { IconType } from 'react-icons';

export interface IconProps {
  icon: IconType;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary' | 'ghost';
  className?: string;
}

const iconSizes = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
  xl: 'w-14 h-14 text-xl',
};

const iconVariants = {
  default: 'bg-gray-100 text-gray-600',
  primary: 'bg-gradient-to-br from-orange-100 to-amber-50 text-accent-orange',
  secondary: 'bg-blue-100 text-accent-blue',
  ghost: 'bg-transparent text-gray-600',
};

export const Icon = memo(({
  icon: IconComponent,
  size = 'md',
  variant = 'default',
  className,
}: IconProps) => {
  return (
    <div
      className={cn(
        'rounded-xl flex items-center justify-center transition-all duration-300',
        iconSizes[size],
        iconVariants[variant],
        className
      )}
    >
      <IconComponent className="w-1/2 h-1/2" />
    </div>
  );
});

Icon.displayName = 'Icon';
