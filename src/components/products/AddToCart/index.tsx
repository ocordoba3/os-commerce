"use client";

import { Button } from "@/components/ui/Button";
import QuantitySelector from "../QuantitySelector";
import SizeSelector from "../SizeSelector";
import { useState } from "react";
import { CartProduct } from "@/interfaces/products";
import { SizeQuantity } from "@/generated/prisma";

interface Props {
  product: CartProduct;
  sizes: SizeQuantity[];
}

const AddToCart = ({ product, sizes }: Props) => {
  const [selection, setSelection] = useState<CartProduct>(product);

  function handleAddCart() {
    console.log(selection);
  }

  return (
    <>
      <SizeSelector
        productSizes={sizes}
        selection={selection}
        setSelection={setSelection}
      />
      <QuantitySelector
        selection={selection}
        setSelection={setSelection}
        sizes={sizes}
      />
      <Button
        className="bg-orange-400 hover:bg-orange-500 disabled:bg-orange-200 disabled:text-gray-500 disabled:cursor-not-allowed"
        disabled={!selection.size}
        onClick={handleAddCart}
      >
        Add to cart
      </Button>
    </>
  );
};

export default AddToCart;
