// src/store/authStore.ts
import { create } from 'zustand';

interface AuthState {
  user: null | { id: string; email: string };
  login: (email: string) => void;
  logout: () => void;
}

interface AuthState {
  user: null | { id: string; email: string };
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: typeof window !== 'undefined' 
    ? JSON.parse(localStorage.getItem('user') || 'null') 
    : null,

  login: (email) => {
    const user = { id: crypto.randomUUID(), email };
    localStorage.setItem('user', JSON.stringify(user));
    set({ user });
  },

  logout: () => {
    localStorage.removeItem('user');
    set({ user: null });
  }
}));
