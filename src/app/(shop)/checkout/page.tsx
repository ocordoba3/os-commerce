import CartProductsGrid from "@/components/cart/CartProductsGrid";
import CheckoutAccordion from "@/components/checkout/CheckoutAccordion";

import Title from "@/components/ui/Title";
import { PATHS } from "@/utils/paths";
import { initialProducts } from "@/utils/seed";
import { ForwardIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Validate all your products before the payment",
};

const CheckoutPage = () => {
  return (
    <>
      <Title title="Checkout" subtitle="Checkout your products" />
      <div className="w-full flex md:justify-end my-2 px-0 md:px-20 2xl:px-80">
        <Link
          href={PATHS.cart}
          className="text-orange-600 hover:text-orange-700 transition-all flex"
        >
          Edit cart <ForwardIcon className="ml-2" />
        </Link>
      </div>
      <section className="flex flex-wrap sm:flex-nowrap gap-8 w-full px-0 md:px-20 2xl:px-80">
        <CheckoutAccordion />
        <CartProductsGrid products={[initialProducts[0], initialProducts[2]]} />
      </section>
    </>
  );
};

export default CheckoutPage;
