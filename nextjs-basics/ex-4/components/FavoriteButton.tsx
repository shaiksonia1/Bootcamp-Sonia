'use client';

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useFavorites } from '@/store/useFavorites';
import type { Product } from '@/lib/mock-data';

interface FavoriteButtonProps {
  product: Product;
}

export function FavoriteButton({ product }: FavoriteButtonProps) {
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
    <Button
      size="lg"
      variant={favorite ? "destructive" : "default"}
      onClick={toggleFavorite}
      className="w-full md:w-auto"
    >
      <Heart className={`h-5 w-5 mr-2 ${favorite ? 'fill-current' : ''}`} />
      {favorite ? 'Remove from Favorites' : 'Add to Favorites'}
    </Button>
  );
}