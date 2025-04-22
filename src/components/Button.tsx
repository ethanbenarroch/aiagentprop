import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  to?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  to,
}) => {
  const baseClasses = 'rounded-full font-medium transition-all duration-200 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg',
    secondary: 'bg-violet-500 text-white hover:bg-violet-600 shadow-md hover:shadow-lg',
    outlined: 'bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-50/5',
  };
  
  const sizeClasses = {
    sm: 'text-sm px-4 py-1.5',
    md: 'px-6 py-2.5',
    lg: 'text-lg px-8 py-3',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  
  return (
    <button
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;