import { Gender } from "@/generated/prisma";

export const PATHS = {
  gender: (gender: Gender) => `/gender/${gender}`,
  product: (slug: string) => `/products/${slug}`,
  cart: "/cart",
  search: "/search",
  checkout: "/checkout",
  orders: "/orders",
  ordersById: (id: string) => `/orders/${id}`,
};
