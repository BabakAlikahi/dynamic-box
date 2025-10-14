import type { Metadata } from "next";
import { Roboto, Vazirmatn } from "next/font/google";

import "./globals.css";

const vazirMatn = Vazirmatn({
  subsets: ["arabic"],
});
const roboto = Roboto({
  subsets: ["latin"],
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
      <body className={`${vazirMatn.className} antialiased`}>
        <>
          {/* <Header subject="How to Handle Dynamic Items in React with ResizeObserver" /> */}
          {children}
        </>
      </body>
    </html>
  );
}
