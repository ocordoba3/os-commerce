import { Product } from "@/interfaces/products";
import { PATHS } from "@/utils/paths";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  product: Product;
}

const ProductItem = ({ product }: Props) => {
  return (
    <Link
      className="flex flex-col text-gray-700 bg-clip-border w-80 h-96 place-self-center hover:shadow-sm hover:p-2 transition-all"
      href={PATHS.product(product.slug)}
    >
      <div className="group">
        <Image
          width={500}
          height={500}
          src={`/products/${product.images[0]}`}
          alt={product.title}
          className="group object-cover w-full group-hover:hidden fadeIn transition-all"
        />
        <Image
          width={500}
          height={500}
          src={`/products/${product.images[1]}`}
          alt={product.title}
          className="hidden object-cover w-full group-hover:block fade-in transition-all"
          priority={false}
        />
      </div>
      <div className="mt-4">
        <p className="block text-base antialiased font-medium leading-relaxed text-gray-900 !line-clamp-1">
          {product.title}
        </p>
        <p className="block text-base antialiased font-bold leading-relaxed text-gray-900">
          $ {product.price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;
