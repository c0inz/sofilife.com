"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number; // in cents
  image: string;
  size: string;
  color: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  
  // Actions
  addItem: (item: Omit<CartItem, "id" | "quantity"> & { quantity?: number }) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  
  // Computed
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem: (item) => {
        const { items } = get();
        const existingItemIndex = items.findIndex(
          (i) =>
            i.productId === item.productId &&
            i.size === item.size &&
            i.color === item.color
        );

        if (existingItemIndex > -1) {
          // Update quantity if same variant exists
          const updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += item.quantity || 1;
          set({ items: updatedItems });
        } else {
          // Add new item
          const newItem: CartItem = {
            ...item,
            id: `${item.productId}-${item.size}-${item.color}-${Date.now()}`,
            quantity: item.quantity || 1,
          };
          set({ items: [...items, newItem] });
        }
        
        // Open cart when adding item
        set({ isOpen: true });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      updateQuantity: (id, quantity) => {
        if (quantity < 1) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),
      
      openCart: () => set({ isOpen: true }),
      
      closeCart: () => set({ isOpen: false }),

      getTotal: () => {
        return get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },
    }),
    {
      name: "sofilife-cart",
      partialize: (state) => ({ items: state.items }),
    }
  )
);
