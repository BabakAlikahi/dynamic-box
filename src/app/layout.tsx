import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";

import "./globals.css";
import Header from "./components/ui/Header";

const vazirMatn = Vazirmatn({
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "Parallel Routes in Next.js",
  description: "Created By Babak alikahi",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fa"
      dir="rtl"
    >
      <body className={`${vazirMatn.className} antialiased`}>
        <>
          <Header subject="How to handle dynamic routes in Parallel Routes in Next.js" />
          {children}
        </>
      </body>
    </html>
  );
}
