import Sidebar from "@/components/ui/Sidebar";
import TopMenu from "@/components/ui/TopMenu";
import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | os-commerce",
    default: "Home | os-commerce",
  },
  description:
    "You will find the perfect product for you into our os-commerce store",
};

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="bg-white/95 mt-16 p-8">
      <TopMenu />
      <Sidebar />
      {children}
    </main>
  );
};

export default ShopLayout;
