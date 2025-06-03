import CartProductsGrid from "@/components/cart/CartProductsGrid";
import { Button } from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { initialProducts } from "@/utils/seed";
import { ForwardIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  return (
    <div>
      <Title title="Cart" subtitle="Check all your products" />
      <div className="w-full flex justify-end my-2">
        <Link
          href="/"
          className="text-orange-600 hover:text-orange-700 transition-all flex"
        >
          Continue shopping <ForwardIcon className="ml-2" />
        </Link>
      </div>
      <section className="grid md:grid-cols-[65%_auto] gap-8 max-w-full">
        <CartProductsGrid products={[initialProducts[0], initialProducts[2]]} />

        <article className="w-full bg-orange-100 p-8 shadow-md box-border">
          <h2 className="font-bold text-2xl mb-4">Summary</h2>

          <div className="flex w-full justify-between mb-2 text-lg">
            <span>
              Subtotal <small className="text-xs">1 item(s)</small>
            </span>
            <span>$35.00</span>
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

          <Button>Checkout</Button>
        </article>
      </section>
    </div>
  );
};

export default CartPage;
