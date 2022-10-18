import React from "react";
import Navbar from "../components/Navbar";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex lg:flex-row">
      <div className="w-1/4">
        <Navbar />
      </div>
      <main className="w-3/4 mb-8 h-full">{children}</main>
    </div>
  );
};
