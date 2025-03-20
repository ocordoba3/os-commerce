import Sidebar from "@/components/ui/Sidebar";
import TopMenu from "@/components/ui/TopMenu";
import React, { ReactNode } from "react";

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen bg-white/80 mt-16 p-8">
      <TopMenu />
      <Sidebar />
      {children}
    </main>
  );
};

export default ShopLayout;
