import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const variants = {
  primary: 'bg-emerald-600 text-white hover:bg-emerald-500',
  secondary: 'bg-white text-emerald-800 hover:bg-emerald-100',
  outline: 'border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white'
};

const sizes = {
  sm: 'px-4 py-2',
  md: 'px-6 py-2.5',
  lg: 'px-8 py-3'
};

export default function Button({ 
  variant = 'primary',
  size = 'md',
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg transition-colors ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}