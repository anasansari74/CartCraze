import { type Product } from '../types/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.title}
        className="h-48 w-full object-contain p-4 bg-white"
      />
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.title}</h3>
        <p className="text-gray-600 mb-2">${product.price}</p>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}