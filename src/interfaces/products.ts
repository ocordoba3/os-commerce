import { Gender, Size } from "@/generated/prisma";

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
  sizes: Size[];
  slug: string;
  tags: string[];
  title: string;
  id: string;
}

export type ValidCategories = "shirts" | "pants" | "hoodies" | "hats";
