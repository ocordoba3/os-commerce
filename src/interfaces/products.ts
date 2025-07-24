import { Gender } from "@/generated/prisma";

export interface SeedData {
  categories: ValidCategories[];
  products: Product[];
}

export interface Product {
  category: ValidCategories;
  description: string;
  gender: Gender;
  images: string[];
  inStock: number;
  price: number;
  sizes: SizesType[];
  slug: string;
  tags: string[];
  title: string;
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
export type ValidCategories = "shirts" | "pants" | "hoodies" | "hats";
