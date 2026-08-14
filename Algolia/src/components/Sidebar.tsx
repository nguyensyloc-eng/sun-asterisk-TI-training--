import React from 'react';
import { ChevronUp, RotateCcw } from 'lucide-react';
import { mockCategories } from '../mockData';

export const Sidebar: React.FC = () => {
  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="flex items-center justify-between border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
        <button className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600">
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear filters</span>
        </button>
      </div>
      
      <div className="space-y-8">
        {/* Category Filter */}
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Category</h3>
          <ul className="space-y-3">
            {mockCategories.map((cat, i) => (
              <li key={i} className="flex justify-between items-center text-sm cursor-pointer group">
                <div className="flex items-center gap-2 text-gray-700 group-hover:text-gray-900">
                  <ChevronUp className="w-3.5 h-3.5 text-gray-400" />
                  <span>{cat.name}</span>
                </div>
                <span className="bg-gray-100 text-gray-500 text-xs py-0.5 px-2 rounded font-medium">{cat.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Free Shipping */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Free Shipping</h3>
          <label className="flex items-start justify-between cursor-pointer text-sm">
            <span className="text-gray-600 pr-4">Display only items with free shipping</span>
            <div className="relative inline-block w-8 align-middle select-none transition duration-200 ease-in mt-0.5 shrink-0">
              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-200 focus:outline-none transition-transform duration-200" />
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-4 rounded-full bg-gray-200 cursor-pointer"></label>
            </div>
          </label>
        </div>

        {/* Ratings */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-4">Ratings</h3>
          <ul className="space-y-3 text-sm">
            {[4, 3, 2, 1].map((rating) => (
              <li key={rating} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-1 text-[#ffb400]">
                  {Array.from({ length: 5 }).map((_, i) => (
                     <svg key={i} className={`w-4 h-4 ${i < rating ? 'fill-current text-[#ffb400]' : 'fill-gray-200 text-gray-200'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <span className="bg-gray-100 text-gray-500 text-xs py-0.5 px-2 rounded font-medium">{992 - rating * 5}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
