import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useCart = create()(persist((set, get) => ({
  items: [],
  addToCart: (item) => {
    const items = get().items;
    const existingItem = items.find((i) => i.id === item.id);
    if (existingItem) {
      set({ items: items.map((i) => i.id === item.id ? { ...i, quantity: i.quantity + (item.quantity || 1) } : i) });
    } else {
      set({ items: [...items, { ...item, quantity: item.quantity || 1 }] });
    }
  },
  removeFromCart: (id) => set({ items: get().items.filter((item) => item.id !== id) }),
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) { get().removeFromCart(id); return; }
    set({ items: get().items.map((item) => item.id === id ? { ...item, quantity } : item) });
  },
  clearCart: () => set({ items: [] }),
  getTotalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0),
  getTotalItems: () => get().items.reduce((total, item) => total + item.quantity, 0),
}), { name: 'nosh-cart' }));