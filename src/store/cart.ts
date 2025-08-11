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
            (stateProd) =>
              stateProd.productId === product.productId &&
              stateProd.size === product.size
          );
          if (!productExists) {
            newProducts = [...state.products, product];
          } else {
            newProducts = state.products.map((stateProd) => {
              if (
                stateProd.productId === product.productId &&
                stateProd.size === product.size
              ) {
                return { ...stateProd, quantity: product.quantity };
              }
              return stateProd;
            });
          }

          return { ...state, products: newProducts };
        }),
    }),
    { name: "cart-storage" }
  )
);

export default useCartStore;
