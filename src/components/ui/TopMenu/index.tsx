"use client";

import { AllowedCategories } from "@/interfaces/category";
import { cn } from "@/lib/utils";
import useUiStore from "@/store/ui";
import { PATHS } from "@/utils/paths";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5";

const TopMenu = () => {
  const { setSidebarOpened } = useUiStore();
  const pathName = usePathname();
  const currentCategory = pathName.includes("category")
    ? pathName.split("/").at(-1)
    : "";

  return (
    <nav
      className="flex justify-around py-4 bg-white/95
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10 h-16"
    >
      <div className="flex items-center">
        <Link href="/" className="cursor-pointer text-2xl text-black font-bold">
          os-commerce
        </Link>
      </div>

      <div className="items-center hidden space-x-8 md:flex">
        {AllowedCategories.map((category) => (
          <Link
            key={category}
            href={PATHS.category(category)}
            className={cn(
              "flex text-gray-600 hover:text-orange-500 cursor-pointer transition-colors duration-300 capitalize",
              {
                "text-orange-500": currentCategory === category,
                "font-bold": currentCategory === category,
              }
            )}
          >
            {category}
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

        <Link
          href={PATHS.cart}
          className="relative flex items-center justify-center p-2 "
        >
          <IoCartOutline color="black" size={20} />
          {/* {items > 0 && ( */}
          <span className="absolute top-0 right-0 bg-orange-500 text-white font-bold rounded-full px-1 text-xs">
            {/* {items} */}3
          </span>
          {/* )} */}
        </Link>

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
