"use client";

import AddToCart from "@/components/products/AddToCart";
import { CartProduct } from "@/interfaces/products";
import { PATHS } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  product: CartProduct;
}

const CartProductItem = ({ product }: Props) => {
  const path = usePathname();
  const isCartView = path === PATHS.cart;
  console.log("CartProductsGrid", product);

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-[30%_70%] text-gray-700 bg-clip-border items-center bg-gray-50">
      <Link href={PATHS.product(product.slug)}>
        <Image
          quality={100}
          width={160}
          height={160}
          src={`/products/${product.image}`}
          alt={product.title}
          className="object-cover fadeIn transition-all w-full"
        />
      </Link>
      <div className="w-full h-auto grid gap-0 p-2 lg:p-4">
        <h2 className=" antialiased leading-relaxed !line-clamp-1">
          {product.title}
        </h2>
        <p className="w-full text-sm text-gray-900 h-fit">
          Price: <b className="font-lg">${product.price}</b>
        </p>
        <p className="w-full text-sm text-gray-900 h-fit">
          Size: <b className="font-lg">M</b>
        </p>

        <AddToCart product={product} sizes={[]} />

        {isCartView && (
          <p className="w-full text-sm text-gray-600 underline cursor-pointer self-end h-fit">
            Remove
          </p>
        )}
      </div>
    </section>
  );
};

export default CartProductItem;
