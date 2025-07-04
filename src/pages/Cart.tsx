// src/pages/Cart.tsx
import { Link } from 'react-router-dom';

export default function Cart() {
  // Mock cart data - replace with your actual state management
  const cartItems = [
    { id: 1, title: 'Black T-Shirt', price: 19.99, quantity: 2, image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg' },
    { id: 2, title: 'Blue Jeans', price: 39.99, quantity: 1, image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg' }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      {/* Header spacer */}
      <div className="row-start-1 h-16"></div>
      
      {/* Main content */}
      <div className="row-start-2 p-4 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        
        {/* Cart grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items column */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="grid grid-cols-5 gap-4 p-4 border rounded-lg">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="col-span-1 h-24 object-contain"
                />
                <div className="col-span-3">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button className="px-2 border rounded">-</button>
                    <span className="px-4">{item.quantity}</span>
                    <button className="px-2 border rounded">+</button>
                  </div>
                </div>
                <div className="col-span-1 text-right">
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  <button className="text-red-500 text-sm mt-2">Remove</button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Summary column */}
          <div className="border p-6 rounded-lg h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Proceed to Checkout
            </button>
            <Link to="/" className="block text-center mt-4 text-blue-600 hover:underline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}