'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useFavorites } from '@/store/useFavorites';
import type { Product } from '@/lib/mock-data';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const favorite = isFavorite(product.id);

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(product.id);
    } else {
      addFavorite(product);
    }
  };

  return (
    <Card className="overflow-hidden rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-[#ffffff] via-[#f0f5ff] to-[#d6e0f5]">
      <CardHeader className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle className="line-clamp-1 text-gray-900 text-lg font-semibold">{product.name}</CardTitle>
        <p className="text-2xl font-bold mt-2 text-blue-600">${product.price.toFixed(2)}</p>
        <p className="text-sm text-gray-600 mt-1">
          Stock: {product.stock} units
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between">
        <Link href={`/products/${product.id}`}>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300">
            View Details
          </Button>
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleFavorite}
          className={`transition-all duration-300 rounded-full p-2 ${
            favorite ? "bg-red-500 text-white hover:bg-red-600 shadow-md" : "text-gray-600 hover:text-red-500"
          }`}
        >
          <Heart className={`h-5 w-5 transition-all duration-300 ${favorite ? 'fill-current text-white' : ''}`} />
        </Button>
      </CardFooter>
    </Card>
  );
}
