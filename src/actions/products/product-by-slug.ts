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
      },
      where: {
        slug,
      },
    });

    if (!product) {
      return null;
    }

    const { ProductImage, ...rest } = product;

    return { ...rest, images: ProductImage.map(({ url }) => url) };
  } catch (error) {
    console.error(error);
  }
}
