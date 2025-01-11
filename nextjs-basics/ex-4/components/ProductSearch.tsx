'use client';

import { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ProductCard } from '@/components/ProductCard';
import type { Product } from '@/lib/mock-data';

interface ProductSearchProps {
  products: Product[];
}

export function ProductSearch({ products }: ProductSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle debouncing
  useEffect(() => {
    // Clear the previous timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set a new timeout to filter products after a delay (300ms here)
    debounceTimeoutRef.current = setTimeout(() => {
      // Debugging: log the search query
      console.log('Searching for:', searchQuery);

      const result = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Debugging: log the filtered results
      console.log('Filtered Products:', result);

      setFilteredProducts(result);
    }, 300);

    // Cleanup timeout on component unmount or searchQuery change
    return () => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [searchQuery, products]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#6dd5ed] text-white px-6 py-12">
      {/* Search Bar Section */}
      <div className="flex flex-col space-y-6 mt-12 mb-11 items-center">
        <h1 className="text-4xl font-extrabold">Discover Our Products</h1>
        <div className="relative w-full max-w-lg">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-all duration-300 group-hover:scale-110" />
          <Input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-5 py-3 rounded-full bg-white/90 backdrop-blur-lg border border-gray-300 text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
          />
        </div>
      </div>

      {/* Product Display Section */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-gray-300">No products found matching your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
