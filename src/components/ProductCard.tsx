import { useCartStore } from '../store/cartStore';
import type { Product } from '../types/products';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCartStore();

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.title}
        className="h-48 w-full object-contain p-4 bg-white"
      />
      <div className="p-4">
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{product.title}</h3>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <button 
          onClick={() => {
            addItem({
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.image
            });
            toast.success(`${product.title} added to cart!`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: true,
            });
          }}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}