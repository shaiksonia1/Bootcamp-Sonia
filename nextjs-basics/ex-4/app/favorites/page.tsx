'use client';

import { Heart } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { useFavorites } from '@/store/useFavorites';

export default function FavoritesPage() {
  const favorites = useFavorites((state) => state.favorites);

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] bg-gradient-to-br from-[#f0f4ff] via-[#e8edff] to-[#dde5ff] dark:from-[#2c2c2c] dark:via-[#444444] dark:to-[#666666] text-gray-900 dark:text-white rounded-xl p-8 mt-24 shadow-lg">
        <Heart className="h-20 w-20 mb-6 text-gray-400 dark:text-gray-500 transition-all duration-300 hover:text-red-500 hover:scale-110" />
        <h1 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-2 tracking-wide">No Favorites Yet</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Start adding products to your favorites list! ❤️</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-white via-[#f5f7ff] to-[#e2e8ff] dark:from-[#1a1a1a] dark:via-[#333333] dark:to-[#444444] min-h-screen py-12 px-6 md:px-12">
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mt-12 mb-12 tracking-wide">
        Your Favorites
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
