"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useEffect, useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import { SideBar } from "../index";

const Navbar = () => {
  const [linkActive, setLinkActive] = useState<string>("#");
  const [popUpSidebar, setPopUpSidebar] = useState<Boolean>(false);

  const navLinks = [
    { name: "#", hrefLink: "#" },
    { name: "work", hrefLink: "#work" },
    { name: "about", hrefLink: "#about" },
    { name: "contact", hrefLink: "#contact" },
  ];

  useEffect(() => {
    const scrollTrigger = (e: any) => {
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
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="w-full z-50 py-[8px] px-[24px] sticky top-0  bg-gradient-to-b from-[#100E17]">
      <nav className="flex items-center justify-between relative ">
        <div className="flex items-center ">
          <ChevronLeftIcon className=" text-primary-mainDark text-[32px] mr-[-4px]" />
          <h1 className="text-text-primaryDark text-[40px] font-bold">LALA</h1>
          <span className="text-primary-mainDark  text-[30px] font-medium pl-1"></span>
          <ChevronLeftIcon className="text-primary-mainDark  rotate-180 text-[32px] ml-[-8px]" />
        </div>

        <div className="flex items-center py-[8px] px-[8px] gap-5 ease-in hover:transition-all duration-100 sm:hidden">
          {navLinks.map((link: any) => (
            <Link
              href={link.hrefLink}
              passHref
              key={link.name}
              scroll={false}
              onClick={() => scrollToElement(link.name)}
            >
              <button className="flex  items-center ">
                <p
                  className="text-[22px] font-bold hover:opacity-60 opacity-40 capitalize"
                  style={{ opacity: linkActive === link.name ? ".8" : "" }}
                >
                  {link.name === "#" ? "start" : link.name}
                </p>

                <span className="text-[22px]  font-bold opacity-40">
                  {"/>"}
                </span>
              </button>
            </Link>
          ))}
        </div>

        <button
          onClick={() => setPopUpSidebar(!popUpSidebar)}
          className="hidden sm:block"
        >
          {!popUpSidebar && <MenuIcon />}
        </button>
        {popUpSidebar && (
          <SideBar
            setPopUpSidebar={setPopUpSidebar}
            linkActive={linkActive}
            scrollToElement={scrollToElement}
            navLinks={navLinks}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
