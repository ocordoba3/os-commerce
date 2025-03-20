import { PATHS } from "@/utils/paths";
import Link from "next/link";
import React from "react";
import { IoCartOutline, IoMenuOutline, IoSearchOutline } from "react-icons/io5";

const TopMenu = () => {
  return (
    <nav
      className="flex justify-around py-4 bg-white/80
            backdrop-blur-md shadow-md w-full
            fixed top-0 left-0 right-0 z-10 h-16"
    >
      <div className="flex items-center">
        <Link href="/" className="cursor-pointer text-2xl text-black font-bold">
          os-commerce
        </Link>
      </div>

      <div className="items-center hidden space-x-8 md:flex">
        <Link
          href={PATHS.category("men")}
          className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
        >
          Men
        </Link>

        <Link
          href={PATHS.category("women")}
          className="flex text-gray-600 
                    cursor-pointer transition-colors duration-300
                    font-semibold "
        >
          Women
        </Link>

        <Link
          href={PATHS.category("kids")}
          className="flex text-gray-600 hover:text-blue-500
                    cursor-pointer transition-colors duration-300"
        >
          Kids
        </Link>
      </div>

      <div className="flex items-center space-x-5">
        <Link
          href={PATHS.search}
          className="flex hover:text-blue-500
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
          <span className="absolute top-0 right-0 bg-orange-400 text-white font-bold rounded-full px-1 text-xs">
            {/* {items} */}3
          </span>
          {/* )} */}
        </Link>

        <div className="flex hover:text-blue-500 md:hidden">
          <IoMenuOutline size={28} color="black" />
        </div>
      </div>
    </nav>
  );
};

export default TopMenu;
