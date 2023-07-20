"use client";

interface timelineType {
  children: any;
  hightBottom: string | null;
  lineTop?: Boolean;
}

const TimelineComponent = ({
  children,
  hightBottom,
  lineTop,
}: timelineType) => {
  return (
    <>
      <div className="flex ">
        <div className="flex flex-col items-center">
          {lineTop && <span className="h-[38px] w-[1px] bg-while"></span>}

          <span className="w-[9px] h-[9px]  rounded-full border-2 border-primary-mainDark bg-[#18191E]"></span>
          <span
            style={{ height: `${hightBottom}` }}
            className="w-[1px] bg-while"
          ></span>
        </div>
        <div className="ml-[24px]">{children}</div>
      </div>
    </>
  );
};

export default TimelineComponent;
