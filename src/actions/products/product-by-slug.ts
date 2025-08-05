"use server";

import prisma from "@/lib/prisma";

interface Props {
  slug: string;
}

export async function getProductBySlug({ slug }: Props) {
  if (!slug) {
    throw new Error("Provide the slug");
  }

  try {
    const product = await prisma.product.findFirst({
      include: {
        ProductImage: {
          select: {
            url: true,
          },
        },
        sizes: true,
      },
      where: {
        slug,
      },
    });

    if (!product) {
      return null;
    }
    const { ProductImage, categoryId, ...rest } = product;

    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    return {
      ...rest,
      images: ProductImage.map(({ url }) => url),
      category: category?.name || "",
    };
  } catch (error) {
    console.error(error);
  }
}
