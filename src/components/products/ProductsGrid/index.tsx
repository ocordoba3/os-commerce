import React from "react";
import ProductItem from "../ProductItem";
import { Product } from "@/interfaces/products";

interface Props {
  products: Product[];
}

const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 items-center gap-8">
      {products.map((product) => (
        <ProductItem key={product.title} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
