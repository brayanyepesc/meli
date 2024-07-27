import { create } from "zustand";
import { persist }  from "zustand/middleware";
import { Product } from "../frontend/components/molecules/ProductItem/types";
import { CartStore } from "../types/types";

const useCartStore = create<CartStore, [["zustand/persist", CartStore]]>(
    persist(
        (set) => ({
            cart: [], // Estado inicial
            addToCart: (product: Product) => set((state) => {
                const existingItem = state.cart.find((item) => item.id === product.id);

                if (existingItem) {
                    const updatedCart = state.cart.map((item) =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    );
                    return { cart: updatedCart };
                } else {
                    const newItem = { ...product, quantity: 1 };
                    const updatedCart = [...state.cart, newItem];
                    return { cart: updatedCart };
                }
            }),

            removeFromCart: (productId: string) => set((state) => {
                const updatedCart = state.cart.filter((item) => item.id !== productId);
                return { cart: updatedCart };
            }),

            updateQuantity: (productId: string, quantity: number) => set((state) => {
                const updatedCart = state.cart.map((item) =>
                    item.id === productId ? { ...item, quantity } : item
                );
                return { cart: updatedCart };
            }),

            clearCart: () => set({ cart: [] })
        }),
        {
            name: 'cart',
            getStorage: () => localStorage
        }
    )
);

export default useCartStore;