import React from 'react';

export const LoadingSpinner: React.FC<{
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <div className="animate-spin rounded-full border-2 border-gray-300 border-t-blue-600 dark:border-gray-600 dark:border-t-blue-400 h-full w-full" />
    </div>
  );
};

export const LoadingDots: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}> = ({ 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };

  return (
    <div className={`flex space-x-1 ${className}`}>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} bg-gray-400 dark:bg-gray-600 rounded-full animate-pulse`}
          style={{
            animationDelay: `${index * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
};
