import React from 'react';
import { ProductCard } from './ProductCard';
import { Pagination } from './Pagination';
import { mockProducts } from '../mockData';

interface ProductGridProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ currentPage, setCurrentPage, itemsPerPage }) => {
  const totalItems = mockProducts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = mockProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="flex-grow flex flex-col min-h-full">
      {/* Top Controls */}
      <div className="flex justify-end items-center mb-6 text-sm text-gray-600 border-b border-gray-100 pb-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
            <span className="whitespace-nowrap text-xs">Sort by featured</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
          
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-900">
            <span className="whitespace-nowrap text-xs">16 hits per page</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-10 mb-8">
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="mt-auto">
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};
