export const revalidate = 172800; // 2 days

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/Carousel";
import { getProductBySlug } from "@/actions/products/product-by-slug";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/products/Breadcrumb";
import Image from "next/image";
import Reviews from "@/components/products/Reviews";
import AddToCart from "@/components/products/AddToCart";
import { currencyFormat } from "@/utils/functions";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  const product = await getProductBySlug({ slug });
  const title = product?.title;
  const description = product?.description;

  return { title, description, openGraph: { title, description, images: [] } };
}

const ProductByIdPage = async ({ params }: Props) => {
  const { slug } = await params;
  const product = await getProductBySlug({ slug });

  if (!product) {
    return notFound();
  }

  return (
    <div className="bg-white flex flex-wrap px-0 md:px-20 2xl:px-80">
      <Breadcrumb gender={product.gender} slug={product.slug} />

      <div className="w-full md:w-3/5 pt-8 flex justify-center">
        <Carousel className="w-full flex justify-center">
          <CarouselContent>
            {product.images.map((url, idx) => (
              <CarouselItem className="p-0 flex justify-center" key={idx}>
                <Image
                  key={idx}
                  src={`/products/${url}`}
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
            {currencyFormat(product.price)}
          </p>
          <AddToCart
            product={{
              title: product.title,
              slug: product.slug,
              price: product.price,
              productId: product.id,
              size: null,
              quantity: 1,
              image: product.images[0],
              allowedSizes: product.sizes,
            }}
            sizes={product.sizes}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductByIdPage;
