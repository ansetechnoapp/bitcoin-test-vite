import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  Menu, 
  X,
  LayoutDashboard,
  LineChart,
  Wallet,
  Clock,
  Star,
  Settings,
  HelpCircle,
  LogOut 
} from 'lucide-react';

interface MobileMenuItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ 
  icon, 
  label, 
  active = false,
  onClick 
}) => {
  return (
    <li className="mb-2">
      <button
        className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
          active 
            ? 'bg-primary-600 text-white' 
            : 'text-gray-300 hover:bg-surface-dark hover:text-white'
        }`}
        onClick={onClick}
      >
        <span className="mr-3">{icon}</span>
        <span className="font-medium">{label}</span>
      </button>
    </li>
  );
};

const Header: React.FC = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md border-b border-surface-light/30">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo for mobile */}
          <div className="flex md:hidden items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CV</span>
            </div>
            <h1 className="ml-2 text-lg font-bold text-white">CryptoVision</h1>
          </div>
          
          {/* Search */}
          <div className="hidden md:flex relative flex-grow max-w-md mx-4">
            <div className={`absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none transition-opacity duration-200 ${
              isSearchFocused ? 'opacity-100 text-primary-400' : 'opacity-70'
            }`}>
              <Search size={18} />
            </div>
            <input
              type="text"
              placeholder="Search markets, coins, tokens..."
              className="w-full py-2 pl-10 pr-4 rounded-lg bg-surface-dark border border-surface-light/50 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 transition-all duration-200"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center">
            <button className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-surface-dark transition-colors duration-200 relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-primary-500"></span>
            </button>
            
            <div className="ml-4 flex items-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-700 to-primary-500 flex items-center justify-center">
                <span className="font-medium text-white">JD</span>
              </div>
            </div>
            
            {/* Mobile menu toggle */}
            <button 
              className="ml-4 p-2 rounded-lg md:hidden text-gray-300 hover:text-white hover:bg-surface-dark transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-background-dark animate-fade-in">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-surface-light/30">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">CV</span>
                </div>
                <h1 className="ml-2 text-lg font-bold text-white">CryptoVision</h1>
              </div>
              <button 
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-surface-dark transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4">
              <div className="relative mb-6">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none opacity-70">
                  <Search size={18} />
                </div>
                <input
                  type="text"
                  placeholder="Search markets, coins, tokens..."
                  className="w-full py-2 pl-10 pr-4 rounded-lg bg-surface-dark border border-surface-light/50 focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                />
              </div>
              
              <nav>
                <ul>
                  <MobileMenuItem icon={<LayoutDashboard size={20} />} label="Dashboard" active />
                  <MobileMenuItem icon={<LineChart size={20} />} label="Markets" />
                  <MobileMenuItem icon={<Wallet size={20} />} label="Portfolio" />
                  <MobileMenuItem icon={<Clock size={20} />} label="Transactions" />
                  <MobileMenuItem icon={<Star size={20} />} label="Watchlist" />
                  <MobileMenuItem icon={<Bell size={20} />} label="Alerts" />
                  <MobileMenuItem icon={<Settings size={20} />} label="Settings" />
                  <MobileMenuItem icon={<HelpCircle size={20} />} label="Help Center" />
                  <MobileMenuItem icon={<LogOut size={20} />} label="Log Out" />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;