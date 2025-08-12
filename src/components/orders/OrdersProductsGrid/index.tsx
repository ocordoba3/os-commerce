"use client";

import useCartStore from "@/store/cart";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/Skeleton";
import EmptyCart from "@/components/cart/EmptyCart";
import CartProductItem from "@/components/cart/CartProductItem";

const OrdersProductsGrid = () => {
  const { products, getProductsTotal, getProductsQuantity } = useCartStore();
  const { tax, total, subtotal } = getProductsTotal(0.1); // 0.1 equals 10% tax
  const productsQuantity = getProductsQuantity();
  const [loading, setLoading] = useState(true);

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
    <section className="grid md:grid-cols-[65%_auto] gap-8 max-w-full px-0">
      <div className="w-full flex flex-wrap gap-8 place-content-start">
        {products.map((product) => (
          <CartProductItem
            key={`${product.slug}-${product.size}`}
            product={structuredClone(product)}
          />
        ))}
      </div>
      <article className="w-full bg-orange-100 p-8 shadow-md box-border h-fit">
        <h2 className="font-bold text-2xl mb-4">Summary</h2>

        <div className="flex w-full justify-between mb-2 text-lg">
          <span>
            Subtotal{" "}
            <small className="text-xs">{productsQuantity} item(s)</small>
          </span>
          <span>{subtotal}</span>
        </div>
        <div className="flex w-full justify-between mb-2 text-lg">
          <span>Discount</span>
          <span>$0.00</span>
        </div>
        <div className="flex w-full justify-between text-lg">
          <span>Tax</span>
          <span>{tax}</span>
        </div>

        <div className="w-full border border-gray-300 my-2"></div>

        <div className="flex w-full justify-between text-lg mb-2">
          <span>Total</span>
          <span>{total}</span>
        </div>
      </article>
    </section>
  );
};

export default OrdersProductsGrid;
