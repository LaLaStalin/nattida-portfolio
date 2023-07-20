import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

const CardWork = () => {
  return (
    <div className="flex">
      <div className="flex flex-col shadow-inherit shadow-[#6b7280] ">
        <span className="text-[24px] font-bold py-[8px] px-[8px] w-[120px]">
          Luna LED Web Application
        </span>
        <span className="w-[151.49px] h-[3px] bg-while mt-[8px] mb-[12px]" />
        <p className="text-[14px] text-text-secondaryDark">00</p>
        <EastIcon className="text-[14px] text-text-secondaryDark" />
      </div>
      <Image
        src="/assets/work/Luna-Home.png"
        alt="cob-circlr-100w"
        width={410}
        height={230}
        className="ml-[-50px]"
      />
    </div>
  );
};
export default CardWork;
