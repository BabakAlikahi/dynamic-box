import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import "./globals.css";

const vazirMatn = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Dynamic Box",
  description: "Created By Babak alikahi",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fa"
      dir="rtl"
    >
      <body className={`${vazirMatn.className} antialiased`}>{children}</body>
    </html>
  );
}
