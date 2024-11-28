import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'react-hot-toast';

const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      addToCart: (product) => set((state) => {
        const existingItem = state.items.find(item => item.id === product.id);
        if (existingItem) {
          toast.success('Cantidad actualizada en el carrito');
          return {
            items: state.items.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        }
        toast.success('Producto agregado al carrito');
        return { items: [...state.items, { ...product, quantity: 1 }] };
      }),
      removeFromCart: (productId) => set((state) => {
        toast.success('Producto eliminado del carrito');
        return {
          items: state.items.filter(item => item.id !== productId)
        };
      }),
      updateQuantity: (productId, quantity) => set((state) => ({
        items: state.items.map(item =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item
        ).filter(item => item.quantity > 0)
      })),
      clearCart: () => set({ items: [] }),
      getTotal: () => {
        const items = get().items;
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    }),
    {
      name: 'cart-storage'
    }
  )
);

export const useCart = () => {
  const store = useCartStore();
  return {
    items: store.items,
    addToCart: store.addToCart,
    removeFromCart: store.removeFromCart,
    updateQuantity: store.updateQuantity,
    clearCart: store.clearCart,
    getTotal: store.getTotal,
  };
};