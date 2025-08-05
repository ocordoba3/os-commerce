import { initialProducts } from "./seed";
import prisma from "../lib/prisma";
import { SizeQuantity } from "../generated/prisma";

async function main() {
  const { categories, products } = initialProducts;
  // 1. Remove previous registers
  await Promise.all([
    prisma.category.deleteMany(),
    prisma.product.deleteMany(),
    prisma.productImage.deleteMany(),
    prisma.sizeQuantity.deleteMany(),
  ]);

  // 2. Insert categories
  const initialCategories = categories.map((name) => ({
    name,
  }));
  await prisma.category.createMany({
    data: initialCategories,
  });

  // 3. Insert Products
  const categoriesDB = await prisma.category.findMany();
  products.forEach(async (product) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { category, images, sizes, ...rest } = product;

    const categoryExists = categoriesDB.find(
      (categoryDB) =>
        categoryDB.name.toLowerCase() === product.category.toLowerCase()
    );

    const productDB = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoryExists?.id || "",
      },
    });

    images.forEach(async (url: string) => {
      await prisma.productImage.create({
        data: {
          url,
          productId: productDB.id,
        },
      });
    });

    sizes.forEach(async (size: SizeQuantity) => {
      await prisma.sizeQuantity.create({
        data: {
          ...size,
          productId: productDB.id,
        },
      });
    });
  });

  console.log("Seed executed");
}

(() => {
  if (process.env.NODE_ENV === "production") {
    return;
  }
  main();
})();
