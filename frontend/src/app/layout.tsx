import type { Metadata } from "next";
import { Footer, Navbar } from "@/components/common";

import "./globals.css";
import { UserProvider } from "@/context/UserContext";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "Edu House",
  description: "Generated by create next app",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden h-screen flex flex-col">
        <Providers attribute="class" defaultTheme="system">
          <UserProvider>
            <Navbar />
            <div className="pt-16 flex-grow">{children}</div>
            <Footer />
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
