"use client";

import { Button } from "@/components/ui/Button";
import { SizeOpts, SizesType } from "@/interfaces/products";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  productId: string;
  productSizes: SizesType[];
}

const SizeSelector = ({ productSizes }: Props) => {
  const [selectedSize, setSelectedSize] = useState<SizesType | null>(null);
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
          {SizeOpts.map((size) => {
            const isAllowedSize = productSizes.includes(size);
            return (
              <Button
                key={size}
                onClick={() =>
                  setSelectedSize(size === selectedSize ? null : size)
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
