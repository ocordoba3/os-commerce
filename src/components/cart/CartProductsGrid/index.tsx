"use client";

import { usePathname } from "next/navigation";
import ProductItem from "../CartProductItem";
import { Product } from "@/interfaces/products";
import { PATHS } from "@/utils/paths";
import { cn } from "@/lib/utils";

interface Props {
  products: Product[];
}

const CartProductsGrid = ({ products }: Props) => {
  const path = usePathname();
  const isCartView = path === PATHS.cart;

  return (
    <div
      className={cn("w-full flex flex-wrap gap-8 place-content-start", {
        "md:w-2/5": !isCartView,
        "order-1": !isCartView,
        "md:order-2": !isCartView,
      })}
    >
      {products.map((product) => (
        <ProductItem key={product.title} product={product} />
      ))}
    </div>
  );
};

export default CartProductsGrid;
