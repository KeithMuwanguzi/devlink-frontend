import React from 'react';
import { LoadingSpinner, LoadingDots } from './SpinnerComponents';

// Custom loading animations
const PulseLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  return (
    <div className={`${sizeClasses[size]} relative`}>
      <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
      <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }} />
      <div className="absolute inset-0 bg-blue-700 rounded-full" />
    </div>
  );
};

const BarsLoader: React.FC<{ size?: 'sm' | 'md' | 'lg' | 'xl' }> = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: { width: 'w-1', height: 'h-4' },
    md: { width: 'w-1.5', height: 'h-6' },
    lg: { width: 'w-2', height: 'h-8' },
    xl: { width: 'w-2.5', height: 'h-10' }
  };

  const { width, height } = sizeClasses[size];

  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className={`${width} ${height} bg-blue-500 rounded-full animate-pulse`}
          style={{
            animationDelay: `${index * 0.1}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
};

// Full-screen loading overlay
export const FullScreenLoader: React.FC<{
  isLoading: boolean;
  loadingText?: string;
  loadingSubtext?: string;
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  customLoader?: React.ReactNode;
  blur?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  opacity?: 'light' | 'medium' | 'dark';
  className?: string;
}> = ({ 
  isLoading, 
  loadingText = "Loading...", 
  loadingSubtext, 
  variant = 'spinner', 
  size = 'lg',
  customLoader,
  blur = 'md',
  opacity = 'medium',
  className = ''
}) => {
  if (!isLoading) return null;

  const blurClasses = {
    none: '',
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  };

  const opacityClasses = {
    light: 'bg-white/70 dark:bg-gray-900/70',
    medium: 'bg-white/85 dark:bg-gray-900/85',
    dark: 'bg-white/95 dark:bg-gray-900/95'
  };

  const renderLoader = () => {
    if (customLoader) return customLoader;

    switch (variant) {
      case 'spinner':
        return <LoadingSpinner size={size} />;
      case 'dots':
        return <LoadingDots size={size === 'xl' ? 'lg' : size} />;
      case 'pulse':
        return <PulseLoader size={size} />;
      case 'bars':
        return <BarsLoader size={size} />;
      default:
        return <LoadingSpinner size={size} />;
    }
  };

  return (
    <div className={`fixed inset-0 ${blurClasses[blur]} ${opacityClasses[opacity]} flex items-center justify-center z-50 transition-all duration-300 ease-in-out ${className}`}>
      <div className="text-center space-y-6 animate-fade-in max-w-md mx-auto px-6">
        {/* Loading indicator */}
        <div className="flex justify-center">
          {renderLoader()}
        </div>
        
        {/* Loading text */}
        {loadingText && (
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {loadingText}
            </h3>
            {loadingSubtext && (
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {loadingSubtext}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Professional button loader
export const ButtonLoader: React.FC<{
  isLoading: boolean;
  children: React.ReactNode;
  loadingText?: string;
  variant?: 'spinner' | 'dots' | 'pulse';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}> = ({ 
  isLoading, 
  children, 
  loadingText,
  variant = 'spinner',
  size = 'sm',
  className = '', 
  disabled, 
  onClick,
  type = 'button'
}) => {
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const renderButtonLoader = () => {
    switch (variant) {
      case 'spinner':
        return <LoadingSpinner size={size === 'lg' ? 'md' : 'sm'} />;
      case 'dots':
        return <LoadingDots size={size === 'lg' ? 'md' : 'sm'} />;
      case 'pulse':
        return (
          <div className="w-4 h-4 relative">
            <div className="absolute inset-0 bg-current rounded-full animate-ping opacity-75" />
            <div className="absolute inset-0 bg-current rounded-full" />
          </div>
        );
      default:
        return <LoadingSpinner size={size === 'lg' ? 'md' : 'sm'} />;
    }
  };

  return (
    <button
      type={type}
      className={`
        relative overflow-hidden
        ${sizeClasses[size]}
        ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}
        transition-all duration-200 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      disabled={isLoading || disabled}
      onClick={onClick}
    >
      {/* Button content */}
      <span className={`
        flex items-center justify-center gap-2
        transition-opacity duration-200
        ${isLoading ? 'opacity-0' : 'opacity-100'}
      `}>
        {children}
      </span>
      
      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-2">
            {renderButtonLoader()}
            {loadingText && (
              <span className="text-current">
                {loadingText}
              </span>
            )}
          </div>
        </div>
      )}
    </button>
  );
};

export default FullScreenLoader; 