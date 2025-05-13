import Breadcrumb from "@/components/products/Breadcrumb";
import Reviews from "@/components/products/Reviews";
import { Button } from "@/components/ui/Button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/Carousel";
import { SizeOpts } from "@/interfaces/products";
import { initialProducts } from "@/utils/seed";
import clsx from "clsx";
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
  console.log(product);
  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white p-6 flex flex-wrap">
      <Breadcrumb gender={product.gender} type={product.type} />

      <div className="w-full md:w-3/5 pt-8 pr-4 flex justify-center">
        <Carousel className="w-[85%] flex justify-center">
          <CarouselContent>
            {product.images.map((image, idx) => (
              <CarouselItem key={idx}>
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
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div className="w-full md:w-2/5 pt-8">
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

          <div className="my-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-900">Size</h3>
              <a
                href="#"
                className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                Size guide
              </a>
            </div>

            <fieldset aria-label="Choose a size" className="mt-4">
              <div className="grid grid-cols-4 gap-4">
                {SizeOpts.map((size) => {
                  const isAllowedSize = product.sizes.includes(size);
                  return (
                    <div key={size}>
                      <label
                        className={clsx(
                          "group relative flex place-content-center rounded-md border p-2 text-sm font-medium uppercase",
                          {
                            "bg-gray-50": !isAllowedSize,
                            "cursor-not-allowed": !isAllowedSize,
                            "text-gray-200": !isAllowedSize,
                            "hover:bg-gray-100": isAllowedSize,
                            "cursor-pointer": isAllowedSize,
                          }
                        )}
                      >
                        <input
                          type="radio"
                          name="size-choice"
                          value={size}
                          disabled
                          className="sr-only"
                        />
                        <span>{size}</span>
                        {!isAllowedSize && (
                          <span
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                          >
                            <svg
                              className="absolute inset-0 size-full stroke-2 text-gray-200"
                              viewBox="0 0 100 100"
                              preserveAspectRatio="none"
                              stroke="currentColor"
                            >
                              <line
                                x1="0"
                                y1="100"
                                x2="100"
                                y2="0"
                                vectorEffect="non-scaling-stroke"
                              />
                            </svg>
                          </span>
                        )}
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          </div>

          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductByIdPage;
