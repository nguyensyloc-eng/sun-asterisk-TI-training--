import React from 'react';
import { RotateCcw } from 'lucide-react';
import { mockCategories } from '../mockData';

export const Sidebar: React.FC = () => {
  return (
    <div className="w-full md:w-56 flex-shrink-0">
      <div className="flex items-center justify-between pb-4 mb-6">
        <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        <button className="flex items-center gap-1 text-[11px] text-gray-400 hover:text-gray-600">
          <RotateCcw className="w-3 h-3" />
          <span>Clear filters</span>
        </button>
      </div>
      
      <div className="space-y-8">
        {/* Category Filter */}
        <div>
          <h3 className="text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-4">Category</h3>
          <ul className="space-y-4">
            {mockCategories.map((cat, i) => (
              <li key={i} className="flex justify-between items-center text-[13px] cursor-pointer group">
                <div className="flex items-center gap-3 text-gray-600 group-hover:text-gray-900">
                  <div className="w-3.5 h-3.5 bg-blue-600 flex items-center justify-center shadow-sm">
                    <svg className="w-2 h-2 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <span>{cat.name}</span>
                </div>
                <span className="text-gray-400 text-xs">{cat.count}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
