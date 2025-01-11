import { getProducts } from '@/lib/mock-data';
import { ProductSearch } from '@/components/ProductSearch';

export const revalidate = 3600; // Revalidate every hour

export default async function ProductsPage() {
  // Fetch products on the server
  const products = await getProducts();

  return (
    <div>
      <ProductSearch products={products} />
    </div>
  );
}