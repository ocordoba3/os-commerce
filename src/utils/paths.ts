import { CategoriesType } from "@/interfaces/category";

export const PATHS = {
  category: (category: CategoriesType) => `/category/${category}`,
  product: (slug: string) => `/products/${slug}`,
  cart: "/cart",
  search: "/search",
  checkout: "/checkout",
  orders: "/orders",
  ordersById: (id: string) => `/orders/${id}`,
};
