import React, { ReactNode } from "react";
import SideBar from "../sidebar/sidebar";
import Header from "../header/header";

interface LayoutProps {
  name?: string;
  children: ReactNode;
}

function Layout({ name = "Home", children }: LayoutProps) {
  return (
    <div className="flex fixed w-full h-screen">
      <SideBar />
      <div className="w-full">
        <Header />
        <div className="w-full h-screen pl-[4.8%] pt-[2%] bg-[#000000]">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
