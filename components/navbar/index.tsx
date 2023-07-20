"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [linkActive, setLinkActive] = useState<string>("#");

  useEffect(() => {
    const scrollTrigger = (e: any) => {
      console.log(window.scrollY);
      if (window.scrollY >= 0 && window.scrollY <= 600) {
        setLinkActive("#");
      } else if (window.scrollY >= 601 && window.scrollY <= 1400) {
        setLinkActive("work");
      }
    };

    window.document.addEventListener("scroll", scrollTrigger);

    return () => {
      window.removeEventListener("scroll", scrollTrigger);
    };
  }, []);

  const scrollToElement = (path: string) => {
    const section = document.getElementById(path);
    console.log("section:", section);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="w-full z-50 py-[8px] px-[24px] gradient-nav sticky top-0">
      <nav className="flex items-center justify-between ">
        <div className="flex items-center ">
          <ChevronLeftIcon className=" text-primary-mainDark text-[32px] mr-[-4px]" />
          <h1 className="text-text-primaryDark text-[40px] font-bold">LALA</h1>
          <span className="text-primary-mainDark  text-[30px] font-medium pl-1"></span>
          <ChevronLeftIcon className="text-primary-mainDark  rotate-180 text-[32px] ml-[-8px]" />
        </div>

        <div className="flex">
          <Link
            href="#"
            passHref
            scroll={false}
            onClick={() => scrollToElement("#")}
          >
            <button
              style={{ opacity: linkActive === "#" ? "1" : "0.4" }}
              className="flex items-center py-[8px] px-[8px] gap-1 ease-in hover:opacity-100 hover:transition-all duration-100"
            >
              <p className="text-[22px] font-bold">Start</p>
              <span className="text-[22px] font-bold">{"/>"}</span>
            </button>
          </Link>

          <Link
            href="#work"
            passHref
            scroll={false}
            onClick={() => scrollToElement("work")}
          >
            <button
              className="flex  items-center py-[8px] px-[8px] gap-1
            hover:transition-all duration-100	ease-in hover:opacity-100 "
              style={{ opacity: linkActive === "work" ? "1" : "0.4" }}
            >
              <p className="text-[22px] font-bold ">Work</p>

              <span className="text-[22px]  font-bold">{"/>"}</span>
            </button>
          </Link>

          <button className="flex  items-center py-[8px] px-[8px] gap-1 opacity-40 duration-100	ease-in hover:opacity-100 hover:transition-all">
            <p className="text-[22px] font-bold ">About</p>
            <span className="text-[22px] font-bold">{"/>"}</span>
          </button>

          <button className="flex  items-center py-[8px] px-[8px] gap-1 opacity-40 duration-100	ease-in hover:opacity-100 hover:transition-all">
            <p className="text-[22px] font-bold ">Contact</p>
            <span className="text-[22px]  font-bold">{"/>"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
