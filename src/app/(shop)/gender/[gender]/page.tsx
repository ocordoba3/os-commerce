export const revalidate = 360;

import { getProductsList } from "@/actions/products/products-list";
import ProductsGrid from "@/components/products/ProductsGrid";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import { Gender } from "@/generated/prisma";
import { genders } from "@/utils/consts";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ gender: Gender }>;
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
}

const GenderByName = async ({ params, searchParams }: Props) => {
  const { gender } = await params;

  if (!genders.includes(gender)) {
    notFound();
  }

  const search = await searchParams;
  const allParams = {
    ...search,
    gender,
  };
  const data = await getProductsList(allParams);

  return (
    <div>
      <Title title={gender} subtitle={`Check all the ${gender} products`} />
      <ProductsGrid products={data?.products || []} />
      <Pagination totalPages={data?.totalPages || 0} />
    </div>
  );
};

export default GenderByName;
