"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";

interface Props {
  productId: string;
}

const QuantitySelector = ({}: Props) => {
  const [quantity, setQuantity] = useState(0);

  function handleChange(value: number) {
    if ((value === -1 && quantity <= 1) || (value === 1 && quantity === 5)) {
      return;
    }
    setQuantity((prev) => prev + value);
  }
  return (
    <div className="my-4 w-full">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Quantity</h3>
      </div>

      <div className="grid grid-cols-[auto_4rem_auto] gap-2 w-fit mt-4">
        <Button onClick={() => handleChange(-1)}>
          <MinusIcon />
        </Button>
        <Input
          readOnly
          className="text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          type="number"
          value={quantity}
        />
        <Button onClick={() => handleChange(1)}>
          <PlusIcon />
        </Button>
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
