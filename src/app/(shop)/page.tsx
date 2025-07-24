export const revalidate = 360;

import { getProductsList } from "@/actions/products/products-list";
import ProductsGrid from "@/components/products/ProductsGrid";
import Pagination from "@/components/ui/Pagination";
import Title from "@/components/ui/Title";
import { redirect } from "next/navigation";

interface Props {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
}

export default async function ShopPage({ searchParams }: Props) {
  const data = await getProductsList((await searchParams) || {});

  if (data?.products.length === 0) {
    redirect("/");
  }

  return (
    <div>
      <Title title="Home" subtitle="Check all our products" />
      <ProductsGrid products={data?.products || []} />
      <Pagination totalPages={data?.totalPages || 0} />
    </div>
  );
}
