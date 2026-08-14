import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const Pagination: React.FC = () => {
  return (
    <div className="flex justify-center items-center gap-2 mt-12 mb-16">
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100 disabled:opacity-50" disabled>
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      {[1, 2, 3, 4, 5, '...', 7].map((page, i) => (
        <button 
          key={i}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-colors ${
            page === 1 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'text-gray-700 hover:bg-gray-100'
          }`}
        >
          {page}
        </button>
      ))}

      <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
