"use client";

interface timelineType {
  children: any;
  hightBottom: string | null;
  lineTop?: Boolean;
}

const timelineComponent = ({
  children,
  hightBottom,
  lineTop,
}: timelineType) => {
  return (
    <>
      <div className="flex ">
        <div className="flex flex-col items-center">
          {lineTop && (
            <span className="h-[80px] w-[2px] bg-primary-mainDark"></span>
          )}

          <span className="w-[9px] h-[9px]  rounded-full border-2 border-primary-mainDark bg-[#18191E]"></span>
          <span
            style={{ height: `${hightBottom}` }}
            className="w-[2px] bg-primary-mainDark"
          ></span>
        </div>
        <div className="ml-[24px] sm:ml-2">{children}</div>
      </div>
    </>
  );
};

export default timelineComponent;
