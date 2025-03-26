import { CategoriesType } from "./category";

export interface Product {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: SizesType[];
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  gender: CategoriesType;
  //   id: string;
}

export type SizesType = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type ValidTypes = "shirts" | "pants" | "hoodies" | "hats";
