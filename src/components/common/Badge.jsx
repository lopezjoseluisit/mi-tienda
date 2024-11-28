import React from 'react';

const Badge = ({ count, variant = 'primary', size = 'sm' }) => {
  const variants = {
    primary: 'bg-indigo-600 text-white',
    secondary: 'bg-gray-600 text-white',
    success: 'bg-green-600 text-white',
    danger: 'bg-red-600 text-white'
  };

  const sizes = {
    sm: 'w-4 h-4 text-xs',
    md: 'w-5 h-5 text-sm',
    lg: 'w-6 h-6 text-base'
  };

  return (
    <div className={`
      absolute -top-1 -right-1
      flex items-center justify-center
      rounded-full
      ${variants[variant]}
      ${sizes[size]}
    `}>
      {count}
    </div>
  );
};

export default Badge;
