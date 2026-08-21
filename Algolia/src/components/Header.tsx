import React from 'react';
import { Search } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-[#ffb400] py-16 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        <div className="mb-10 flex items-center justify-center">
          <div className="flex items-center gap-2">
            <svg className="w-8 h-8 text-white fill-current" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <span className="text-3xl font-semibold tracking-tight">algolia</span>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h1 className="text-[40px] md:text-[50px] font-light tracking-wide text-white">
            Stop looking for an item — find it.
          </h1>
        </div>

        <div className="w-full max-w-4xl mx-auto relative">
          <div className="flex bg-white rounded shadow-lg overflow-hidden items-center h-16">
            <div className="pl-5 pr-3 text-[#ffb400]">
              <Search className="w-7 h-7 stroke-[2.5]" />
            </div>
            <input 
              type="text" 
              placeholder="Product, brand, color, ..." 
              className="flex-grow h-full px-2 text-gray-900 focus:outline-none text-[22px] font-light placeholder-gray-400"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
