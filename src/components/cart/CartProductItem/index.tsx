import QuantitySelector from "@/components/products/QuantitySelector";
import { Product } from "@/interfaces/products";
import { PATHS } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

const CartProductItem = ({ product }: Props) => {
  return (
    <section className="flex flex-wrap justify-center md:flex-nowrap text-gray-700 bg-clip-border w-full place-self-center gap-8 bg-gray-50 p-4">
      <div className="w-[10rem]">
        <Link href={PATHS.product(product.slug)}>
          <Image
            quality={100}
            width={160}
            height={160}
            src={`/products/${product.images[0]}`}
            alt={product.title}
            className="object-cover fadeIn transition-all w-full"
          />
        </Link>
      </div>
      <div className="w-full h-auto grid gap-0">
        <div className="flex justify-between text-xl text-gray-900">
          <h2 className="w-4/5 antialiased leading-relaxed !line-clamp-1">
            {product.title}
          </h2>
          <span className="w-auto">${product.price}</span>
        </div>
        <p className="w-full text-sm text-gray-900 h-fit">
          Size: <b className="font-lg">M</b>
        </p>

        <QuantitySelector productId={product.slug} />

        <p className="w-full text-sm text-gray-600 underline cursor-pointer self-end h-fit">
          Remove
        </p>
      </div>
    </section>
  );
};

export default CartProductItem;
