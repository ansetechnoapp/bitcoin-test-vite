import React from 'react';
import { Cryptocurrency } from '../types';
import { formatCurrency, formatLargeNumber, formatPercentage } from '../utils/formatters';
import { ArrowUpRight, ArrowDownRight, Star } from 'lucide-react';

interface CryptoListProps {
  cryptocurrencies: Cryptocurrency[];
}

const CryptoList: React.FC<CryptoListProps> = ({ cryptocurrencies }) => {
  return (
    <div className="bg-surface-dark rounded-xl overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-1">Market Trends</h2>
        <p className="text-sm text-gray-400">Live prices of top cryptocurrencies</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-surface-light/30">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Asset</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Price</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">24h Change</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Market Cap</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Volume (24h)</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-light/20">
            {cryptocurrencies.map((crypto) => (
              <tr 
                key={crypto.id} 
                className="hover:bg-surface-light/10 transition-colors duration-150 animate-fade-in"
                style={{ animationDelay: `${cryptocurrencies.indexOf(crypto) * 0.05}s` }}
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img src={crypto.image} alt={crypto.name} className="w-8 h-8 rounded-full" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">{crypto.name}</p>
                      <p className="text-xs text-gray-400">{crypto.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-white font-medium">
                  {formatCurrency(crypto.price)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
                  <div className={`inline-flex items-center px-2 py-1 rounded-md ${
                    crypto.priceChange24h >= 0 
                      ? 'text-success-400 bg-success-500/10' 
                      : 'text-error-400 bg-error-500/10'
                  }`}>
                    {crypto.priceChange24h >= 0 
                      ? <ArrowUpRight size={14} className="mr-1" /> 
                      : <ArrowDownRight size={14} className="mr-1" />
                    }
                    {formatPercentage(crypto.priceChange24h)}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-300">
                  ${formatLargeNumber(crypto.marketCap)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-300">
                  ${formatLargeNumber(crypto.volume24h)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="p-1.5 rounded-full text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-150">
                      <Star size={16} />
                    </button>
                    <button className="px-3 py-1 bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium rounded-md transition-colors duration-150">
                      Trade
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CryptoList;