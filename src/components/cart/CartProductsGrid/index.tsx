"use client";

import { usePathname } from "next/navigation";
import ProductItem from "../CartProductItem";
import { PATHS } from "@/utils/paths";
import { cn } from "@/lib/utils";
import useCartStore from "@/store/cart";
import EmptyCart from "../EmptyCart";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/Skeleton";

const CartProductsGrid = () => {
  const { products, getProductsTotal } = useCartStore();
  const productsTotal = getProductsTotal();
  const [loading, setLoading] = useState(true);
  const path = usePathname();
  const isCartView = path === PATHS.cart;

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <Skeleton className="w-full h-80" />;
  }

  if (products.length === 0 && !loading) {
    return <EmptyCart />;
  }

  return (
    <section className="grid md:grid-cols-[65%_auto] gap-8 max-w-full px-0 md:px-20 2xl:px-80">
      <div
        className={cn("w-full flex flex-wrap gap-8 place-content-start", {
          "md:w-2/5": !isCartView,
          "order-1": !isCartView,
          "md:order-2": !isCartView,
        })}
      >
        {products.map((product) => (
          <ProductItem
            key={`${product.slug}-${product.size}`}
            product={structuredClone(product)}
          />
        ))}
      </div>
      <article className="w-full bg-orange-100 p-8 shadow-md box-border">
        <h2 className="font-bold text-2xl mb-4">Summary</h2>

        <div className="flex w-full justify-between mb-2 text-lg">
          <span>
            Subtotal <small className="text-xs">1 item(s)</small>
          </span>
          <span>${productsTotal}</span>
        </div>
        <div className="flex w-full justify-between mb-2 text-lg">
          <span>Shipping discount</span>
          <span>-$5.00</span>
        </div>
        <div className="flex w-full justify-between text-lg">
          <span>
            Tax <small className="text-xs">(Calculated at checkout)</small>
          </span>
          <span>-$5.00</span>
        </div>

        <div className="w-full border border-gray-300 my-8"></div>

        <Link
          href={PATHS.checkout}
          className="bg-black text-white hover:bg-black/90 transition-all flex cursor-pointer rounded-md text-sm font-medium px-4 py-2 justify-center"
        >
          Go to pay
        </Link>
      </article>
    </section>
  );
};

export default CartProductsGrid;
