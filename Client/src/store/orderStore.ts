import { create } from 'zustand';

type OrderStatus = 'pending' | 'on-route' | 'delivered';

interface OrderItem {
  id: string;
  productId: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
  items: OrderItem[];
}

interface OrderState {
  orders: Order[];
  fetchOrders: (userId: string) => void;
}

export const useOrderStore = create<OrderState>((set) => ({
  orders: [],
  fetchOrders: (userId) => {
    if (userId === 'fake-user-id') {
      set({
        orders: [
          {
            id: 'order-1',
            date: new Date().toISOString(),
            status: 'pending',
            total: 59.98,
            items: [
              {
                id: 'item-1',
                productId: 1,
                title: 'Black T-Shirt',
                price: 19.99,
                quantity: 2,
                image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
              }
            ]
          },
          {
            id: 'order-2',
            date: new Date(Date.now() - 86400000).toISOString(), // Yesterday
            status: 'delivered',
            total: 39.99,
            items: [
              {
                id: 'item-2',
                productId: 2,
                title: 'Blue Jeans',
                price: 39.99,
                quantity: 1,
                image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg'
              }
            ]
          }
        ]
      });
    }
  }
}));