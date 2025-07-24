import { Gender } from "@/generated/prisma";

export const PATHS = {
  gender: (category: Gender) => `/category/${category}`,
  product: (slug: string) => `/products/${slug}`,
  cart: "/cart",
  search: "/search",
  checkout: "/checkout",
  orders: "/orders",
  ordersById: (id: string) => `/orders/${id}`,
};
