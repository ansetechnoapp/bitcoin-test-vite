import React from 'react';
import PortfolioSummary from '../components/PortfolioSummary';
import AssetList from '../components/AssetList';
import PriceChart from '../components/PriceChart';
import TransactionList from '../components/TransactionList';
import { portfolioAssets, bitcoinChartData, transactions } from '../data/mockData';

const Portfolio: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Portfolio</h1>
        <p className="text-gray-400">Track and manage your cryptocurrency investments</p>
      </div>

      <div className="mb-6">
        <PortfolioSummary assets={portfolioAssets} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <AssetList assets={portfolioAssets} />
          <PriceChart 
            data={bitcoinChartData}
            title="Portfolio Value"
            symbol="USD"
            priceChange={2.34}
          />
        </div>
        
        <div>
          <TransactionList transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;