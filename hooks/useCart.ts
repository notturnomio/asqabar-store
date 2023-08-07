import { IProduct } from '@/types';
import toast from 'react-hot-toast';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface CartStore {
  items: IProduct[];
  addItem: (data: IProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: IProduct) => {
        const currentItems = get().items;
        const isItemExist = currentItems.find((item) => item.id === data.id);
        if (isItemExist) {
          return toast.error('Item already exist in cart');
        }
        set({ items: [...currentItems, data] });
        toast.success('Item added to cart');
      },
      removeItem: (id: string) => {
        const currentItems = get().items;
        const filteredItems = currentItems.filter((item) => item.id !== id);
        set({ items: filteredItems });
        toast.success('Item removed from cart');
      },
      removeAll: () => {
        set({ items: [] });
        toast.success('Cart cleared');
      },
    }),
    { name: 'cartStorage', storage: createJSONStorage(() => localStorage) }
  )
);

export default useCart;
