"use client";

import { IoCartOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Gender } from "@/generated/prisma";
import { PATHS } from "@/utils/paths";
import useUiStore from "@/store/ui";
import { cn } from "@/lib/utils";
import { genders } from "@/utils/consts";
import useCartStore from "@/store/cart";
import { useEffect, useState } from "react";
import { Skeleton } from "../Skeleton";

const TopMenu = () => {
  const { setSidebarOpened } = useUiStore();
  const { getProductsQuantity } = useCartStore();
  const productsQuantity = getProductsQuantity();
  const pathName = usePathname();
  const [loading, setLoading] = useState(true);
  const currentCategory: Gender | undefined = pathName.includes("gender")
    ? (pathName.split("/").at(-1) as Gender)
    : undefined;

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <nav
      className="flex justify-between py-4 bg-white/95
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10 h-16 px-8 md:px-28 2xl:px-[22rem]"
    >
      <div className="flex items-center">
        <Link href="/" className="cursor-pointer text-2xl text-black font-bold">
          os-commerce
        </Link>
      </div>

      <div className="items-center hidden space-x-8 md:flex">
        {genders.map((gender) => (
          <Link
            key={gender}
            href={PATHS.gender(gender)}
            className={cn(
              "flex text-gray-600 hover:text-orange-500 cursor-pointer transition-colors duration-300 capitalize",
              {
                "text-orange-500": currentCategory === gender,
                "font-bold": currentCategory === gender,
              }
            )}
          >
            {gender}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-5">
        <Link
          href={PATHS.search}
          className="flex hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
        >
          <IoSearchOutline color="black" />
        </Link>

        {loading ? (
          <Skeleton className="w-6 h-6 p-2" />
        ) : (
          <Link
            href={PATHS.cart}
            className="relative flex items-center justify-center p-2 "
          >
            <IoCartOutline color="black" size={20} />
            {productsQuantity > 0 && (
              <span className="absolute top-0 right-0 bg-orange-500 text-white font-bold rounded-full px-1 text-xs">
                {productsQuantity}
              </span>
            )}
          </Link>
        )}

        <button
          onClick={() => setSidebarOpened()}
          className="hover:text-orange-500 cursor-pointer"
        >
          <IoMenuOutline size={28} color="black" />
        </button>
      </div>
    </nav>
  );
};

export default TopMenu;
