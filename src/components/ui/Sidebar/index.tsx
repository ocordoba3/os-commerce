"use client";

import { cn } from "@/lib/utils";
import useUiStore from "@/store/ui";
import { PATHS } from "@/utils/paths";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearch,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

const Sidebar = () => {
  const { sidebarOpened, setSidebarOpened } = useUiStore();

  const items = [
    { label: "Profile", Icon: IoPersonOutline, href: PATHS.cart },
    { label: "Orders", Icon: IoTicketOutline, href: PATHS.cart },
    { label: "Log In", Icon: IoLogInOutline, href: PATHS.cart },
    { label: "Log Out", Icon: IoLogOutOutline, href: PATHS.cart },
    { label: "Products", Icon: IoShirtOutline, href: PATHS.cart },
    { label: "Users", Icon: IoPeopleOutline, href: PATHS.cart },
  ];

  useEffect(() => {
    if (sidebarOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [sidebarOpened]);

  return (
    <>
      {sidebarOpened && (
        <div
          onClick={setSidebarOpened}
          className="fixed top-0 right-0 w-screen h-screen bg-black/10 backdrop-blur-sm z-20"
        ></div>
      )}

      <div
        className={cn(
          "fixed top-0 z-30 h-screen right-0 w-1/3 bg-white transform transition-all duration-300 shadow-md",
          {
            "translate-x-full": !sidebarOpened,
          }
        )}
      >
        <button className="cursor-pointer m-4" onClick={setSidebarOpened}>
          <IoCloseOutline size={24} />
        </button>

        <div className="flex w-full px-10 rounded bg-white box-border mt-10">
          <button
            type="submit"
            className="mr-2 rounded bg-orange-600 px-4 py-2 text-white"
          >
            <IoSearch size={16} />
          </button>
          <input
            className=" w-full border-none bg-transparent px-4 py-1 text-gray-400 outline-none focus:outline-none "
            type="search"
            name="search"
            placeholder="Search..."
          />
        </div>

        <div className="w-full grid grid-cols-1 px-10 gap-y-10 mt-10">
          {items.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              className="flex items-center text-gray-600 hover:text-orange-500
                    cursor-pointer transition-colors duration-300"
            >
              <Icon size={24} />
              <span className="ml-2 font-semibold">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
