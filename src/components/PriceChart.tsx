import React from 'react';
import { ChartData } from '../types';

interface PriceChartProps {
  data: ChartData[];
  title: string;
  symbol: string;
  priceChange: number;
  color?: string;
}

const PriceChart: React.FC<PriceChartProps> = ({ 
  data, 
  title, 
  symbol, 
  priceChange,
  color = 'primary' 
}) => {
  // Find min and max values for scaling
  const prices = data.map(item => item.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const range = maxPrice - minPrice;
  
  // Calculate points for the SVG path
  const chartWidth = 100; // Using percentage for responsive scaling
  const chartHeight = 50;
  
  const points = data.map((item, index) => {
    const x = (index / (data.length - 1)) * chartWidth;
    const normalizedPrice = (item.price - minPrice) / range;
    const y = chartHeight - (normalizedPrice * chartHeight);
    return `${x},${y}`;
  }).join(' ');
  
  // Gradient color based on price change
  const gradientColor = priceChange >= 0 
    ? (color === 'primary' ? 'from-primary-500/20 to-transparent' : 'from-secondary-500/20 to-transparent')
    : 'from-error-500/20 to-transparent';
  
  // Line color based on price change
  const lineColor = priceChange >= 0 
    ? (color === 'primary' ? 'stroke-primary-500' : 'stroke-secondary-500')
    : 'stroke-error-500';

  return (
    <div className="bg-surface-dark rounded-xl p-4 h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-medium text-white">{title}</h3>
          <p className="text-sm text-gray-400">{symbol}</p>
        </div>
        <div className={`px-2 py-1 rounded-md text-sm font-medium ${
          priceChange >= 0 ? 'bg-success-500/10 text-success-400' : 'bg-error-500/10 text-error-400'
        }`}>
          {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
        </div>
      </div>
      
      <div className="h-48 relative">
        <svg className="w-full h-full overflow-visible" viewBox={`0 0 ${chartWidth} ${chartHeight}`} preserveAspectRatio="none">
          {/* Area gradient */}
          <defs>
            <linearGradient id={`chart-gradient-${symbol}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Create area below the line */}
          <path
            d={`M0,${chartHeight} ${points} ${chartWidth},${chartHeight} Z`}
            className={`fill-current ${gradientColor}`}
          />
          
          {/* Line */}
          <polyline
            points={points}
            fill="none"
            className={`${lineColor} stroke-2 animate-slide-up`}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Dots for each data point */}
          {data.map((item, index) => {
            const x = (index / (data.length - 1)) * chartWidth;
            const normalizedPrice = (item.price - minPrice) / range;
            const y = chartHeight - (normalizedPrice * chartHeight);
            
            // Only show a few dots for a cleaner look
            if (index % 6 === 0 || index === data.length - 1) {
              return (
                <circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="1"
                  className={`${lineColor} animate-bounce-in`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                />
              );
            }
            return null;
          })}
        </svg>
        
        {/* Latest price overlay */}
        <div className="absolute bottom-0 right-0 mb-4 mr-4">
          <p className="text-2xl font-semibold text-white">${data[data.length - 1].price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
        </div>
      </div>
      
      <div className="flex justify-between mt-4">
        <button className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200">Buy</button>
        <button className="px-4 py-2 bg-surface-light hover:bg-surface-light/80 text-white rounded-lg transition-colors duration-200">Sell</button>
      </div>
    </div>
  );
};

export default PriceChart;