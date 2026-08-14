import React from 'react';
import { Star } from 'lucide-react';
import { Product } from '../mockData';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 border border-transparent hover:border-gray-200 hover:shadow-lg transition-all rounded-lg bg-white">
      <div className="w-full sm:w-48 h-48 flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="flex-grow flex flex-col justify-between">
        <div>
          <div className="text-xs text-gray-500 uppercase font-semibold mb-1 tracking-wider">{product.category}</div>
          <h2 className="text-lg font-bold text-gray-900 mb-2 leading-tight hover:text-blue-600 cursor-pointer">{product.name}</h2>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        </div>
        
        <div className="flex items-end justify-between mt-4">
          <div className="flex items-center gap-1 bg-gray-50 border border-yellow-400 text-yellow-600 px-2 py-0.5 rounded text-xs font-semibold">
            <Star className="w-3 h-3 fill-current" />
            <span>{product.rating}</span>
          </div>
          <div className="text-xl font-bold text-gray-900">${product.price.toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
};
