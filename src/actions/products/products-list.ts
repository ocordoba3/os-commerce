"use server";

import { Pagination } from "@/interfaces/pagination";
import { Product } from "@/interfaces/products";
import prisma from "@/lib/prisma";

export async function getProductsList({
  page = "1",
  limit = "12",
  gender,
}: Pagination) {
  let initialPage = Number(page);
  let initialLimit = Number(limit);

  if (isNaN(initialPage) || initialPage < 1) {
    initialPage = 1;
  }
  if (isNaN(initialLimit)) {
    initialLimit = 12;
  }

  try {
    // 1. Get products total
    const count = await prisma.product.count({ where: { gender } });

    // 2. Get paginated products
    const products = await prisma.product.findMany({
      take: initialLimit,
      skip: (initialPage - 1) * initialLimit,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      where: {
        gender,
      },
    });
    const mappedProducts: Product[] = products.map(
      ({ ProductImage, ...rest }) => ({
        ...rest,
        images: ProductImage.map(({ url }) => url),
        category: "hats",
      })
    );

    return {
      products: mappedProducts,
      count,
      page: initialPage,
      totalPages: Math.ceil(count / initialLimit),
    };
  } catch (error) {
    console.error(error);
  }
}
