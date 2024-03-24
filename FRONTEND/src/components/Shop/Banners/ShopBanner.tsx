import React from "react";

const ShopBanner = () => {
  return (
    <div>
      <section className=" banner  relative">
        <div className="z-10 absolute  left-[700px] top-[150px] text-[48px]">
          Shop
        </div>
        <div className="z-10 absolute left-[700px] text-[16px] top-[250px]">
          Home {">"} Shop
        </div>
        <img
          src="/assets/banners/ShopBanner.svg"
          className="banner__img z-1000 opacity-50  "
        />
        <div className="absolute bottom-0 h-[100px] bg-[#F9F1E7] w-full ">
          <div className="flex flex-row gap-[30px] mx-[120px] my-[40px]">
            <div className="flex flex-row gap-[15px] ">
              <img src="/assets/icons/Vector.svg" alt="" />
              <span className="text-[20px]">Filter</span>
            </div>
            <img src="/assets/icons/dotdot.svg" alt="" />
            <img src="/assets/icons/idk.svg" alt="" />
            <img
              className="w-[5px]"
              src="/assets/Line.svg"
              alt=""
            />
            <span className=" ">
              Showing 1-16 of 32 results
            </span>
            <div className="flex flex-row gap-[15px] ml-[520px]">
              <span>Show</span>
              <span className="bg-white opacity-50 ">
                16
              </span>
              <span>Short by</span>
              <span className="bg-white opacity-50 px-">
                Default
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopBanner;
