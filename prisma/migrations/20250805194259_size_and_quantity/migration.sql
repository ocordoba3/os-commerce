/*
  Warnings:

  - You are about to drop the column `inStock` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `sizes` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "inStock",
DROP COLUMN "sizes";

-- CreateTable
CREATE TABLE "SizeQuantity" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "size" "Size" NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "SizeQuantity_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SizeQuantity_productId_idx" ON "SizeQuantity"("productId");

-- AddForeignKey
ALTER TABLE "SizeQuantity" ADD CONSTRAINT "SizeQuantity_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
