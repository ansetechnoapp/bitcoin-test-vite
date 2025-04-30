import React from 'react';
import { PortfolioAsset } from '../types';
import { formatCurrency, formatPercentage } from '../utils/formatters';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface PortfolioSummaryProps {
  assets: PortfolioAsset[];
}

const PortfolioSummary: React.FC<PortfolioSummaryProps> = ({ assets }) => {
  // Calculate total portfolio value
  const totalValue = assets.reduce((sum, asset) => sum + asset.value, 0);
  
  // Calculate 24h change percentage
  const weightedChange = assets.reduce((sum, asset) => {
    const weight = asset.value / totalValue;
    return sum + (asset.priceChange24h * weight);
  }, 0);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {/* Portfolio Value Card */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-700 rounded-xl p-4 shadow-lg relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-40 h-40 transform translate-x-8 -translate-y-8 opacity-10">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-24 h-24 transform -translate-x-8 translate-y-8 opacity-10">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        
        <div className="relative">
          <h3 className="text-sm font-medium text-primary-200 mb-1">Total Portfolio Value</h3>
          <p className="text-3xl font-bold text-white mb-3">{formatCurrency(totalValue)}</p>
          
          <div className={`inline-flex items-center px-2 py-1 rounded-md ${
            weightedChange >= 0 
              ? 'text-success-400 bg-success-500/20' 
              : 'text-error-400 bg-error-500/20'
          }`}>
            {weightedChange >= 0 
              ? <ArrowUpRight size={14} className="mr-1" /> 
              : <ArrowDownRight size={14} className="mr-1" />
            }
            {formatPercentage(weightedChange)} (24h)
          </div>
        </div>
      </div>
      
      {/* Portfolio Allocation Card */}
      <div className="bg-surface-dark rounded-xl p-4">
        <h3 className="text-sm font-medium text-gray-400 mb-2">Portfolio Allocation</h3>
        
        <div className="flex items-center mb-4">
          <div className="w-full bg-surface-light rounded-full h-4 overflow-hidden">
            {assets.map((asset, index) => (
              <div
                key={asset.id}
                className={`h-full ${getColorClassForIndex(index)}`}
                style={{ 
                  width: `${asset.allocation}%`,
                  marginLeft: index > 0 ? '1px' : '0'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          {assets.map((asset, index) => (
            <div key={asset.id} className="flex items-center">
              <div className={`w-3 h-3 rounded-full ${getColorClassForIndex(index)}`}></div>
              <div className="ml-2">
                <p className="text-xs font-medium text-white">{asset.symbol}</p>
                <p className="text-xs text-gray-400">{asset.allocation}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Helper function to get different colors for allocation chart
const getColorClassForIndex = (index: number): string => {
  const colors = [
    'bg-primary-500',
    'bg-secondary-500',
    'bg-accent-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-indigo-500',
    'bg-blue-500',
    'bg-teal-500'
  ];
  
  return colors[index % colors.length];
};

export default PortfolioSummary;