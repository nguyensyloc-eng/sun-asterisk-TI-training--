import React from 'react';
import type { Product } from '../mockData';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col group h-full bg-white">
      <div className="w-full h-48 mb-6 relative flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain mix-blend-multiply"
        />
      </div>
      
      <div className="flex-grow flex flex-col px-1">
        <div className="text-[10px] text-gray-400 uppercase font-bold mb-2 tracking-widest">{product.brand || product.category}</div>
        <h2 className="text-[14px] font-bold text-gray-900 mb-2 leading-snug hover:text-blue-600 line-clamp-2 cursor-pointer">{product.name}</h2>
        <p className="text-xs text-gray-500 leading-relaxed line-clamp-3 font-light">{product.description}</p>
      </div>
    </div>
  );
};
