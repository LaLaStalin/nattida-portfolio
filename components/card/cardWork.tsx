import Image from "next/image";
import EastIcon from "@mui/icons-material/East";

const CardWork = () => {
  return (
    <div className="flex relative z-10">
      <span
        className="absolute bottom-0 w-[13%] h-full"
        style={{
          boxShadow: "20px 20px 100px 20px rgb(26,21,38)",
        }}
      ></span>
      <div className="flex flex-col justify-end z-10 rounded-full">
        <span className="text-[24px] font-bold py-[8px] pr-[8px] w-[120px]">
          Luna LED
        </span>
        <span className="w-[151.49px] h-[3px] bg-while mt-[8px] mb-[12px]" />
        <p className="text-[14px] text-text-secondaryDark font-robotoMono">
          00
        </p>
        <EastIcon className="text-[14px] text-text-secondaryDark" />
      </div>
      <Image
        src="/assets/work/Luna-Home.png"
        alt="cob-circlr-100w"
        width={410}
        height={230}
        className="ml-[-80px]"
      />
    </div>
  );
};
export default CardWork;
