import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types/products';

const CATEGORIES = [
  "men's clothing",
  "women's clothing",
  "electronics",
  "jewelery"
] as const;

const CATEGORY_DISPLAY_NAMES = {
  "men's clothing": "Men's",
  "women's clothing": "Women's",
  "electronics": "Electronics",
  "jewelery": "Jewelry"
} as const;

type Category = typeof CATEGORIES[number];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>("men's clothing");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProducts = async (category: Category) => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/api/products/${category}`);
      setProducts(await res.json());
    } catch (error) {
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(activeCategory);
  }, [activeCategory]);

  return (
    <div className="max-w-7xl mx-auto p-4 pt-20">
      <div className="flex justify-between mb-8 border-b">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-3 font-medium capitalize transition-colors ${
              activeCategory === category
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-800'
            }`}
          >
            {CATEGORY_DISPLAY_NAMES[category]}
          </button>
        ))}
      </div>
      {isLoading ? (
        <div className="text-center py-8">Loading products...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}