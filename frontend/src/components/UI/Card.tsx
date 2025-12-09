import React, { memo } from 'react';
import type { ReactNode, HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = memo(({ 
  children, 
  className = '', 
  hoverable = true,
  onClick,
  ...props 
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md transition-all duration-300 p-6 ${
        hoverable ? 'hover:shadow-xl hover:-translate-y-1' : ''
      } ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
