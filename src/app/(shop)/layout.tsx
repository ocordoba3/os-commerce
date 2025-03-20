import TopMenu from "@/components/ui/TopMenu";
import React, { ReactNode } from "react";

const ShopLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="min-h-screen bg-white/80 mt-16 p-4">
      <TopMenu />
      {children}
    </main>
  );
};

export default ShopLayout;
