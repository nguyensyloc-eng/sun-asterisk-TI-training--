import React from 'react';
import { Search } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#ffb400] py-12 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      {/* Removed pattern to keep it clean like the screenshot, or we can use a subtle background image if provided, but solid yellow works best here */}
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        <div className="mb-8 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center font-bold text-xl border-2 border-white w-7 h-7 rounded-full pb-0.5">a</div>
            <span className="text-2xl font-bold tracking-tight">algolia</span>
          </div>
        </div>
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide">
            Stop looking for an item — find it.
          </h1>
        </div>

        <div className="w-full max-w-3xl mx-auto relative">
          <div className="flex bg-white rounded shadow-md overflow-hidden items-center h-14">
            <div className="pl-4 pr-2 text-[#ffb400]">
              <Search className="w-6 h-6" />
            </div>
            <input 
              type="text" 
              placeholder="Product, brand, color, ..." 
              className="flex-grow h-full px-2 text-gray-900 focus:outline-none text-lg placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
