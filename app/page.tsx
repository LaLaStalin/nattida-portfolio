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
        id="hero-section"
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
      <section id="work-section" className="px-[16px] relative h-[780px]">
        <div className="w-full h-full flex flex-col justify-start max-w-[1024px] mx-auto">
          <TimelineComponent hightBottom="500px" lineTop={true}>
            <p className=" text-text-secondaryDark text-[18px] font-light pt-[30px]">
              Work{" />"}
            </p>
            <p className="text-text-secondaryDark text-[30px] font-semibold tracking-tight   pb-[16px]">
              Selected web, mobile, video projects...
            </p>

            <CardWork />
          </TimelineComponent>
        </div>
      </section>
      <span className="inner-cursor"></span>
      <span className="outer-cursor"></span>
    </main>
  );
}
