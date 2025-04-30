import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  LineChart, 
  Wallet, 
  Clock, 
  Star, 
  Bell, 
  Settings,
  HelpCircle,
  LogOut
} from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  path,
  onClick 
}) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <li className="mb-2">
      <button
        className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
          isActive 
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

const Sidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <aside className="hidden md:flex flex-col w-64 h-screen bg-background py-6 px-4 border-r border-surface-light/30">
      <div className="flex items-center px-4 mb-8">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
          <span className="text-white font-bold text-lg">CV</span>
        </div>
        <h1 className="ml-3 text-xl font-bold text-white">CryptoVision</h1>
      </div>
      
      <div className="flex-grow">
        <nav>
          <ul>
            <SidebarItem 
              icon={<LayoutDashboard size={20} />} 
              label="Dashboard" 
              path="/dashboard"
              onClick={() => navigate('/dashboard')}
            />
            <SidebarItem 
              icon={<LineChart size={20} />} 
              label="Markets" 
              path="/markets"
              onClick={() => navigate('/markets')}
            />
            <SidebarItem 
              icon={<Wallet size={20} />} 
              label="Portfolio" 
              path="/portfolio"
              onClick={() => navigate('/portfolio')}
            />
            <SidebarItem 
              icon={<Clock size={20} />} 
              label="Transactions" 
              path="/transactions"
              onClick={() => navigate('/transactions')}
            />
            <SidebarItem 
              icon={<Star size={20} />} 
              label="Watchlist" 
              path="/watchlist"
              onClick={() => navigate('/watchlist')}
            />
            <SidebarItem 
              icon={<Bell size={20} />} 
              label="Alerts" 
              path="/alerts"
              onClick={() => navigate('/alerts')}
            />
          </ul>
        </nav>
      </div>
      
      <div className="mt-auto">
        <ul>
          <SidebarItem 
            icon={<Settings size={20} />} 
            label="Settings" 
            path="/settings"
            onClick={() => navigate('/settings')}
          />
          <SidebarItem 
            icon={<HelpCircle size={20} />} 
            label="Help Center" 
            path="/help"
            onClick={() => navigate('/help')}
          />
          <SidebarItem 
            icon={<LogOut size={20} />} 
            label="Log Out" 
            path="/logout"
            onClick={() => navigate('/logout')}
          />
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;