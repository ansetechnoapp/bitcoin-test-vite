export interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  price: number;
  priceChange24h: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  image: string;
}

export interface PortfolioAsset {
  id: string;
  name: string;
  symbol: string;
  amount: number;
  value: number;
  allocation: number;
  price: number;
  priceChange24h: number;
  image: string;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell';
  cryptoId: string;
  cryptoName: string;
  cryptoSymbol: string;
  amount: number;
  price: number;
  total: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface ChartData {
  timestamp: string;
  price: number;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  url: string;
  publishedAt: string;
  image?: string;
}