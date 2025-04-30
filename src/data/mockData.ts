import { Cryptocurrency, PortfolioAsset, Transaction, NewsItem } from '../types';

export const cryptocurrencies: Cryptocurrency[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 64253.42,
    priceChange24h: 2.34,
    marketCap: 1254000000000,
    volume24h: 38500000000,
    circulatingSupply: 19500000,
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3452.18,
    priceChange24h: 1.56,
    marketCap: 416000000000,
    volume24h: 21300000000,
    circulatingSupply: 120400000,
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    price: 153.42,
    priceChange24h: 3.78,
    marketCap: 67300000000,
    volume24h: 3850000000,
    circulatingSupply: 438500000,
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.54,
    priceChange24h: -1.24,
    marketCap: 18900000000,
    volume24h: 850000000,
    circulatingSupply: 35100000000,
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png'
  },
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.137,
    priceChange24h: -0.89,
    marketCap: 19600000000,
    volume24h: 1230000000,
    circulatingSupply: 143100000000,
    image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png'
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    price: 6.85,
    priceChange24h: 0.56,
    marketCap: 9850000000,
    volume24h: 343000000,
    circulatingSupply: 1436000000,
    image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png'
  },
  {
    id: 'ripple',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.59,
    priceChange24h: 1.23,
    marketCap: 32100000000,
    volume24h: 967000000,
    circulatingSupply: 54300000000,
    image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png'
  },
  {
    id: 'binancecoin',
    name: 'Binance Coin',
    symbol: 'BNB',
    price: 587.34,
    priceChange24h: 0.34,
    marketCap: 90800000000,
    volume24h: 1640000000,
    circulatingSupply: 154500000,
    image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png'
  }
];

export const portfolioAssets: PortfolioAsset[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    amount: 0.85,
    value: 54615.41,
    allocation: 62.3,
    price: 64253.42,
    priceChange24h: 2.34,
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    amount: 4.23,
    value: 14602.72,
    allocation: 16.7,
    price: 3452.18,
    priceChange24h: 1.56,
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    amount: 68.5,
    value: 10509.27,
    allocation: 12.0,
    price: 153.42,
    priceChange24h: 3.78,
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    amount: 14500,
    value: 7830.00,
    allocation: 9.0,
    price: 0.54,
    priceChange24h: -1.24,
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png'
  }
];

export const transactions: Transaction[] = [
  {
    id: 'tx1',
    type: 'buy',
    cryptoId: 'bitcoin',
    cryptoName: 'Bitcoin',
    cryptoSymbol: 'BTC',
    amount: 0.25,
    price: 63150.75,
    total: 15787.69,
    date: '2025-04-12T09:23:14Z',
    status: 'completed'
  },
  {
    id: 'tx2',
    type: 'sell',
    cryptoId: 'ethereum',
    cryptoName: 'Ethereum',
    cryptoSymbol: 'ETH',
    amount: 1.5,
    price: 3410.28,
    total: 5115.42,
    date: '2025-04-10T14:56:32Z',
    status: 'completed'
  },
  {
    id: 'tx3',
    type: 'buy',
    cryptoId: 'solana',
    cryptoName: 'Solana',
    cryptoSymbol: 'SOL',
    amount: 25.0,
    price: 148.32,
    total: 3708.00,
    date: '2025-04-07T11:05:47Z',
    status: 'completed'
  },
  {
    id: 'tx4',
    type: 'buy',
    cryptoId: 'cardano',
    cryptoName: 'Cardano',
    cryptoSymbol: 'ADA',
    amount: 5000,
    price: 0.55,
    total: 2750.00,
    date: '2025-04-03T16:34:22Z',
    status: 'completed'
  },
  {
    id: 'tx5',
    type: 'buy',
    cryptoId: 'ethereum',
    cryptoName: 'Ethereum',
    cryptoSymbol: 'ETH',
    amount: 2.0,
    price: 3365.50,
    total: 6731.00,
    date: '2025-04-02T10:12:08Z',
    status: 'completed'
  }
];

export const bitcoinChartData = Array.from({ length: 24 }, (_, i) => {
  const hour = 23 - i;
  const basePrice = 64000;
  const randomVariation = Math.random() * 2000 - 1000;
  const timestamp = new Date();
  timestamp.setHours(timestamp.getHours() - hour);
  
  return {
    timestamp: timestamp.toISOString(),
    price: basePrice + randomVariation
  };
});

export const newsItems: NewsItem[] = [
  {
    id: 'news1',
    title: 'Bitcoin reaches new all-time high surpassing $70,000',
    source: 'CryptoNews',
    url: '#',
    publishedAt: '2025-04-12T15:30:00Z',
    image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'news2',
    title: 'Ethereum 2.0 upgrade completes final testnet phase',
    source: 'BlockchainInsider',
    url: '#',
    publishedAt: '2025-04-11T12:15:00Z',
    image: 'https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'news3',
    title: 'Central banks exploring digital currencies, report shows',
    source: 'FinanceToday',
    url: '#',
    publishedAt: '2025-04-10T09:45:00Z',
    image: 'https://images.pexels.com/photos/8369650/pexels-photo-8369650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'news4',
    title: 'Major retailer announces plans to accept cryptocurrency payments',
    source: 'CryptoDaily',
    url: '#',
    publishedAt: '2025-04-09T16:20:00Z'
  }
];