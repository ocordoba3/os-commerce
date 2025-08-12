import CheckoutAccordion from "@/components/checkout/CheckoutAccordion";

import Title from "@/components/ui/Title";
import { PATHS } from "@/utils/paths";
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
          className="text-orange-600 hover:text-orange-700 transition-all flex items-center"
        >
          Edit cart <ForwardIcon className="ml-2" />
        </Link>
      </div>
      <section className="flex flex-wrap sm:flex-nowrap gap-8 w-full px-0 md:px-20 2xl:px-80">
        <CheckoutAccordion />
      </section>
    </>
  );
};

export default CheckoutPage;
