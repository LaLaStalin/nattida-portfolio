"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full py-[8px] px-[24px]">
      <nav className="flex items-center justify-between ">
        <div className="flex items-center ">
          <ChevronLeftIcon className=" text-[#5918df] text-[32px] mr-[-4px]" />
          <h1 className="text-[#f9f9f9] text-[40px] font-bold">LALA</h1>
          <span className="text-[#5918df] text-[30px] font-medium pl-1">
            {"/"}
          </span>
          <ChevronLeftIcon className="text-[#5918df] rotate-180 text-[32px] ml-[-8px]" />
        </div>

        <div className="flex ">
          <button className="flex  items-center py-[8px] px-[8px] gap-1">
            <p className="text-[22px] font-bold">Start</p>
            <span className="text-[22px] text-[#494949] font-bold">{"/>"}</span>
          </button>

          <button className="flex  items-center py-[8px] px-[8px] gap-1">
            <p className="text-[22px] font-bold opacity-40">Work</p>
            <span className="text-[22px] text-[#494949] font-bold">{"/>"}</span>
          </button>

          <button className="flex  items-center py-[8px] px-[8px] gap-1">
            <p className="text-[22px] font-bold opacity-40">About</p>
            <span className="text-[22px] text-[#494949] font-bold">{"/>"}</span>
          </button>

          <button className="flex  items-center py-[8px] px-[8px] gap-1">
            <p className="text-[22px] font-bold opacity-40">Contact</p>
            <span className="text-[22px] text-[#494949] font-bold">{"/>"}</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
