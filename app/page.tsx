"use client";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CardWork, TimelineComponent } from "@/components";

export default function Home() {
  const [nameTyping, setNameTyping] = useState<string>(
    "Nattida Jangpipatnavakij"
  );

  useEffect(() => {
    let innerCursor: any = document.querySelector(".inner-cursor");
    let outerCursor: any = document.querySelector(".outer-cursor");
    console.log("in", innerCursor);

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

  const heroSection = () => {
    return (
      <section
        id="#"
        className="px-[16px] relative h-[780px] mt-[-80px] bg-[url('/assets/bg-hero.jpg')] bg-cover bg-no-repeat"
      >
        <div className="w-full h-full flex flex-col justify-end max-w-[1024px] mx-auto">
          <TimelineComponent hightBottom="600px">
            <p className=" text-text-secondaryDark text-[18px] font-light pb-[16px]">
              Start{" />"}
            </p>
            <div className="flex pt-[16px]">
              <h1 className="text-text-primaryDark text-[38px] font-bold">
                Hi, my name is
              </h1>
              <div className="text-primary-mainDark text-[38px] font-bold naming-animate ">
                &nbsp;Nattida Jangpipatnavakij
                <span className="opacity-0">exceed</span>
              </div>
            </div>

            <div className="flex pb-[16px]">
              <h1 className="text-text-primaryDark text-[38px] font-bold">
                i&nbsp;
              </h1>
              <h1 className="text-text-primaryDark text-[38px] font-light italic  font-palatino">
                design&nbsp;
              </h1>
              <h1 className="text-text-primaryDark text-[38px] font-bold">
                and develop&nbsp;
              </h1>
              <h1 className="text-text-primaryDark text-[38px] font-bold">
                ux/ui
              </h1>
            </div>

            <p className="text-text-secondaryDark text-[24px] font-normal my-[8px] pb-[16px]">
              Let me show You...
            </p>
          </TimelineComponent>
        </div>
      </section>
    );
  };

  return (
    <main className="">
      {heroSection()}
      <section
        id="work"
        className="px-[16px] relative h-[780px] bg-[#1a1527] bg-gradient-to-b from-[#1a1527] to-[#0e0c16]"
        // style={ background-color:linear-gradient(-180deg, #1a1527, #0e0c16 88%, #0e0c16 99%)}
      >
        <div className="absolute right-0 top-10 z-[1]">
          <h1 className="text-[#221d35] font-bold text-[200px] ">WEB</h1>
        </div>
        <div className="w-full h-full flex flex-col justify-start max-w-[1024px] mx-auto z-20">
          <TimelineComponent hightBottom="500px" lineTop={true}>
            <p className=" text-text-secondaryDark text-[18px] font-light pt-[30px] z-10">
              Work{" />"}
            </p>
            <p className="text-text-secondaryDark text-[30px] font-semibold tracking-tight pb-[16px] z-10">
              Selected web, mobile, video projects...
            </p>

            {/* Card Work*/}
            <div className="flex h-[540px] z-20">
              <div className="ml-[-200px] px-[16px] ">
                <CardWork />
              </div>
              <div className="px-[16px]">
                <CardWork />
              </div>
            </div>
          </TimelineComponent>
        </div>
      </section>

      {/* Cursor */}
      <span className="inner-cursor"></span>
      <span className="outer-cursor"></span>
    </main>
  );
}
