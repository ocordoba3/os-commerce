"use server";

import prisma from "@/lib/prisma";

interface Props {
  slug: string;
}

export async function getProductInStock({ slug }: Props) {
  try {
    if (!slug) {
      throw new Error("Provide the slug");
    }

    const product = await prisma.product.findFirst({
      select: {
        inStock: true,
      },
      where: {
        slug,
      },
    });

    if (!product) {
      return 0;
    }

    return product.inStock;
  } catch {
    return 0;
  }
}
