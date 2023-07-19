import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "<LaLa/> Portfolio",
  description: "Nattida Jangpipatnavakij Portfolio",
  icons: {
    icon: { url: "/favicon.ico", type: "ico" },
    shortcut: { url: "/favicon.ico", type: "ico" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-roboto">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
