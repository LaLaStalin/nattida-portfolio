"use client";

import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import { motion } from "framer-motion";

const sideBar = ({
  setPopUpSidebar,
  linkActive,
  scrollToElement,
  navLinks,
  popUpSidebar,
}: any) => {
  return (
    <motion.div
      animate={{ y: popUpSidebar ? 0 : -500 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="hidden sm:block absolute top-0 right-0 w-full bg-gradient-to-b from-[#100E17] h-[460px] pt-[40px]"
    >
      <button
        className="absolute right-[16px] top-[20px]"
        onClick={() => setPopUpSidebar(false)}
      >
        <CloseIcon />
      </button>
      <div className="flex flex-col items-center justify-center p-[16px] gap-[16px]">
        {navLinks.map((link: any) => (
          <Link
            href={link.hrefLink}
            passHref
            key={link.name}
            scroll={false}
            onClick={() => scrollToElement(link.name)}
          >
            <button
              className="flex  items-center"
              onClick={() => setPopUpSidebar(false)}
            >
              <p
                className="text-[22px] font-bold hover:opacity-60 opacity-40 capitalize"
                style={{ opacity: linkActive === link.name ? ".8" : "" }}
              >
                {link.name === "#" ? "start" : link.name}
              </p>

              <span className="text-[22px]  font-bold opacity-40">{"/>"}</span>
            </button>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default sideBar;
