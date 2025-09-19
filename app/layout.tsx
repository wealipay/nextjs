import React from "react";
import type { Metadata } from "next";
import "@/assets/css/globals.css";
import { Ma_Shan_Zheng } from "next/font/google";

const font = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  variable:"--font-mashan",
  display: "swap",
  preload: true
});
export const metadata: Metadata = {
  title: {
    default: "wealipay",
    template: "%s|wealipay",
    absolute: ""
  },
  description: "alipay",
  keywords: ["wealipay"],
  icons: {
    icon: "/favicon.ico"
  }
};
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`{font.className} bg-background`}>
      <body>{children}</body>
    </html>
  );
}
