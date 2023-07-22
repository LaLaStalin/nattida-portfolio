import { TimelineComponent } from "@/components";
import { Content } from "next/font/google";

const About = () => {
  const contentList: string[] = ["01", "02", "03", "04", "05", "06", "07"];
  const workExperienceList = [
    {
      date: "06/2023-Present",
      description:
        "Front-End Developer at asteroid group (Thailand)  Co., Ltd.",
    },
    {
      date: "01/2023-05/2023",
      description: "UX/UI Designer at G-able ( Blend Data Co., Ltd. )",
    },
    {
      date: "08/2021-11/2022",
      description: "Project Coordinator at Thai Programmer Association",
    },
  ];

  const showTitle = (title: string) => {
    return (
      <div className="flex gap-[16px]">
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
    <section id="about" className="bg-[#14121c] px-[16px]">
      {/* Column Content*/}
      <div className="absolute pt-[54px] w-full z-1 ">
        <p className="text-[18px] pl-[220px] font-robotoMono font-thin text-[#3B3553] hover:bg-[#231d285c] z-1">
          01
        </p>
        {contentList.map((index) => (
          <p className="sm:hidden text-[18px] pl-[220px] font-robotoMono font-thin text-[#3B3553] hover:bg-[#231d285c] {}z-1">
            {index}
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
          <p className=" text-text-secondaryDark text-[18px] font-light pt-[30px] ">
            About{" />"}
          </p>

          <article className="text-[16px] font-robotoMono z-30">
            {/* 01 */}
            <div className="flex gap-[16px]  w-[100%]">
              <p className="text-primary-mainDark font-extralight">class </p>
              <p className="text-[#EEFF31] ">Nattida Jangpipatnavakij</p>
              <p className="text-while"> {"{"}</p>
            </div>
            {/* 02 */}
            <div className="flex flex-wrap">
              <p className="text-[#3B3553] ">··</p>
              <p className="text-[#78707E] font-extralight">
                // I can, because I did.
              </p>
            </div>
            {/* 03 */}
            <div className="flex flex-wrap">
              <p className="text-[#3B3553] ">··</p>
              <p className="text-[#78707E] font-extralight">
                // My vast variety of skills is continuously expanding.
              </p>
            </div>
            {/* 04 */}
            <div className="flex gap-[16px] ">
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
            <div className="flex gap-[16px]">
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
            <div className="flex gap-[16px]">
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
            <div className="flex gap-[16px]">
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
            <span className="flex">
              <p className="text-[#3B3553] ">···</p>
              <p className="text-while"> {"}"}</p>
            </span>
            {/* 09 */}
            {showTitle("workExperience")}

            {/* 10 */}
            <div className="flex gap-[16px]">
              <span className="flex">
                <p className="text-[#3B3553] ">····</p>
                <p className="text-primary-mainDark font-extralight">return</p>
              </span>
              <p className="text-while">{"["}</p>
            </div>
            {/* 11 - 15 */}
            {workExperienceList.map((work) => (
              <div className="flex gap-[16px]">
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

            {/* 16 */}
            <span className="flex ">
              <p className="text-[#3B3553] ">····</p>
              <p className="text-while"> {"]"}</p>
            </span>

            {/* 17 */}
            <span className="flex ">
              <p className="text-[#3B3553] ">··</p>
              <p className="text-while"> {"}"}</p>
            </span>
            {/* 18 */}
            {showTitle("education")}

            {/* 19 */}

            <div className="flex gap-[16px]">
              <span className="flex">
                <p className="text-[#3B3553] ">····</p>
                <p className="text-primary-mainDark font-extralight">return</p>
              </span>
              <p className="text-while">{"["}</p>
            </div>
            {/* 20 */}
            <div className="flex gap-[16px]">
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
            {/* 21 */}
            <span className="flex">
              <p className="text-[#3B3553] ">····</p>
              <p className="text-while"> {"]"}</p>
            </span>

            {/* 22 */}
            <span className="flex">
              <p className="text-[#3B3553] ">··</p>
              <p className="text-while"> {"}"}</p>
            </span>
            {/* 23 */}
            {showTitle("skills")}

            {/* 24 */}
            <div className="flex gap-[16px]">
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
            {/* 25 */}
            <span className="flex">
              <p className="text-[#3B3553] ">··</p>
              <p className="text-while"> {"}"}</p>
            </span>

            {/* 26 */}
            <p className="text-while"> {"}"}</p>
          </article>
        </TimelineComponent>
      </div>
    </section>
  );
};

export default About;
