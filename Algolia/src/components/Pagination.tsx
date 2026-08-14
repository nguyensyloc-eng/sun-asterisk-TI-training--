import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-1.5 mt-12 mb-16">
      <button 
        className="w-8 h-8 rounded flex items-center justify-center text-gray-500 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium" 
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &lsaquo;
      </button>
      
      {pages.map((page) => (
        <button 
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-8 h-8 rounded flex items-center justify-center text-sm font-medium transition-colors ${
            page === currentPage 
              ? 'bg-[#ffb400] text-white' 
              : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
          }`}
        >
          {page}
        </button>
      ))}

      <button 
        className="w-8 h-8 rounded flex items-center justify-center text-gray-500 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium"
        disabled={currentPage === totalPages || totalPages === 0}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &rsaquo;
      </button>
    </div>
  );
};
