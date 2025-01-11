import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product } from '@/lib/mock-data';

interface FavoritesStore {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
}

export const useFavorites = create<FavoritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (product) => 
        set((state) => ({
          favorites: [...state.favorites, product]
        })),
      removeFavorite: (productId) =>
        set((state) => ({
          favorites: state.favorites.filter((p) => p.id !== productId)
        })),
      isFavorite: (productId) =>
        get().favorites.some((p) => p.id === productId),
    }),
    {
      name: 'favorites-storage',
    }
  )
);