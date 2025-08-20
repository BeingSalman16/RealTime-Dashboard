import React from 'react';

interface GaugeChartProps {
  value: number;
  max: number;
  min: number;
  label: string;
  unit: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
}

export const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  max,
  min,
  label,
  unit,
  color,
  size = 'md'
}) => {
  const percentage = ((value - min) / (max - min)) * 100;
  const angle = (percentage / 100) * 180 - 90;
  
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40'
  };
  
  const radius = size === 'sm' ? 40 : size === 'md' ? 50 : 60;
  const strokeWidth = size === 'sm' ? 6 : size === 'md' ? 8 : 10;
  const center = radius + strokeWidth;
  const circumference = Math.PI * radius;

  return (
    <div className="flex flex-col items-center space-y-2">
      <div className={`relative ${sizeClasses[size]}`}>
        <svg
          className="transform -rotate-90"
          width={center * 2}
          height={center * 2}
          viewBox={`0 0 ${center * 2} ${center * 2}`}
        >
          {/* Background arc */}
          <path
            d={`M ${strokeWidth} ${center} A ${radius} ${radius} 0 0 1 ${center * 2 - strokeWidth} ${center}`}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-gray-200 dark:text-gray-700"
          />
          
          {/* Progress arc */}
          <path
            d={`M ${strokeWidth} ${center} A ${radius} ${radius} 0 0 1 ${center * 2 - strokeWidth} ${center}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${(percentage / 100) * circumference} ${circumference}`}
            className="transition-all duration-1000"
            strokeLinecap="round"
          />
        </svg>
        
        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div className={`font-bold text-gray-900 dark:text-white ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-lg' : 'text-xl'}`}>
            {value.toFixed(1)}
          </div>
          <div className={`text-gray-600 dark:text-gray-400 ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            {unit}
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <div className={`font-medium text-gray-900 dark:text-white ${size === 'sm' ? 'text-sm' : 'text-base'}`}>
          {label}
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          {min} - {max} {unit}
        </div>
      </div>
    </div>
  );
};