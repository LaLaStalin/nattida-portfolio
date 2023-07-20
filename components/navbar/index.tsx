"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useState } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [linkActive, setLinkActive] = useState<string>("start");
  return (
    <header className="w-full z-50 py-[8px] px-[24px] gradient-nav sticky top-0">
      <nav className="flex items-center justify-between ">
        <div className="flex items-center ">
          <ChevronLeftIcon className=" text-primary-mainDark text-[32px] mr-[-4px]" />
          <h1 className="text-text-primaryDark text-[40px] font-bold">LALA</h1>
          <span className="text-primary-mainDark  text-[30px] font-medium pl-1">
            {"/"}
          </span>
          <ChevronLeftIcon className="text-primary-mainDark  rotate-180 text-[32px] ml-[-8px]" />
        </div>

        <div className="flex">
          <Link
            activeClass="active"
            to="hero-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
          >
            <button className="flex items-center py-[8px] px-[8px] gap-1 opacity-40 duration-100	ease-in hover:opacity-100 hover:transition-all">
              <p className="text-[22px] font-bold">Start</p>
              <span className="text-[22px] font-bold">{"/>"}</span>
            </button>
          </Link>

          <Link
            activeClass="active"
            to="work-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={100}
          >
            <button
              className="flex  items-center py-[8px] px-[8px] gap-1 opacity-40 
            hover:transition-all duration-100	ease-in hover:opacity-100 "
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
