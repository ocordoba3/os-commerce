import { GenderType } from "@/interfaces/category";

export const PATHS = {
  category: (category: GenderType) => `/category/${category}`,
  product: (slug: string) => `/products/${slug}`,
  cart: "/cart",
  search: "/search",
  checkout: "/checkout",
  orders: "/orders",
  ordersById: (id: string) => `/orders/${id}`,
};
