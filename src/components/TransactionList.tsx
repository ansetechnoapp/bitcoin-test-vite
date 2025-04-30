import React from 'react';
import { Transaction } from '../types';
import { formatCurrency, formatDateTime } from '../utils/formatters';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="bg-surface-dark rounded-xl overflow-hidden">
      <div className="p-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white mb-1">Recent Transactions</h2>
          <p className="text-sm text-gray-400">Your recent trading activity</p>
        </div>
        <button className="text-sm text-primary-400 hover:text-primary-300 transition-colors duration-150">
          View all
        </button>
      </div>
      
      <ul className="divide-y divide-surface-light/20">
        {transactions.map((transaction) => (
          <li 
            key={transaction.id}
            className="px-4 py-3 hover:bg-surface-light/10 transition-colors duration-150 animate-fade-in"
            style={{ animationDelay: `${transactions.indexOf(transaction) * 0.05}s` }}
          >
            <div className="flex items-center">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                transaction.type === 'buy' 
                  ? 'bg-success-500/20 text-success-400' 
                  : 'bg-error-500/20 text-error-400'
              }`}>
                {transaction.type === 'buy' 
                  ? <ArrowUpRight size={18} /> 
                  : <ArrowDownRight size={18} />
                }
              </div>
              
              <div className="ml-3 flex-grow">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-white">
                    {transaction.type === 'buy' ? 'Bought' : 'Sold'} {transaction.cryptoName}
                  </p>
                  <p className={`text-sm font-medium ${
                    transaction.type === 'buy' 
                      ? 'text-success-400' 
                      : 'text-error-400'
                  }`}>
                    {transaction.type === 'buy' ? '+' : '-'}{transaction.amount} {transaction.cryptoSymbol}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-gray-400">{formatDateTime(transaction.date)}</p>
                  <p className="text-xs text-gray-400">{formatCurrency(transaction.total)}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;