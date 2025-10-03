
import React from 'react';

interface ProgressBarProps {
  value: number; // 0 to 100
  className?: string;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, className = '', color = 'bg-primary' }) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={`w-full bg-gray-200 rounded-full h-2.5 ${className}`}>
      <div
        className={`${color} h-2.5 rounded-full transition-all duration-500`}
        style={{ width: `${clampedValue}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
