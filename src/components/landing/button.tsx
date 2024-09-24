import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'medium',
  className = '',
  disabled = false,
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors';
  
  const variantStyles = {
    primary: 'bg-[#f5c618] text-[#111328] hover:bg-yellow-600 focus:ring-blue-500',
    secondary: 'bg-[#f52518] text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
  };
  
  const sizeStyles = {
    small: 'px-4 py-2 text-xs font-semibold',
    medium: 'px-4 py-3 text-xs',
    large: 'px-9 py-3 text-sm',
  };
  
  const disabledStyles = 'opacity-50 cursor-not-allowed';
  
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabled ? disabledStyles : ''} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonStyles} onClick={disabled ? (e) => e.preventDefault() : onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;