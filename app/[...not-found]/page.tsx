"use client";

import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

export default function NotFoundCatchAll() {
  useEffect(() => {
    let innerCursor: any = document.querySelector(".inner-cursor");
    let outerCursor: any = document.querySelector(".outer-cursor");

    const moveCursor = (e: any) => {
      let x = e.clientX;
      let y = e.clientY;
      innerCursor.style.left = `${x}px`;
      innerCursor.style.top = `${y}px`;
      outerCursor.style.left = `${x}px`;
      outerCursor.style.top = `${y}px`;
    };

    document.addEventListener("mousemove", moveCursor);
    let links = Array.from(document.querySelectorAll("p"));
    links.map((i) => {
      i.addEventListener("mouseover", () => {
        innerCursor.classList.add("grow");
      });
      i.addEventListener("mouseleave", () => {
        innerCursor.classList.remove("grow");
      });
    });
  }, []);

  return (
    <div
      className="w-full h-screen text-[#fff] absolute top-0 z-50 
    bg-gradient-to-b from-[#2e1753] from-10% via-[#131537] via-30% to-[#050819] to-90%"
    >
      <div className="flex flex-col items-center justify-center h-full ">
        <p className="text-[50px] ">ERROR</p>
        <h1 className="text-[200px] font-robotoMono leading-[268px]">404</h1>
        <hr className="w-[350px] pb-4" />
        <p className="text-[40px]">Page Not Found</p>
        {/* button */}
        <Link href={"https://nattida-portfolio.vercel.app/"}>
          <button className="button text-[#000] mt-10 mb-2">
            Go Home
            <div className="hoverEffect">
              <div></div>
            </div>
          </button>
        </Link>
        <span className="loader " />
      </div>

      {/* Cursor */}
      <span className="inner-cursor"></span>
      <span className="outer-cursor"></span>
    </div>
  );
}
