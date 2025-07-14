import Breadcrumb from "@/components/products/Breadcrumb";
import QuantitySelector from "@/components/products/QuantitySelector";
import Reviews from "@/components/products/Reviews";
import SizeSelector from "@/components/products/SizeSelector";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/Carousel";
import { initialProducts } from "@/utils/seed";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: { slug: string };
}

const ProductByIdPage = async ({ params }: Props) => {
  const { slug } = await params;
  const product = await initialProducts.find(
    (product) => product.slug === slug
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white flex flex-wrap px-0 md:px-20 2xl:px-80">
      <Breadcrumb gender={product.gender} type={product.type} />

      <div className="w-full md:w-3/5 pt-8 flex justify-center">
        <Carousel className="w-full flex justify-center">
          <CarouselContent>
            {product.images.map((image, idx) => (
              <CarouselItem className="p-0 flex justify-center" key={idx}>
                <Image
                  key={idx}
                  src={`/products/${image}`}
                  alt={`${product.title} ${idx}`}
                  width={1000}
                  height={1000}
                  quality={100}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </div>

      <div className="w-full md:w-2/5 pt-8 md:pl-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          {product.title}
        </h1>
        <Reviews />
        <div className="space-y-6">
          <p className="text-sm text-gray-700">{product.description}</p>
        </div>

        <div className="mt-4 lg:row-span-3">
          <h2 className="sr-only">Price</h2>
          <p className="text-5xl tracking-tight text-gray-900">
            ${product.price}
          </p>
          <QuantitySelector productId={product.slug} />
          <SizeSelector productId={product.slug} productSizes={product.sizes} />
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductByIdPage;
