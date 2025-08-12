"use client";

import AddToCart from "@/components/products/AddToCart";
import { Button } from "@/components/ui/Button";
import { Size } from "@/generated/prisma";
import { CartProduct } from "@/interfaces/products";
import useCartStore from "@/store/cart";
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
  const { removeCartProduct, getProductsQuantity } = useCartStore();
  const isCartView = path === PATHS.cart;

  function handleRemove() {
    removeCartProduct(product.productId, product.size as Size);
    getProductsQuantity();
  }

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-[30%_70%] text-gray-700 bg-clip-border items-center bg-gray-50">
      <Link className="flex justify-center" href={PATHS.product(product.slug)}>
        <Image
          quality={100}
          width={160}
          height={160}
          src={`/products/${product.image}`}
          alt={product.title}
          className="object-cover fadeIn transition-all w-fit md:w-full"
        />
      </Link>
      <div className="w-full h-auto grid gap-0 p-2 lg:p-4">
        <h2 className=" antialiased leading-relaxed !line-clamp-1">
          {product.title}
        </h2>
        <p className="w-full text-sm text-gray-900 h-fit">
          Price: <b className="font-lg">${product.price * product.quantity}</b>
        </p>
        <p className="w-full text-sm text-gray-900 h-fit">
          Size: <b className="font-lg">{product.size}</b>
        </p>
        {!isCartView && (
          <p className="w-full text-sm text-gray-900 h-fit">
            Quantity: <b className="font-lg">{product.quantity}</b>
          </p>
        )}

        {isCartView && (
          <AddToCart product={product} sizes={product.allowedSizes} />
        )}

        {isCartView && (
          <Button
            onClick={handleRemove}
            className="p-0 text-sm text-gray-600 underline cursor-pointer self-end h-fit bg-transparent w-fit border-none hover:bg-transparent hover:text-orange-700 shadow-none"
          >
            Remove
          </Button>
        )}
      </div>
    </section>
  );
};

export default CartProductItem;
