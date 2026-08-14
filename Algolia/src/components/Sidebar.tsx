import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { mockCategories, mockBrands } from '../mockData';

export const Sidebar: React.FC = () => {
  return (
    <div className="w-full md:w-64 flex-shrink-0">
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <span className="cursor-pointer hover:text-blue-600">Home</span>
        <ChevronRight className="w-4 h-4" />
        <span className="font-semibold text-gray-900">Results</span>
      </div>
      
      <div className="space-y-8">
        {/* Category Filter */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Category</h3>
          <ul className="space-y-2">
            {mockCategories.map((cat, i) => (
              <li key={i} className="flex justify-between items-center text-sm cursor-pointer hover:text-blue-600 group">
                <span className="text-gray-700 group-hover:text-blue-600">{cat.name}</span>
                <span className="bg-gray-100 text-gray-500 text-xs py-0.5 px-2 rounded-full">{cat.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands Filter */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Brands</h3>
          <div className="relative mb-3">
            <input 
              type="text" 
              placeholder="Search for brands…" 
              className="w-full border border-gray-300 rounded-md py-1.5 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <ul className="space-y-2 max-h-48 overflow-y-auto">
            {mockBrands.map((brand, i) => (
              <li key={i} className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500 w-4 h-4" />
                  <span className="text-gray-700">{brand.name}</span>
                </label>
                <span className="bg-gray-100 text-gray-500 text-xs py-0.5 px-2 rounded-full">{brand.count}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Price</h3>
          <div className="px-2">
            <input type="range" min="1" max="5000" className="w-full accent-blue-600" />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>$1</span>
              <span>$5,000</span>
            </div>
          </div>
        </div>

        {/* Free Shipping */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Free Shipping</h3>
          <label className="flex items-center gap-2 cursor-pointer text-sm">
            <span className="text-gray-700">Display only items with free shipping</span>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in ml-auto">
              <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-gray-300 focus:outline-none transition-transform duration-200" />
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"></label>
            </div>
          </label>
        </div>

        {/* Ratings */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-4">Ratings</h3>
          <ul className="space-y-2 text-sm">
            {[4, 3, 2, 1].map((rating) => (
              <li key={rating} className="flex items-center justify-between cursor-pointer group">
                <div className="flex items-center gap-1 text-orange-400 group-hover:text-orange-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-gray-300'}`} />
                  ))}
                  <span className="text-gray-500 ml-1 group-hover:text-blue-600">& Up</span>
                </div>
                <span className="bg-gray-100 text-gray-500 text-xs py-0.5 px-2 rounded-full">{Math.floor(Math.random() * 50) + 10}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
