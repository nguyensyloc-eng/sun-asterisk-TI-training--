import React from 'react';
import { ProductCard } from './ProductCard';
import { mockProducts } from '../mockData';
import { Grid, List } from 'lucide-react';

export const ProductGrid: React.FC = () => {
  return (
    <div className="flex-grow">
      {/* Top Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 text-sm text-gray-700 gap-4">
        <div>10,234 results found in 3ms</div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">Sort by</label>
            <select className="border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white shadow-sm">
              <option>Sort by featured</option>
              <option>Price ascending</option>
              <option>Price descending</option>
            </select>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold">Hits per page</label>
            <select className="border border-gray-300 rounded-md py-1.5 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white shadow-sm">
              <option>16 hits per page</option>
              <option>32 hits per page</option>
              <option>64 hits per page</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="flex flex-col gap-2">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
