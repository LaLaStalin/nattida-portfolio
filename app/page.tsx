"use client";

import { useEffect, useState } from "react";
import { Loading, TimelineComponent, Reveal } from "@/components";
import Work from "./pages/work";
import About from "./pages/about";
import Contact from "./pages/contact";
import Link from "next/link";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";
import Typed from "react-typed";

export default function Home() {
  const [onLoad, setOnLoad] = useState<boolean>(true);

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

  // Loading
  useEffect(() => {
    setTimeout(() => {
      setOnLoad(false);
    }, 1500);
  }, []);

  const scrollToElement = (path: string) => {
    const section = document.getElementById(path);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const homeSection = () => {
    return (
      <section
        id="#"
        className="px-[16px] relative h-[780px] mt-[-80px] bg-[url('/assets/bg-hero.jpg')] bg-cover bg-no-repeat"
      >
        <div className="w-full h-full flex flex-col justify-end max-w-[1024px] mx-auto">
          <TimelineComponent hightBottom="600px">
            <Reveal bg="#ffffff">
              <p className=" text-text-secondaryDark text-[18px] w-[fit-content] font-light pb-[16px]">
                Start{" />"}
              </p>
            </Reveal>
            {/* Hi */}
            <Reveal bg="#5918df">
              <motion.div className="flex pt-[16px] flex-wrap text-[38px] sm:text-[28px]">
                <h1 className="text-text-primaryDark  font-bold">
                  Hi, my name is&nbsp;
                </h1>
                <div className="text-primary-mainDark  font-bold naming-animate ">
                  Nattida Jangpipatnavakij
                  <span className="opacity-0">exceed</span>
                </div>
              </motion.div>
            </Reveal>
            {/* I design */}
            <Reveal bg="#5918df">
              <div className="flex pb-[16px] text-[36px] sm:text-[24px] ">
                <p className="text-text-primaryDark  font-bold">i&nbsp;</p>
                <p className="text-text-primaryDark font-light italic font-palatino">
                  design&nbsp;
                </p>
                <p className="text-text-primaryDark  font-bold">and&nbsp;</p>
                <Typed
                  className="text-text-primaryDark font-bold"
                  strings={[
                    "fullstack developer",
                    "front-end developer",
                    "backend developer",
                    "react developer",
                    "uxui developer",
                    "fullstack developer",
                  ]}
                  typeSpeed={30}
                  backSpeed={50}
                />
              </div>
            </Reveal>
            <Reveal bg="#ffffff">
              <p className="text-text-secondaryDark text-[24px] font-normal my-[8px] pb-[16px]">
                Let me show You...
              </p>
            </Reveal>

            <Link href="/assets/cv-nattida-fullstack.pdf" target="_blank">
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="btn"
              >
                Download Resume
              </motion.button>
            </Link>

            <Link
              href={"#work"}
              passHref
              key={"work"}
              scroll={false}
              onClick={() => scrollToElement("work")}
            >
              <span className="flex gap-[8px] -rotate-90 absolute ml-[-81px] bottom-40 items-center sm:hidden rounded-[4px] p-[4px] hover:bg-[#5a18df0f] ">
                <p className="text-[14px] text-primary-mainDark  bg-[#100E17]">
                  SCROLL
                </p>
                <CodeIcon className="drop-shadow-2xl" />
              </span>
            </Link>
          </TimelineComponent>
        </div>
      </section>
    );
  };

  return (
    <main className="relative">
      {onLoad ? (
        <Loading />
      ) : (
        <>
          {/* Home Section */}
          {homeSection()}

          {/* Work Section */}
          <Work />

          {/* About Section */}
          <About />

          {/* Contact Section */}
          <Contact />
        </>
      )}

      {/* Cursor */}
      <span className="inner-cursor"></span>
      <span className="outer-cursor"></span>
    </main>
  );
}
