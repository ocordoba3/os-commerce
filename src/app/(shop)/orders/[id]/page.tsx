import CartProductsGrid from "@/components/cart/CartProductsGrid";
import OrdersAccordion from "@/components/orders/OrdersAccordion";

import Title from "@/components/ui/Title";
import { PATHS } from "@/utils/paths";
import { initialProducts } from "@/seed/seed";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Order Detail",
  description: "Check your order details",
};

const OrderByIdPage = () => {
  return (
    <>
      <div className="w-full fle mb-4 px-0 md:px-20 2xl:px-80">
        <Link
          href={PATHS.orders}
          className="text-orange-600 hover:text-orange-700 transition-all flex"
        >
          <ArrowLeft className="mr-2" /> Orders list
        </Link>
      </div>
      <Title title="Order #1" subtitle="Checkout your order details" />
      <section className="flex flex-wrap sm:flex-nowrap gap-8 w-full px-0 md:px-20 2xl:px-80">
        <OrdersAccordion />
        <CartProductsGrid
          products={[initialProducts.products[0], initialProducts.products[2]]}
        />
      </section>
    </>
  );
};

export default OrderByIdPage;
