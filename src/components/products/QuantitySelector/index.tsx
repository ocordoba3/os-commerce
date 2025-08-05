"use client";

import { Button } from "@/components/ui/Button";
import { SizeQuantity } from "@/generated/prisma";
import { CartProduct } from "@/interfaces/products";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface Props {
  sizes: SizeQuantity[];
  selection: CartProduct;
  setSelection: Dispatch<SetStateAction<CartProduct>>;
}

const QuantitySelector = ({ selection, setSelection, sizes }: Props) => {
  const { quantity, size: selectedSize } = selection;
  const maxQuantity =
    sizes.find(({ size }) => size === selectedSize)?.quantity || 0;

  const [isError, setIsError] = useState(false);

  function handleChange(value: number) {
    if (!selectedSize) {
      setIsError(true);
      return;
    }
    setIsError(false);
    if (
      (value === -1 && quantity <= 1) ||
      (value === 1 && quantity >= maxQuantity)
    ) {
      return;
    }
    setSelection((prev) => ({ ...prev, quantity: prev.quantity + value }));
  }

  useEffect(() => {
    setSelection((prev) => ({ ...prev, quantity: 1 }));
    setIsError(false);
  }, [selectedSize, setSelection]);

  return (
    <div className="w-full flex flex-wrap gap-4 items-center my-4">
      <div className="flex items-center">
        <h3 className="text-sm font-medium text-gray-900 w-fit">Quantity</h3>
      </div>

      <div className="gap-2 w-full items-center bg-white border border-gray-300 rounded-md px-2 grid grid-cols-[auto_auto_auto]">
        <>
          <Button
            disabled={quantity === 1}
            className="bg-transparent text-black !p-0 hover:text-orange-700 hover:bg-transparent shadow-none"
            onClick={() => handleChange(-1)}
          >
            <MinusIcon />
          </Button>
          <span className="px-2 text-center">{quantity}</span>
          <Button
            disabled={quantity === maxQuantity}
            className="bg-transparent text-black !p-0 hover:text-orange-700 hover:bg-transparent shadow-none"
            onClick={() => handleChange(1)}
          >
            <PlusIcon />
          </Button>
        </>
      </div>
      {quantity === maxQuantity && (
        <span className="text-xs text-orange-700 transition-all fade-in">
          There are {maxQuantity} item(s) in stock
        </span>
      )}
      {isError && (
        <span className="text-xs text-orange-700  transition-all fade-in">
          Select your size
        </span>
      )}
    </div>
  );
};

export default QuantitySelector;
