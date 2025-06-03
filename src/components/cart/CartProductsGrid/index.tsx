import React from "react";
import ProductItem from "../CartProductItem";
import { Product } from "@/interfaces/products";

interface Props {
  products: Product[];
}

const CartProductsGrid = ({ products }: Props) => {
  return (
    <div className="flex flex-wrap gap-8">
      {products.map((product) => (
        <ProductItem key={product.title} product={product} />
      ))}
    </div>
  );
};

export default CartProductsGrid;
