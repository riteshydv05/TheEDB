import React from 'react';
import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 ${
        onClick ? 'cursor-pointer hover:scale-105 transform' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
