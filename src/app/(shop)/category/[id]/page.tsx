import { AllowedCategories, CategoriesType } from "@/interfaces/category";
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

  return <div>CategoryById</div>;
};

export default CategoryById;
