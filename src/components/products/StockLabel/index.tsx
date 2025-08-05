"use client";

import { getProductInStock } from "@/actions/products/product-in-stock";
import { Skeleton } from "@/components/ui/Skeleton";
import { useEffect, useState } from "react";

interface Props {
  slug: string;
}

const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStock = async () => {
      setLoading(true);
      const result = await getProductInStock({ slug });
      setStock(result);
      setLoading(false);
    };
    fetchStock();
  }, [slug]);

  if (loading) {
    return <Skeleton className="mt-4 h-5 w-full rounded-lg" />;
  }

  if (!stock && !loading) {
    return <h1 className="mt-4 text-orange-700">Product out of stock</h1>;
  }

  return <h1 className="mt-4">Stock: {stock}</h1>;
};

export default StockLabel;
