import React from 'react';
import { NewsItem } from '../types';
import { formatDate } from '../utils/formatters';
import { ExternalLink } from 'lucide-react';

interface NewsSectionProps {
  newsItems: NewsItem[];
}

const NewsSection: React.FC<NewsSectionProps> = ({ newsItems }) => {
  return (
    <div className="bg-surface-dark rounded-xl overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white mb-1">Crypto News</h2>
          <p className="text-sm text-gray-400">Latest market updates</p>
        </div>
        <button className="text-sm text-primary-400 hover:text-primary-300 transition-colors duration-150">
          More news
        </button>
      </div>
      
      <div className="px-4 pb-4 grid gap-4 grid-cols-1 md:grid-cols-2">
        {newsItems.map((item, index) => (
          <div 
            key={item.id}
            className="bg-surface-light/10 rounded-lg overflow-hidden hover:bg-surface-light/20 transition-all duration-200 hover:shadow-md animate-fade-in"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {item.image && (
              <div className="h-36 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-gray-400 bg-surface-light/30 px-2 py-1 rounded-md">
                  {item.source}
                </span>
                <span className="text-xs text-gray-400">
                  {formatDate(item.publishedAt)}
                </span>
              </div>
              
              <h3 className="text-sm font-medium text-white mb-2 line-clamp-2">
                {item.title}
              </h3>
              
              <a 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs text-primary-400 hover:text-primary-300 transition-colors duration-150 flex items-center"
              >
                Read more <ExternalLink size={12} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;