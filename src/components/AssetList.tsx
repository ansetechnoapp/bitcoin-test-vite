import React from 'react';
import { PortfolioAsset } from '../types';
import { formatCurrency, formatPercentage } from '../utils/formatters';
import { ArrowUpRight, ArrowDownRight, MoreVertical } from 'lucide-react';

interface AssetListProps {
  assets: PortfolioAsset[];
}

const AssetList: React.FC<AssetListProps> = ({ assets }) => {
  return (
    <div className="bg-surface-dark rounded-xl overflow-hidden">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-1">Your Assets</h2>
        <p className="text-sm text-gray-400">Current holdings</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-surface-light/30">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-semibold text-gray-400 uppercase tracking-wider">Asset</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Price</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">24h</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Holdings</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Value</th>
              <th className="px-4 py-3 text-right text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-light/20">
            {assets.map((asset) => (
              <tr 
                key={asset.id} 
                className="hover:bg-surface-light/10 transition-colors duration-150 animate-fade-in"
                style={{ animationDelay: `${assets.indexOf(asset) * 0.05}s` }}
              >
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <img src={asset.image} alt={asset.name} className="w-8 h-8 rounded-full" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">{asset.name}</p>
                      <p className="text-xs text-gray-400">{asset.symbol}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-white font-medium">
                  {formatCurrency(asset.price)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-right">
                  <div className={`inline-flex items-center px-2 py-1 rounded-md ${
                    asset.priceChange24h >= 0 
                      ? 'text-success-400 bg-success-500/10' 
                      : 'text-error-400 bg-error-500/10'
                  }`}>
                    {asset.priceChange24h >= 0 
                      ? <ArrowUpRight size={14} className="mr-1" /> 
                      : <ArrowDownRight size={14} className="mr-1" />
                    }
                    {formatPercentage(asset.priceChange24h)}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right">
                  <div>
                    <p className="text-sm text-white">{asset.amount} {asset.symbol}</p>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right">
                  <p className="text-sm font-medium text-white">{formatCurrency(asset.value)}</p>
                  <p className="text-xs text-gray-400">{asset.allocation}% of portfolio</p>
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-right text-sm">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="px-3 py-1.5 bg-success-600 hover:bg-success-700 text-white text-xs font-medium rounded-md transition-colors duration-150">
                      Buy
                    </button>
                    <button className="px-3 py-1.5 bg-error-600 hover:bg-error-700 text-white text-xs font-medium rounded-md transition-colors duration-150">
                      Sell
                    </button>
                    <button className="p-1.5 rounded-full text-gray-400 hover:text-gray-200 hover:bg-surface-light/30 transition-colors duration-150">
                      <MoreVertical size={16} />
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

export default AssetList;