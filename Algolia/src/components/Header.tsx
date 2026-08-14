import React from 'react';
import { Search } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-900 to-purple-800 py-8 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold text-lg">a</div>
            <span className="text-2xl font-bold tracking-tight">algolia</span>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Stop looking for an item</h1>
          <p className="text-xl text-indigo-200">Start finding it.</p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="flex bg-white rounded-lg shadow-lg overflow-hidden p-1">
            <input 
              type="text" 
              placeholder="Product, brand, color, ..." 
              className="flex-grow px-4 py-3 text-gray-900 focus:outline-none text-lg"
            />
            <button className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Search className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
