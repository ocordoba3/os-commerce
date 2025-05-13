import React from "react";
import ProductItem from "../ProductItem";
import { Product } from "@/interfaces/products";

interface Props {
  products: Product[];
}

const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]">
      {products.map((product) => (
        <ProductItem key={product.title} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
