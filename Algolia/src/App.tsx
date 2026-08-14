import React from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ProductGrid } from './components/ProductGrid';
import { Pagination } from './components/Pagination';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar />
          <div className="flex-grow">
            <ProductGrid />
            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
