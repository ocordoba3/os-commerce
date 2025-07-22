import ProductsGrid from "@/components/products/ProductsGrid";
import Title from "@/components/ui/Title";
import { AllowedGenders, GenderType } from "@/interfaces/category";
import { initialProducts } from "@/seed/seed";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: GenderType };
}

const CategoryById = async ({ params }: Props) => {
  const { id } = await params;

  if (!AllowedGenders.includes(id)) {
    notFound();
  }

  const products = initialProducts.products.filter(
    (product) => product.gender === id
  );

  return (
    <div>
      <Title title={id} subtitle={`Check all the ${id} products`} />
      <ProductsGrid products={products} />
    </div>
  );
};

export default CategoryById;
