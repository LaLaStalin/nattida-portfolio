"use client";

import EastIcon from "@mui/icons-material/East";
import { useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useState } from "react";

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
  const [animationOn, setAnimationOn] = useState<boolean>(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  useEffect(() => {
    const scrollTrigger = (e: any) => {
      if (window.scrollY >= 0 && window.scrollY <= 600) {
        setAnimationOn(false);
      } else if (window.scrollY >= 601 && window.scrollY <= 2000) {
        setAnimationOn(true);
      }
      // } else if (window.scrollY > 2000) {
      //   setAnimationOn(false);
      // }
    };

    window.document.addEventListener("scroll", scrollTrigger);

    return () => {
      window.removeEventListener("scroll", scrollTrigger);
    };
  }, []);

  return (
    <motion.div
      initial={{ x: animationOn ? 20 : 0, opacity: animationOn ? 0 : 1 }}
      animate={{ x: animationOn ? 0 : 20, opacity: animationOn ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.18}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileTap={{ cursor: "grabbing" }}
      whileHover={{
        scale: 1.15,
        transition: { duration: 0.5 },
      }}
      onHoverStart={() => onHoverCard(indexCard)}
      onHoverEnd={() => onHoverCard("null")}
      onClick={() => onPopupImgWebsite(indexCard)}
      className="flex relative z-10"
    >
      <div className="flex flex-col justify-end z-10 rounded-full">
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
        className="ml-[-80px] sm:w-[220px]  hover:shadow-lg hover:shadow-[#000] z-[8]"
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
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
  );
};
export default cardWork;
