import { useEffect } from 'react';
import { useOrderStore } from '../store/orderStore';
import { useAuthStore } from '../store/authStore';

const statusColors = {
  pending: 'bg-yellow-100 text-yellow-800',
  'on-route': 'bg-blue-100 text-blue-800',
  delivered: 'bg-green-100 text-green-800'
};

export default function Orders() {
  const { user } = useAuthStore();
  const { orders, fetchOrders } = useOrderStore();

  useEffect(() => {
    if (user) {
      fetchOrders(user.id);
    }
  }, [user, fetchOrders]);

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen">
      <div className="row-start-1 h-16"></div>
      
      <div className="row-start-2 p-4 max-w-7xl mx-auto w-full">
        <h1 className="text-2xl font-bold mb-6">Your Orders</h1>
        
        {orders.length === 0 ? (
          <p className="text-center py-12 text-gray-500">No orders found</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium">Order #{order.id.split('-')[1]}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(order.date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`}>
                    {order.status.replace('-', ' ')}
                  </span>
                </div>
                
                <div className="space-y-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-20 h-20 object-contain"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-gray-600">
                          ${item.price.toFixed(2)} × {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="border-t mt-4 pt-4 flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">${order.total.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}