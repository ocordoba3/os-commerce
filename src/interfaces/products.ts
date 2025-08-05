import { Product, Size, SizeQuantity } from "@/generated/prisma";

export interface SeedData {
  categories: ValidCategories[];
  products: Product[];
}

export interface CartProduct {
  size: Size | null;
  quantity: number;
  productId: string;
  slug: string;
  price: number;
  title: string;
  image: string;
}

export type ProductObj = Product & { images: string[]; sizes: SizeQuantity[] };

export type ValidCategories = "shirts" | "pants" | "hoodies" | "hats";
