"use client";

import EastIcon from "@mui/icons-material/East";
import { useMotionValue, useTransform, motion } from "framer-motion";
import Link from "next/link";

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
}

const CardWork = ({
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
}: TypeCardWork) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <motion.div
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
      onClick={onPopupImgWebsite}
      className="flex relative z-10"
    >
      <div className="flex flex-col justify-end z-10 rounded-full">
        <span className="text-[24px] sm:text-[16px] font-bold py-[8px] pr-[8px] w-[120px]">
          Luna LED
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
        animate={{ translateX: hoveringCard === indexCard ? 0 : -100 }}
        className={`flex flex-col px-2 gap-[8px] z-[2] cursor-pointer`}
      >
        {toolList.map((tool) => (
          <label className="text-[12px] font-bold text-primary-mainDark bg-[#7848d934] rounded-[4px] p-1 text-center">
            {tool}
          </label>
        ))}
        {figmaLink && (
          <Link href={figmaLink.link} target="_blank">
            <label className="text-[12px] font-bold text-primary-mainDark bg-[#7848d934] rounded-[4px] py-1 px-4 text-center">
              {figmaLink.name}
            </label>
          </Link>
        )}
      </motion.div>
    </motion.div>
  );
};
export default CardWork;
