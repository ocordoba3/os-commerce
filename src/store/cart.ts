import { CartProduct } from "@/interfaces/products";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  products: CartProduct[];
  productsQuantity: number;
  addCartProduct: (product: CartProduct) => void;
  getProductsQuantity: () => void;
};

const useCartStore = create<Store>()(
  persist(
    (set) => ({
      products: [],
      productsQuantity: 0,
      getProductsQuantity: () => {
        set((state) => ({
          ...state,
          productsQuantity: state.products.reduce(
            (acc, prod) => acc + prod.quantity,
            0
          ),
        }));
      },
      addCartProduct: (product) =>
        set((state) => {
          let newProducts = [];
          const productExists = state.products.some(
            (prod) =>
              prod.productId === product.productId && prod.size === product.size
          );
          if (!productExists) {
            newProducts = [...state.products, product];
          } else {
            newProducts = state.products.filter((prod) => {
              if (
                prod.productId === product.productId &&
                prod.size === product.size
              ) {
                return { ...prod, quantity: prod.quantity + 1 };
              }
              return prod;
            });
          }

          return { ...state, products: newProducts };
        }),
    }),
    { name: "cart-storage" }
  )
);

export default useCartStore;
