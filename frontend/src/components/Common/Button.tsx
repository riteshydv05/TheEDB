import React from 'react';
import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 transform hover:scale-105';

  const variantStyles = {
    primary: 'bg-accent-orange hover:bg-orange-600 text-white shadow-lg',
    secondary: 'bg-accent-yellow hover:bg-yellow-500 text-primary-dark shadow-lg',
    outline: 'border-2 border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white',
  };

  const sizeStyles = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed hover:scale-100' : '';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
