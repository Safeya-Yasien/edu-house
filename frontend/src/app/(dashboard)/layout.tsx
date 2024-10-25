import React, { ReactNode } from "react";
import "../globals.css";
import { DashboardNavbar, Menu } from "@/components/dashbaord";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/6 md:w-1/12 lg:w-2/12 xl:w-[14%] bg-white dark:bg-black p-4 overflow-y-auto [&::-webkit-scrollbar]:w-0">
        <aside>
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2
          "
          >
            logo img
            <span className="hidden lg:block">Edu House</span>
          </Link>
          <Menu />
        </aside>
      </div>
      <div className="w-5/6 md:w-11/12 lg:w-10/12 xl:w-[86%] bg-gray-100 flex flex-col overflow-scroll">
        <DashboardNavbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
