import ProductsGrid from "@/components/products/ProductsGrid";
import Title from "@/components/ui/Title";
import { AllowedCategories, CategoriesType } from "@/interfaces/category";
import { initialProducts } from "@/utils/seed";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { id: CategoriesType };
}

const CategoryById = async ({ params }: Props) => {
  const { id } = await params;

  if (!AllowedCategories.includes(id)) {
    notFound();
  }

  const products = initialProducts.filter((product) => product.gender === id);

  return (
    <div>
      <Title title={id} subtitle={`Check all the ${id} products`} />
      <ProductsGrid products={products} />
    </div>
  );
};

export default CategoryById;
