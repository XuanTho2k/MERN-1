const Banner = () => {
  return (
    <div>
      <section className=" banner  relative">
        <div className="z-10 absolute  left-[600px] top-[150px] text-[48px]">
          Trang chủ
        </div>
        <div className="z-10 absolute left-[700px] text-[16px] top-[300px]">
          Home
        </div>
        <img
          src="https://picsum.photos/id/10/1440/500"
          className="banner__img z-1000 opacity-50 "
        />
      </section>
    </div>
  );
};

export default Banner;
