import React from "react";

const CartBanner = () => {
  return (
    <section className=" banner  relative">
      <img
        src="/assets/icons/smLogo.svg"
        className="absolute left-[700px] top-[80px]"
        alt=""
      />
      <div className="z-10 absolute  left-[690px] top-[140px] text-[48px]">
        Cart
      </div>
      <div className="z-10 absolute left-[690px] text-[16px] top-[210px]">
        Home {">"}{" "}
        <span className="text-[#9f9f9f]">Cart</span>
      </div>
      <img
        src="/assets/banners/ShopBanner.svg"
        className=" w-full z-1000 opacity-80 h-[316px] "
      />
    </section>
  );
};

export default CartBanner;
