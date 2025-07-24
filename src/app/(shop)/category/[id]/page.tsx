import { getProductsList } from "@/actions/products/products-list";
import ProductsGrid from "@/components/products/ProductsGrid";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import { Gender } from "@/generated/prisma";
import { notFound } from "next/navigation";

interface Props {
  params: { id: Gender };
  searchParams: {
    page?: string;
    limit?: string;
  };
}

const CategoryById = async ({ params, searchParams }: Props) => {
  const { id } = await params;
  const genders = Object.values(Gender);

  if (genders && !genders?.includes(id)) {
    notFound();
  }

  const search = await searchParams;
  const allParams = {
    ...search,
    gender: id,
  };
  const data = await getProductsList(allParams);

  return (
    <div>
      <Title title={id} subtitle={`Check all the ${id} products`} />
      <ProductsGrid products={data?.products || []} />
      <Pagination totalPages={data?.totalPages || 0} />
    </div>
  );
};

export default CategoryById;
