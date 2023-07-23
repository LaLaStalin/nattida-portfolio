import { TimelineComponent } from "@/components";
import { useState } from "react";

const About = () => {
  const contentList: string[] = Array.from(Array(22), (_: any, x: any) =>
    x === 9
      ? (x + 1).toString()
      : x.toString().length < 2
      ? "0" + (x + 1)
      : (x + 1).toString()
  );

  const [hoveringIndent, setHoveringIndent] = useState<string>("");
  const workExperienceList = [
    {
      id: "11",
      date: "06/2023-Present",
      description:
        "Front-End Developer at asteroid group (Thailand)  Co., Ltd.",
    },
    {
      id: "12",

      date: "01/2023-05/2023",
      description: "UX/UI Designer at G-able ( Blend Data Co., Ltd. )",
    },
    {
      id: "13",

      date: "08/2021-11/2022",
      description: "Project Coordinator at Thai Programmer Association",
    },
  ];

  const showTitle = (title: string, id: string) => {
    return (
      <div
        className="flex gap-[16px]"
        onMouseOver={() => setHoveringIndent(id)}
        onMouseLeave={() => setHoveringIndent("null")}
      >
        <span className="flex">
          <p className="text-[#3B3553] ">··</p>
          <p className="text-[#EEFF31] ">{title}</p>
          <p className="text-while">{"()"}</p>
        </span>
        <p className="text-while"> {"{"}</p>
      </div>
    );
  };

  return (
    <section id="about" className=" bg-[#14121c]  md:px-[16px]">
      {/* Column Content*/}
      <div className="absolute pt-[90px] w-full z-1 md:hidden">
        {contentList.map((number) => (
          <p
            key={number}
            className={`sm:hidden text-[16x] pl-[210px] font-robotoMono font-thin 
          text-[#3B3553] hover:bg-[#231d285c] ${
            hoveringIndent === number && "bg-[#231d285c]"
          }`}
          >
            {number}
          </p>
        ))}
        {/* {showNumber()} */}
      </div>

      {/* About Content */}
      <div
        id="01"
        className="w-full h-full flex flex-col justify-start max-w-[1024px] mx-auto relative"
      >
        <TimelineComponent hightBottom="100%" lineTop={true}>
          <p className=" text-text-secondaryDark text-[18px] font-light pt-[64px] ">
            About{" />"}
          </p>

          <article className="text-[16px] font-robotoMono z-30">
            {/* 01 */}
            <div
              className="flex gap-[16px] w-[100%]"
              onMouseOver={() => setHoveringIndent("01")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <p className="text-primary-mainDark font-extralight">class </p>
              <p className="text-[#EEFF31] ">Nattida Jangpipatnavakij</p>
              <p className="text-while"> {"{"}</p>
            </div>
            {/* 02 */}
            <div
              className="flex flex-wrap"
              onMouseOver={() => setHoveringIndent("02")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <p className="text-[#3B3553] ">··</p>
              <p className="text-[#78707E] font-extralight">
                // I can, because I did.
              </p>
            </div>
            {/* 03 */}
            <div
              className="flex flex-wrap"
              onMouseOver={() => setHoveringIndent("03")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <p className="text-[#3B3553] ">··</p>
              <p className="text-[#78707E] font-extralight">
                // My vast variety of skills is continuously expanding.
              </p>
            </div>
            {/* 04 */}
            <div
              className="flex gap-[16px]"
              onMouseOver={() => setHoveringIndent("04")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <span className="flex flex-wrap">
                <p className="text-[#3B3553] ">··</p>
                <p className="text-primary-mainDark font-extralight">
                  constructor
                </p>
                <p className="text-while">{"()"}</p>
              </span>
              <p className="text-while"> {"{"}</p>
            </div>
            {/* 05 */}
            <div
              className="flex gap-[16px]"
              onMouseOver={() => setHoveringIndent("05")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <span className="flex ">
                <p className="text-[#3B3553] ">····</p>
                <p className="text-[#E3244C] font-thin">this</p>
                <p className="text-while">.</p>
                <p className="text-[#24E394]">name</p>
              </span>
              <p className="text-[#E3244C]">= </p>
              <p className="text-[#24E33A] ">'Nattida Jangpipatnavakij'</p>
            </div>
            {/* 06 */}
            <div
              className="flex gap-[16px]"
              onMouseOver={() => setHoveringIndent("06")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <span className="flex flex-wrap">
                <p className="text-[#3B3553] ">····</p>
                <p className="text-[#E3244C] font-thin">this</p>
                <p className="text-while">.</p>
                <p className="text-[#24E394]">dayOfBirth</p>
              </span>
              <p className="text-[#E3244C]">= </p>
              <p className="text-[#24E33A] ">10/11/2000</p>
            </div>
            {/* 07 */}
            <div
              className="flex gap-[16px]"
              onMouseOver={() => setHoveringIndent("07")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <span className="flex ">
                <p className="text-[#3B3553] ">····</p>
                <p className="text-[#E3244C] font-thin">this</p>
                <p className="text-while">.</p>
                <p className="text-[#24E394]">email</p>
              </span>
              <p className="text-[#E3244C]">= </p>
              <p className="text-[#24E33A]">'nattida.jangpipat@gmail.com'</p>
            </div>
            {/* 08 */}
            <span
              className="flex"
              onMouseOver={() => setHoveringIndent("08")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <p className="text-[#3B3553] ">···</p>
              <p className="text-while"> {"}"}</p>
            </span>
            {/* 09 */}
            {showTitle("workExperience", "09")}

            {/* 10 */}
            <div
              className="flex gap-[16px]"
              onMouseOver={() => setHoveringIndent("10")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <span className="flex">
                <p className="text-[#3B3553] ">····</p>
                <p className="text-primary-mainDark font-extralight">return</p>
              </span>
              <p className="text-while">{"["}</p>
            </div>
            {/* 11 - 13 */}
            {workExperienceList.map((work) => (
              <div
                className="flex gap-[16px]"
                key={work.id}
                onMouseOver={() => setHoveringIndent(work.id)}
                onMouseLeave={() => setHoveringIndent("null")}
              >
                <span className="flex">
                  <p className="text-[#3B3553] ">······</p>
                  <p className="text-while ">{"{"}</p>
                </span>
                <p className="text-[#24E33A] ">'{work.date}'</p>
                <p className="text-while ">{":"}</p>
                <p className="text-[#24E33A] ">'{work.description}'</p>
                <p className="text-while ">{"}"}</p>
              </div>
            ))}

            {/* 14 */}
            <span
              className="flex"
              onMouseOver={() => setHoveringIndent("14")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <p className="text-[#3B3553] ">····</p>
              <p className="text-while"> {"]"}</p>
            </span>

            {/* 15 */}
            <span
              className="flex"
              onMouseOver={() => setHoveringIndent("15")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <p className="text-[#3B3553] ">··</p>
              <p className="text-while"> {"}"}</p>
            </span>
            {/* 16 */}
            {showTitle("education", "16")}

            {/* 17 */}

            <div
              className="flex gap-[16px]"
              onMouseOver={() => setHoveringIndent("17")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <span className="flex">
                <p className="text-[#3B3553] ">····</p>
                <p className="text-primary-mainDark font-extralight">return</p>
              </span>
              <p className="text-while">{"["}</p>
            </div>
            {/* 18 */}
            <div
              className="flex gap-[16px]"
              onMouseOver={() => setHoveringIndent("18")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <span className="flex">
                <p className="text-[#3B3553] ">······</p>
                <p className="text-while ">{"{"}</p>
              </span>
              <p className="text-[#24E33A] ">'2019-2023'</p>
              <p className="text-while ">{":"}</p>
              <p className="text-[#24E33A] ">
                'Bangkok University - Computer Science , GPA : 3.91'
              </p>
              <p className="text-while ">{"}"}</p>
            </div>
            {/* 19 */}
            <span
              className="flex"
              onMouseOver={() => setHoveringIndent("19")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <p className="text-[#3B3553] ">····</p>
              <p className="text-while"> {"]"}</p>
            </span>

            {/* 20 */}
            <span
              className="flex"
              onMouseOver={() => setHoveringIndent("20")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <p className="text-[#3B3553] ">··</p>
              <p className="text-while"> {"}"}</p>
            </span>
            {/* 21 */}
            {showTitle("skills", "21")}

            {/* 22 */}
            <div
              className="flex gap-[16px]"
              onMouseOver={() => setHoveringIndent("22")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <span className="flex">
                <p className="text-[#3B3553] ">····</p>
                <p className="text-primary-mainDark font-extralight">return</p>
              </span>
              <p className="text-while">{"["}</p>
              <p className="text-[#24E33A] ">
                'HTML/CSS/JS', 'TypeScript', 'ReactJS', 'NextJS', 'Node.js',
                'Bootstrap/Tailwind', 'Github/GitFlow', 'npm/yarn/pnpm',
                'Python', 'PHP', 'C#', 'MySQL/MongoDB', 'Database Systems',
                'Diagrams.net', 'Figma', 'Miro','Photoshop', 'Illustrator',
                'VScode', 'Motion design', 'UX/UI', 'Design System',
                'Bootstrap', 'Material UI'
              </p>
            </div>
            {/* 23 */}
            <span
              className="flex"
              onMouseOver={() => setHoveringIndent("23")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              <p className="text-[#3B3553] ">··</p>
              <p className="text-while"> {"}"}</p>
            </span>

            {/* 24 */}
            <p
              className="text-while"
              onMouseOver={() => setHoveringIndent("24")}
              onMouseLeave={() => setHoveringIndent("null")}
            >
              {" "}
              {"}"}
            </p>
          </article>
        </TimelineComponent>
      </div>
    </section>
  );
};

export default About;
