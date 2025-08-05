"use client";

import { Button } from "@/components/ui/Button";
import { Size, SizeQuantity } from "@/generated/prisma";
import { CartProduct } from "@/interfaces/products";
import { cn } from "@/lib/utils";
import { sizes } from "@/utils/consts";
import { Dispatch, SetStateAction } from "react";

interface Props {
  productSizes: SizeQuantity[];
  selection: CartProduct;
  setSelection: Dispatch<SetStateAction<CartProduct>>;
}

const SizeSelector = ({ productSizes, selection, setSelection }: Props) => {
  const selectedSize = selection.size;

  function handleChange(value: Size | null) {
    setSelection((prev) => ({ ...prev, size: value }));
  }

  return (
    <div className="my-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">Size</h3>
        <a
          href="#"
          className="text-sm font-medium text-orange-600 hover:text-orange-500"
        >
          Size guide
        </a>
      </div>

      <fieldset aria-label="Choose a size" className="mt-4">
        <div className="grid grid-cols-4 gap-4">
          {sizes.map((size) => {
            const isAllowedSize = productSizes.some(
              (pSize) => pSize.size === size
            );
            return (
              <Button
                key={size}
                onClick={() =>
                  handleChange(size === selectedSize ? null : size)
                }
                className={cn(
                  "group relative bg-white text-black flex place-content-center rounded-md border p-2 text-sm font-medium uppercase",
                  {
                    "bg-gray-50": !isAllowedSize,
                    "hover:bg-gray-50": !isAllowedSize,
                    "cursor-not-allowed": !isAllowedSize,
                    "text-gray-200": !isAllowedSize,
                    "hover:bg-gray-100": isAllowedSize && size !== selectedSize,
                    "hover:bg-orange-200":
                      isAllowedSize && size === selectedSize,
                    "cursor-pointer": isAllowedSize,
                    "bg-orange-200": size === selectedSize,
                  }
                )}
              >
                <span>{size}</span>
                {!isAllowedSize && (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                  >
                    <svg
                      className="absolute inset-0 size-full stroke-2 text-gray-200"
                      viewBox="0 0 100 100"
                      preserveAspectRatio="none"
                      stroke="currentColor"
                    >
                      <line
                        x1="0"
                        y1="100"
                        x2="100"
                        y2="0"
                        vectorEffect="non-scaling-stroke"
                      />
                    </svg>
                  </span>
                )}
              </Button>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};

export default SizeSelector;
