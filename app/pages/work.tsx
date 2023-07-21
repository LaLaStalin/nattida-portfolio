import { CardWork, TimelineComponent } from "@/components";
import { useState } from "react";

const Work = () => {
  const [hoveringCard, setHoveringCard] = useState<string>("");
  const [showUpSliderImg, setShowUpSliderImg] = useState<boolean>(false);

  const onHoverCard = (cardIndex: string) => {
    setHoveringCard(cardIndex);
  };

  const onPopupImgWebsite = (cardIndex: string) => {
    setShowUpSliderImg(true);
  };

  const onCloseImgWebsite = () => {
    setShowUpSliderImg(false);
  };

  return (
    <>
      <section
        id="work"
        className="pb-[16px] px-[16px] relative h-full md:h-full bg-[#1a1527] bg-gradient-to-b from-[#1a1527] to-[#0e0c16]"
        // style={ background-color:linear-gradient(-180deg, #1a1527, #0e0c16 88%, #0e0c16 99%)}
      >
        <div className="absolute right-0 top-10 z-[1]">
          <h1 className="text-[#221d35] font-bold text-[200px] sm:hidden ">
            WEB
          </h1>
        </div>
        <div className="w-full h-full flex flex-col justify-start max-w-[1024px] mx-auto z-20">
          <TimelineComponent hightBottom="100%" lineTop={true}>
            <p className=" text-text-secondaryDark text-[18px] font-light pt-[30px] z-10">
              Work{" />"}
            </p>
            <p className="text-text-secondaryDark text-[30px] sm:text-[24px] font-semibold tracking-tight pb-[16px] z-10">
              Selected web, mobile, video projects...
            </p>

            {/* Card Work - WEB*/}
            <div className="flex z-20 md:flex-col  md:gap-[32px]">
              <div className="ml-[-200px] px-[16px] md:ml-0 ">
                <CardWork
                  indexCard="00"
                  imgWidth={410}
                  imgHeight={230}
                  imgSrc="Luna-Home.png"
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
              <div className="px-[16px] mt-[260px] ml-[-100px] md:m-0">
                <CardWork
                  indexCard="01"
                  imgWidth={410}
                  imgHeight={230}
                  imgSrc="Luna-Home.png"
                  onHoverCard={onHoverCard}
                  hoveringCard={hoveringCard}
                  toolList={["next", "react"]}
                />
              </div>

              <div className="px-[16px] mt-[100px] ml-[100px] mr-[-100px] md:mx-0">
                <CardWork
                  indexCard="02"
                  imgWidth={230}
                  imgHeight={410}
                  imgSrc="webApp.png"
                  onHoverCard={onHoverCard}
                  hoveringCard={hoveringCard}
                  toolList={["next", "react"]}
                />
              </div>
            </div>

            {/* WEB - row 2 */}
            <div className="flex z-20 md:flex-col md:gap-[32px] mt-[40px]">
              <div className="px-[16px] ml-[-160px] md:ml-0 ">
                <CardWork
                  indexCard="03"
                  imgWidth={410}
                  imgHeight={230}
                  imgSrc="Luna-Home.png"
                  onHoverCard={onHoverCard}
                  hoveringCard={hoveringCard}
                  toolList={["next", "react"]}
                />
              </div>
              <div className="px-[16px] ml-[200px] mt-[120px] md:m-0">
                <CardWork
                  indexCard="04"
                  imgWidth={410}
                  imgHeight={230}
                  imgSrc="Luna-Home.png"
                  onHoverCard={onHoverCard}
                  hoveringCard={hoveringCard}
                  toolList={["next", "react"]}
                />
              </div>
            </div>
          </TimelineComponent>
        </div>
      </section>
    </>
  );
};

export default Work;
