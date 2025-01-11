import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 bg-blue-100 dark:bg-gray-900  transition-colors">
      <div className="bg-white dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-40 backdrop-blur-lg shadow-xl rounded-xl p-12 text-center max-w-lg w-full border border-white/40 dark:border-gray-600">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-4 drop-shadow-lg">
            Happy Mart
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-md">
            Your One-Stop Destination for Trendy & Smart Shopping!
          </p>
        </div>

        <div className="flex gap-6 mt-10">
          <Link href="/products">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700 text-white font-semibold shadow-lg transition duration-300 transform hover:scale-105 hover:from-blue-500 hover:to-blue-700"
            >
              Browse Products
            </Button>
          </Link>
          <Link href="/favorites">
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-blue-300 to-blue-500 dark:from-blue-400 dark:to-blue-600 text-white font-semibold border border-blue-500 dark:border-blue-400 shadow-lg transition duration-300 transform hover:scale-105 hover:from-blue-400 hover:to-blue-600"
            >
              View Favorites
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
