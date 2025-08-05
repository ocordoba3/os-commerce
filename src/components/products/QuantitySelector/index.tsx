"use client";

import { Button } from "@/components/ui/Button";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  productId: string;
}

const QuantitySelector = ({}: Props) => {
  const [quantity, setQuantity] = useState(1);

  function handleChange(value: number) {
    if ((value === -1 && quantity === 1) || (value === 1 && quantity === 5)) {
      return;
    }
    setQuantity((prev) => prev + value);
  }

  return (
    <div className="w-full flex gap-4 items-center my-4">
      <div className="flex items-center">
        <h3 className="text-sm font-medium text-gray-900 w-fit">Quantity</h3>
      </div>

      <div className="gap-2 w-fit items-center bg-white border border-gray-300 rounded-md px-2 grid grid-cols-[auto_auto_auto]">
        <>
          <Button
            disabled={quantity === 1}
            className="bg-transparent text-black !p-0 hover:text-orange-700 hover:bg-transparent shadow-none"
            onClick={() => handleChange(-1)}
          >
            <MinusIcon />
          </Button>
          <span className="px-2">{quantity}</span>
          <Button
            disabled={quantity === 5}
            className="bg-transparent text-black !p-0 hover:text-orange-700 hover:bg-transparent shadow-none"
            onClick={() => handleChange(1)}
          >
            <PlusIcon />
          </Button>
        </>
      </div>
      {quantity === 5 && (
        <span className="text-xs text-red-500 transition-all fade-in">
          Maximum 5 items
        </span>
      )}
    </div>
  );
};

export default QuantitySelector;
