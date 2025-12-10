// Container Component
import React, { memo } from 'react';
import { cn } from '../../../lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide' | 'full';
}

const containerSizes = {
  default: 'container mx-auto px-4 sm:px-6 lg:px-8',
  narrow: 'max-w-4xl mx-auto px-4 sm:px-6',
  wide: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  full: 'w-full px-4 sm:px-6 lg:px-8',
};

export const Container = memo(({
  children,
  size = 'default',
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn(containerSizes[size], className)}
      {...props}
    >
      {children}
    </div>
  );
});

Container.displayName = 'Container';
