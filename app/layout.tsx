import { Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="en" className="scroll-smooth">
      <body className="relative font-roboto bg-[#0f0f0f]">
        <Navbar /> {children}
      </body>
    </html>
  );
}
