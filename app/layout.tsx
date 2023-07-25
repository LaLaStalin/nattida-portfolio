"use client";

import { Loading, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

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
  const [onLoad, setOnLoad] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setOnLoad(false);
    }, 1500);
  }, []);
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative font-roboto bg-[#0f0f0f]">
        {onLoad ? (
          <Loading />
        ) : (
          <>
            <Navbar /> {children}
          </>
        )}
      </body>
    </html>
  );
}
