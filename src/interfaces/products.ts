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

const SizeValues = {
  XS: "XS",
  S: "S",
  M: "M",
  L: "L",
  XL: "XL",
  XXL: "XXL",
  XXXL: "XXXL",
  XXXXL: "XXXXL",
} as const;

export const SizeOpts = Object.values(SizeValues);

export type SizesType = (typeof SizeOpts)[number];
export type ValidTypes = "shirts" | "pants" | "hoodies" | "hats";
