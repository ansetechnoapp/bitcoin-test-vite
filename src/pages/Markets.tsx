import React, { useState } from 'react';
import CryptoList from '../components/CryptoList';
import PriceChart from '../components/PriceChart';
import NewsSection from '../components/NewsSection';
import { cryptocurrencies, bitcoinChartData, newsItems } from '../data/mockData';
import { Search } from 'lucide-react';

const Markets: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCryptos = cryptocurrencies.filter(crypto => 
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Markets</h1>
        <p className="text-gray-400">Explore and analyze cryptocurrency markets</p>
      </div>

      <div className="mb-6 max-w-md">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Search cryptocurrencies..."
            className="w-full pl-10 pr-4 py-2 bg-surface-dark border border-surface-light/50 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <PriceChart 
            data={bitcoinChartData}
            title="Bitcoin Price"
            symbol="BTC/USD"
            priceChange={2.34}
          />
          <CryptoList cryptocurrencies={filteredCryptos} />
        </div>
        
        <div>
          <NewsSection newsItems={newsItems} />
        </div>
      </div>
    </div>
  );
};

export default Markets;