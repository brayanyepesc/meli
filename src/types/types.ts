import { Product } from "../frontend/components/molecules/ProductItem/types";

export interface CartItem extends Product {
    quantity: number;
}

export interface CartStore {
    cart: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;
}