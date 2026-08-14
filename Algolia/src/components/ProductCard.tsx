import React from 'react';
import type { Product } from '../mockData';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col group h-full">
      <div className="w-full h-40 sm:h-48 mb-4 relative flex items-center justify-center p-2">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>
      
      <div className="flex-grow flex flex-col">
        <div className="text-[10px] text-gray-500 uppercase font-bold mb-1.5 tracking-wider">{product.category}</div>
        <h2 className="text-[13px] font-bold text-gray-900 mb-1.5 leading-snug group-hover:text-blue-600 line-clamp-3 cursor-pointer">{product.name}</h2>
        <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        
        <div className="mt-auto flex items-center gap-3">
          <div className="text-sm font-bold text-gray-900">${product.price.toFixed(2)}</div>
          <div className="flex items-center gap-1 border border-[#ffb400] text-[#ffb400] px-1.5 py-0.5 rounded text-[10px] font-bold">
            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
