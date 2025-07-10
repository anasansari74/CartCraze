import { create } from 'zustand';

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  cart: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  addItem: (item) => set((state) => {
    const existing = state.cart.find(i => i.id === item.id);
    return {
      cart: existing 
        ? state.cart.map(i => i.id === item.id ? {...i, quantity: i.quantity + 1} : i)
        : [...state.cart, {...item, quantity: 1}]
    };
  }),
  removeItem: (id) => set((state) => ({
    cart: state.cart.filter(item => item.id !== id)
  })),
  updateQuantity: (id, quantity) => set((state) => ({
    cart: state.cart.map(item => 
      item.id === id ? {...item, quantity: Math.max(1, quantity)} : item
    )
  })),
  clearCart: () => set({ cart: [] }),
}));