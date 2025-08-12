import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CartProduct } from "@/interfaces/products";
import { Size } from "@/generated/prisma";
import { currencyFormat } from "@/utils/functions";

type CartState = {
  products: CartProduct[];
};

type CartActions = {
  addCartProduct: (product: CartProduct) => void;
  setQuantity: (productId: string, size: Size, qty: number) => void;
  removeCartProduct: (productId: string, size: Size) => void;
  clear: () => void;
  // Other functions
  getProductsQuantity: () => number;
  getProductsTotal: (taxRate?: number) => {
    total: string;
    subtotal: string;
    tax: string;
  };
};

const useCartStore = create<CartState & CartActions>()(
  persist(
    (set, get) => ({
      products: [],

      addCartProduct: (product) =>
        set((state) => {
          const i = state.products.findIndex(
            (p) => p.productId === product.productId && p.size === product.size
          );

          if (i === -1) {
            return { products: [...state.products, product] };
          }

          const next = state.products.slice();
          next[i] = {
            ...next[i],
            quantity: product.quantity,
          };
          return { products: next };
        }),

      setQuantity: (productId, size, qty) =>
        set((state) => ({
          products: state.products.map((p) =>
            p.productId === productId && p.size === size
              ? { ...p, quantity: Math.max(0, qty) }
              : p
          ),
        })),

      removeCartProduct: (productId, size) =>
        set((state) => ({
          products: state.products.filter(
            (p) => !(p.productId === productId && p.size === size)
          ),
        })),

      clear: () => set({ products: [] }),

      // Other functions
      getProductsQuantity: () =>
        get().products.reduce((acc, p) => acc + p.quantity, 0),

      getProductsTotal: (taxRate?: number) => {
        const subtotal = get().products.reduce(
          (acc, p) => acc + p.quantity * p.price,
          0
        );
        const tax = parseFloat((subtotal * (taxRate ?? 0)).toFixed(2));
        const total = subtotal + tax;
        return {
          total: currencyFormat(total),
          subtotal: currencyFormat(subtotal),
          tax: currencyFormat(tax),
        };
      },
    }),
    {
      name: "cart-storage",
      // // Keeps just the important
      // partialize: (state) => ({ products: state.products }),
      // version: 1,
    }
  )
);

export default useCartStore;
