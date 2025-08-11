import CartProductsGrid from "@/components/cart/CartProductsGrid";
import Title from "@/components/ui/Title";
import { ForwardIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  return (
    <div>
      <Title title="Cart" subtitle="Check all your products" />
      <div className="w-full flex justify-end my-2 px-0 md:px-20 2xl:px-80">
        <Link
          href="/"
          className="text-orange-600 hover:text-orange-700 transition-all flex"
        >
          Continue shopping <ForwardIcon className="ml-2" />
        </Link>
      </div>
      <CartProductsGrid />
    </div>
  );
};

export default CartPage;
