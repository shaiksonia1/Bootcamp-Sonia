import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getProduct, products } from '@/lib/mock-data';
import { FavoriteButton } from '@/components/FavoriteButton';

interface ProductPageProps {
  params: {
    id: string;
  };
}

// Generate static paths for all products
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:bg-gradient-to-br dark:from-blue-800 dark:via-blue-700 dark:to-blue-900 p-6 mt-24 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-blue-800 dark:text-blue-100 mb-4">{product.name}</h1>
          <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-6">${product.price.toFixed(2)}</p>
          <div className="bg-white p-4 rounded-lg shadow-md mb-6 dark:bg-blue-800 dark:text-white">
            <p className="text-lg font-semibold text-blue-700 dark:text-blue-200">
              Stock Availability: {product.stock} units
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            {product.description}
          </p>
          <FavoriteButton product={product} />
        </div>
      </div>
    </div>
  );
}
