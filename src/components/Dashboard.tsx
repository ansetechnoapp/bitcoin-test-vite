import React from 'react';
import PortfolioSummary from './PortfolioSummary';
import AssetList from './AssetList';
import PriceChart from './PriceChart';
import CryptoList from './CryptoList';
import TransactionList from './TransactionList';
import NewsSection from './NewsSection';
import { 
  portfolioAssets, 
  cryptocurrencies, 
  bitcoinChartData, 
  transactions,
  newsItems
} from '../data/mockData';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Portfolio summary */}
      <div className="mb-6">
        <PortfolioSummary assets={portfolioAssets} />
      </div>
      
      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="lg:col-span-2 grid gap-6">
          {/* Assets list */}
          <div>
            <AssetList assets={portfolioAssets} />
          </div>
          
          {/* Bitcoin price chart */}
          <div>
            <PriceChart 
              data={bitcoinChartData}
              title="Bitcoin Price"
              symbol="BTC/USD"
              priceChange={2.34}
            />
          </div>
          
          {/* Crypto list */}
          <div>
            <CryptoList cryptocurrencies={cryptocurrencies} />
          </div>
        </div>
        
        {/* Right column */}
        <div className="grid gap-6 grid-cols-1">
          {/* Transactions */}
          <div>
            <TransactionList transactions={transactions} />
          </div>
          
          {/* News */}
          <div>
            <NewsSection newsItems={newsItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;