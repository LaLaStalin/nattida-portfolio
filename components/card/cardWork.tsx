"use client";

import EastIcon from "@mui/icons-material/East";
import { useMediaQuery } from "@mui/material";
import {
  useMotionValue,
  useTransform,
  motion,
  useInView,
  useAnimation,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Tilt } from "react-tilt";

interface figmaType {
  name: string;
  link: string;
}

interface TypeCardWork {
  imgWidth: any;
  imgHeight: any;
  imgSrc: string;
  indexCard: string;
  onHoverCard: any;
  hoveringCard: string;
  toolList: string[];
  figmaLink?: figmaType;
  webLink?: any;
  onPopupImgWebsite?: any;
  nameProject: string;
}

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const cardWork = ({
  imgWidth,
  imgHeight,
  imgSrc,
  indexCard,
  hoveringCard,
  onHoverCard,
  toolList,
  figmaLink,
  webLink,
  onPopupImgWebsite,
  nameProject,
}: TypeCardWork) => {
  const refElements = useRef(null);
  const isInView = useInView(refElements, { once: true });
  const mainControls = useAnimation();

  const matches = useMediaQuery("(max-width:600px)");

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  useEffect(() => {
    if (isInView) {
      // Fine the animation
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <Tilt options={defaultOptions}>
      <motion.div
        ref={refElements}
        variants={{
          hidden: { opacity: 0, x: 75 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.8 }}
        whileTap={{ cursor: "grabbing" }}
        whileHover={{
          scale: 1.15,
          transition: { duration: 0.5 },
        }}
        onHoverStart={() => onHoverCard(indexCard)}
        onHoverEnd={() => onHoverCard("null")}
        onClick={() => onPopupImgWebsite(indexCard)}
        className="flex relative"
      >
        <div className="flex flex-col justify-end z-[20] rounded-full ">
          <span className="text-[24px] sm:text-[16px] font-bold py-[8px] pr-[8px] w-[120px]">
            {nameProject}
          </span>
          <span className="w-[151.49px] h-[3px] bg-while mt-[8px] mb-[12px]" />
          <p className="text-[14px] text-text-secondaryDark font-robotoMono">
            {indexCard}
          </p>
          <motion.span
            animate={{ translateX: hoveringCard === indexCard ? 20 : 0 }}
            transition={
              hoveringCard === indexCard
                ? { repeat: Infinity, duration: 1 }
                : { duration: 0 }
            }
          >
            <EastIcon className="text-[14px] text-text-secondaryDark" />
          </motion.span>
        </div>
        <motion.img
          src={`/assets/work/${imgSrc}`}
          alt="cob-circlr-100w"
          width={imgWidth}
          height={imgHeight}
          className="ml-[-80px] sm:w-[220px]  hover:shadow-lg hover:shadow-[#000] z-[3]"
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag={!matches ? true : false}
          dragElastic={0.18}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        />

        <motion.div
          animate={{ translateX: hoveringCard === indexCard ? 0 : -140 }}
          className={`flex flex-col px-2 gap-[8px] z-[2] cursor-pointer`}
        >
          {toolList.map((tool) => (
            <label
              key={tool}
              className="text-[12px] font-bold text-primary-mainDark bg-[#7848d934] rounded-[4px] p-1 text-center hover:bg-[#7848d98d] hover:text-while "
            >
              {tool}
            </label>
          ))}
          {figmaLink && (
            <label className="text-[12px] font-bold text-primary-mainDark bg-[#7848d934] rounded-[4px] py-1 px-4 text-center hover:bg-[#7848d98d] hover:text-while">
              {figmaLink.name}
            </label>
          )}
        </motion.div>
      </motion.div>
    </Tilt>
  );
};
export default cardWork;
