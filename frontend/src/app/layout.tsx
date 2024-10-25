import React, { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className="relative">{children}</body>
    </html>
  );
};

export default RootLayout;
