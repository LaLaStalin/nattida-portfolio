import { CardWork, TimelineComponent, WorkContent } from "@/components";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  foodInfo,
  foodImg,
  lunaInfo,
  lunaImg,
  melloInfo,
  melloImg,
  portfolioInfo,
  portfolioImg,
  bakeryInfo,
  bakeryImg,
  foodResponsiveInfo,
  foodResponsiveImg,
  portResponsiveInfo,
  portResponsiveImg,
} from "../../constant";
import useMediaQuery from "@mui/material/useMediaQuery";

const Work = () => {
  const [hoveringCard, setHoveringCard] = useState<string>("");
  const [showUpSliderImg, setShowUpSliderImg] = useState<boolean>(false);
  const [indexCardWork, setIndexCardWork] = useState<string>("");
  const matches = useMediaQuery("(max-width:600px)");
  const [animationOn, setAnimationOn] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  const onHoverCard = (cardIndex: string) => {
    setHoveringCard(cardIndex);
  };

  const onPopupImgWebsite = (cardIndex: string) => {
    // if (matches) scrollToTop();
    setAnimationOn(true);
    setIndexCardWork(cardIndex);
    setShowUpSliderImg(true);
  };

  const onCloseImgWebsite = () => {
    setAnimationOn(false);
    setShowUpSliderImg(false);
    setIndexCardWork("null");
  };

  return (
    <>
      <section
        id="work"
        className=" px-[16px] relative h-full md:h-full bg-[#1a1527] bg-gradient-to-b from-[#1a1527] to-[#0e0c16]"
        // style={ background-color:linear-gradient(-180deg, #1a1527, #0e0c16 88%, #0e0c16 99%)}
      >
        <div className="absolute right-0 top-10 z-[1]">
          <h1 className="text-[#221d35] font-bold text-[200px] md:hidden ">
            WEB
          </h1>
        </div>
        <motion.div
          className="w-full h-full flex flex-col justify-start max-w-[1024px] mx-auto z-20"
          animate={{ opacity: animationOn ? 0 : 1 }}
        >
          <TimelineComponent hightBottom="100%" lineTop={true}>
            <p className=" text-text-secondaryDark text-[18px] font-light pt-[68px] z-10">
              Work{" />"}
            </p>
            <p className="text-text-secondaryDark text-[30px] sm:text-[24px] font-semibold tracking-tight pb-[16px] z-10">
              Selected web, mobile, video projects...
            </p>

            {/* Card Work - WEB*/}
            {/* Food recipe Center */}
            <div className="flex  md:flex-col md:gap-[40px] ">
              <div className="ml-[-200px] px-[16px] md:ml-0 ">
                <CardWork
                  indexCard="00"
                  imgWidth={410}
                  imgHeight={230}
                  imgSrc="food-recipe-center.png"
                  nameProject="Food recipe Center"
                  onHoverCard={onHoverCard}
                  hoveringCard={hoveringCard}
                  toolList={[
                    "React.js",
                    "Styled-Components",
                    "Bootstrap",
                    "PHP",
                    "MySQL",
                  ]}
                  figmaLink={{ name: "Figma", link: "#" }}
                  onPopupImgWebsite={onPopupImgWebsite}
                />
              </div>
              {indexCardWork === "00" && (
                <WorkContent
                  onPopupImgWebsite={onPopupImgWebsite}
                  onCloseImgWebsite={onCloseImgWebsite}
                  showUpSliderImg={showUpSliderImg}
                  imgList={foodImg}
                  info={foodInfo}
                />
              )}

              {/* Luna LED */}
              <div className="px-[16px] md:px-0 mt-[260px] ml-[-100px] md:m-0">
                <CardWork
                  indexCard="01"
                  imgWidth={410}
                  imgHeight={230}
                  imgSrc="lunaled.png"
                  nameProject="Luna LED"
                  onHoverCard={onHoverCard}
                  hoveringCard={hoveringCard}
                  toolList={[
                    "Next.js",
                    "Tailwind",
                    "TypeScript",
                    "Material UI",
                  ]}
                  figmaLink={{ name: "Figma", link: "#" }}
                  onPopupImgWebsite={onPopupImgWebsite}
                />
              </div>
              {indexCardWork === "01" && (
                <WorkContent
                  onPopupImgWebsite={onPopupImgWebsite}
                  onCloseImgWebsite={onCloseImgWebsite}
                  showUpSliderImg={showUpSliderImg}
                  imgList={lunaImg}
                  info={lunaInfo}
                />
              )}

              {/* MELLO */}
              <div className="px-[16px] md:px-0 mt-[100px] md:mt-0 ml-[100px] mr-[-100px] md:mx-0">
                <CardWork
                  indexCard="02"
                  imgWidth={230}
                  imgHeight={410}
                  imgSrc="mobile-mello.png"
                  nameProject="MELLO"
                  onHoverCard={onHoverCard}
                  hoveringCard={hoveringCard}
                  toolList={["C#", "Firebase"]}
                  figmaLink={{ name: "Figma", link: "#" }}
                  onPopupImgWebsite={onPopupImgWebsite}
                />
              </div>
              {indexCardWork === "02" && (
                <WorkContent
                  onPopupImgWebsite={onPopupImgWebsite}
                  onCloseImgWebsite={onCloseImgWebsite}
                  showUpSliderImg={showUpSliderImg}
                  imgList={melloImg}
                  info={melloInfo}
                />
              )}
            </div>

            {/* WEB - row 2 */}
            {/* Portfolio */}
            <div className="flex  md:flex-col md:gap-[40px] mt-[40px]">
              <div className="px-[16px] md:px-0 ml-[-160px] md:ml-0 ">
                <CardWork
                  indexCard="03"
                  imgWidth={410}
                  imgHeight={230}
                  imgSrc="portfolio.png"
                  nameProject="Portfolio"
                  onHoverCard={onHoverCard}
                  hoveringCard={hoveringCard}
                  toolList={[
                    "Next.js",
                    "Tailwind",
                    "TypeScript",
                    "Material UI",
                  ]}
                  figmaLink={{ name: "Figma", link: "#" }}
                  onPopupImgWebsite={onPopupImgWebsite}
                />
              </div>
              {indexCardWork === "03" && (
                <WorkContent
                  onPopupImgWebsite={onPopupImgWebsite}
                  onCloseImgWebsite={onCloseImgWebsite}
                  showUpSliderImg={showUpSliderImg}
                  imgList={portfolioImg}
                  info={portfolioInfo}
                />
              )}

              {/* Bakery Material */}
              <div className="px-[16px]  md:px-0 ml-[200px] mt-[120px] md:m-0">
                <CardWork
                  indexCard="04"
                  imgWidth={410}
                  imgHeight={230}
                  imgSrc="bakery-material.png"
                  nameProject="Bakery Material"
                  onHoverCard={onHoverCard}
                  hoveringCard={hoveringCard}
                  toolList={["C#", "VScode 2019"]}
                  onPopupImgWebsite={onPopupImgWebsite}
                />
              </div>
              {indexCardWork === "04" && (
                <WorkContent
                  onPopupImgWebsite={onPopupImgWebsite}
                  onCloseImgWebsite={onCloseImgWebsite}
                  showUpSliderImg={showUpSliderImg}
                  imgList={bakeryImg}
                  info={bakeryInfo}
                />
              )}
            </div>

            {/* WEB - row 3 */}
            {/* Food Recipe Center (responsive) */}
            <div className="flex  md:flex-col md:gap-[40px]">
              <div className="px-[16px] md:mt-[80px]">
                <CardWork
                  indexCard="05"
                  imgWidth={230}
                  imgHeight={410}
                  imgSrc="mobile-food-recipe-center.png"
                  nameProject="Food Recipe Center (responsive)"
                  onHoverCard={onHoverCard}
                  hoveringCard={hoveringCard}
                  toolList={[
                    "React.js",
                    "Styled-Components",
                    "Bootstrap",
                    "PHP",
                    "MySQL",
                  ]}
                  onPopupImgWebsite={onPopupImgWebsite}
                />
              </div>
              {indexCardWork === "05" && (
                <WorkContent
                  onPopupImgWebsite={onPopupImgWebsite}
                  onCloseImgWebsite={onCloseImgWebsite}
                  showUpSliderImg={showUpSliderImg}
                  imgList={foodResponsiveImg}
                  info={foodResponsiveInfo}
                />
              )}

              {/* Portfolio (responsive) */}
              <div className="px-[16px] md:px-0 mt-[100px] md:mt-0 ml-[180px]  md:mx-0">
                <CardWork
                  indexCard="06"
                  imgWidth={230}
                  imgHeight={410}
                  imgSrc="mobile-portfolio.png"
                  nameProject="Portfolio (responsive)"
                  onHoverCard={onHoverCard}
                  hoveringCard={hoveringCard}
                  toolList={[
                    "Next.js",
                    "Tailwind",
                    "TypeScript",
                    "Material UI",
                  ]}
                  onPopupImgWebsite={onPopupImgWebsite}
                />
              </div>
              {indexCardWork === "06" && (
                <WorkContent
                  onPopupImgWebsite={onPopupImgWebsite}
                  onCloseImgWebsite={onCloseImgWebsite}
                  showUpSliderImg={showUpSliderImg}
                  imgList={portResponsiveImg}
                  info={portResponsiveInfo}
                />
              )}
            </div>

            {/* Video */}
            <div className="mt-[80px]">
              <h1 className="text-[#221d35] font-bold text-[100px] sm:hidden uppercase text-center">
                Showreel
              </h1>
            </div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="mt-[-50px] pb-[100px]"
            >
              <video
                src="/assets/video/kinraidee.mp4"
                controls
                color="#5918df"
              />
            </motion.div>
          </TimelineComponent>
        </motion.div>
      </section>
    </>
  );
};

export default Work;
