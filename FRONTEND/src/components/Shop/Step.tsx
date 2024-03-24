import React from "react";

const Step = () => {
  return (
    <div className="bg-[#FAF3EA] h-[100px] max-w-[1440px] flex flex-row gap-[30px] mx-auto pl-[110px] pt-[40px]">
      <span className="text-[#9F9F9F]">Home</span>
      <span>{">"}</span>
      <span className="text-[#9F9F9F]">Shop</span>
      <span>{">"}</span>
      <img
        src="/assets/icons/Line.svg"
        className="h-[25px]"
        alt=""
      />
      <span>IPhones</span>
    </div>
  );
};

export default Step;
