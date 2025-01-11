'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, Sun, Moon } from 'lucide-react';
import { useFavorites } from '@/store/useFavorites';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const favorites = useFavorites((state) => state.favorites);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <nav className="bg-gradient-to-r from-blue-400 to-blue-600 dark:from-gray-800 dark:to-gray-900 bg-opacity-90 backdrop-blur-lg shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 text-white font-bold text-lg hover:opacity-80 transition">
          <span>Happy Mart</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link href="/products">
            <Button variant="ghost" className="text-white hover:bg-white/20 transition">
              Products
            </Button>
          </Link>
          <Link href="/favorites" className="relative">
            <Button variant="ghost" className="text-white hover:bg-white/20 transition flex items-center">
              <Heart className="h-5 w-5 mr-2 text-red-400" />
              Favorites
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold shadow-md">
                  {favorites.length}
                </span>
              )}
            </Button>
          </Link>

          {/* Light/Dark Mode Toggle */}
          <Button variant="ghost" onClick={toggleTheme} className="text-white hover:bg-white/20 transition">
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
}
