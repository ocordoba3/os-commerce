import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return <main className="bg-blue-500 min-h-screen">{children}</main>;
};

export default AuthLayout;
