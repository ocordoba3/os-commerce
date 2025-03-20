import { CategoriesType } from "@/interfaces/category";

export const PATHS = {
  category: (category: CategoriesType) => `/category/${category}`,
  cart: "/cart",
  search: "/search",
};
