import { useCounter } from "@/hooks/useCouter";
import { useProductQuery } from "@/hooks/useProductsQuery";
import { IProduct } from "@/interfaces/product";
import React from "react";
import { useParams } from "react-router-dom";
const ProductDetails: React.FC = () => {
  const { id } = useParams();
  const {
    data: prod,
    isLoading,
    isError,
  } = useProductQuery(id);

  const { count, increase, decrement, increment } =
    useCounter();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className=" px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-row gap-[60px]">
            <div className="flex flex-row gap-[30px] ml-[100px]">
              <div className="flex flex-col gap-[30px]  ">
                {prod.images?.map((img: string) => {
                  return (
                    <div className="h-20">
                      <img
                        alt="ecommerce"
                        className="w-[76px] h-[80px] object-cover object-center rounded border border-gray-200"
                        src={img}
                      />
                    </div>
                  );
                })}
              </div>
              <img
                alt="ecommerce"
                className=" w-[423px]  object-cover object-center rounded border border-gray-200"
                src={prod?.thumbnail}
              />
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10  lg:mt-0">
              <h2
                className="text-[24px]
               title-font text-gray-500 tracking-widest"
              >
                {prod.brand}
              </h2>
              <h1 className="text-gray-900 text-[42px] title-font font-medium mb-1">
                {prod.title}
              </h1>

              <div className="flex mb-4">
                <span className="flex items-center gap-[10px]">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-gray-600 ml-3">
                    {prod.rating} ratings
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed h-[80px]">
                {prod.description}
              </p>
              <div className="flex flex-column">
                <span className="mr-3 text-[#9F9F9F]">
                  SKU : SS001
                </span>
              </div>
              <span className="mr-3 text-[#9F9F9F]">
                Tags : Iphone, Apple, Smartphone
              </span>
              <div className="flex mt-6  flex-col gap-[20px] pb-5 border-b-2 border-gray-200  mb-5">
                <div className="flex flex-col gap-[20px]">
                  <span className="mr-3 text-[14px] text-[#9F9F9F]">
                    Color
                  </span>
                  <div className="flex flex-row gap-[10px]">
                    <button className="border-2 border-gray-300 rounded-full w-[30px] h-[30px] active:border-none focus:ring focus:ring-blue-300" />
                    <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-[30px] h-[30px] focus:outline-blue focus:ring focus:ring-blue-300" />
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-[30px] h-[30px] focus:outline-none focus:ring focus:ring-blue-300" />
                  </div>
                </div>
                <div className="flex flex-col gap-[10px] ">
                  <span className="mr-3">Size</span>
                  <div className="flex flex-row gap-[10px]">
                    <button className="px-4 py-2 bg-[#F9F1E7] duration-300 hover:bg-[#B88E2F] hover:text-white rounded-[1rem] checked:bg-[#B88E2F] active:bg-white focus:bg-[#B88E2F] focus:text-white">
                      L
                    </button>
                    <button className="px-4 py-2 bg-[#F9F1E7] duration-300 hover:bg-[#B88E2F] hover:text-white rounded-[1rem] checked:bg-[#B88E2F] active:bg-white focus:text-white focus:bg-[#B88E2F]">
                      XL
                    </button>
                    <button className="px-4 py-2 bg-[#F9F1E7] duration-300 hover:bg-[#B88E2F] hover:text-white rounded-[1rem] checked:bg-[#B88E2F] active:bg-white focus:text-white focus:bg-[#B88E2F] ">
                      XS
                    </button>
                  </div>
                </div>
                <div className="flex flex-row gap-[10px]">
                  <div className="border border-gray-300 w-[123px] h-[64px] px-2 py-3 flex flex-row justify-between aligns-center gap-[15px]  text-[16px] rounded-[0.6rem] pt-[20px]">
                    <button
                      className="h-[24px]"
                      onClick={decrement}
                    >
                      -
                    </button>
                    <span className="h-[24px]">
                      {" "}
                      {count}
                    </span>
                    <button
                      className="h-[24px]"
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                  <button className="border text-[20px] px-10 py-2 border-black rounded-xl hover:bg-[#B88E2F] hover:text-white duration-300 w-[215px]">
                    Add To Cart
                  </button>
                  <button className="border text-[20px] px-10 py-2 border-black rounded-xl hover:bg-[#B88E2F] hover:text-white duration-300 w-[215px]">
                    + Compare
                  </button>
                </div>
              </div>
              <div className="flex">
                <span className="title-font  font-medium text-2xl text-gray-900 product-price__old">
                  $ {prod.price}
                </span>
                <span className="title-font ml-2 font-medium text-2xl text-gray-900 ">
                  ${" "}
                  {prod.price -
                    (prod.price * prod.discountPercentage ??
                      0) /
                      100}
                </span>

                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-[1440px] mt-[80px] flex flex-col justify-center">
            <div className="flex flex-row gap-[120px] justify-center ml-[110px]">
              <button className="text-[24px] text-[#9F9F9F] focus:text-black  duration-300">
                Description
              </button>
              <button className="text-[24px] text-[#9F9F9F] focus:text-black  duration-300">
                Additional Information
              </button>
              <button className="text-[24px] text-[#9F9F9F] focus:text-black  duration-300">
                Reviews [5]
              </button>
            </div>
            <div className="ml-[220px] mt-[40px] text-[#9f9f9f] w-[1026px] leading-[24px] ">
              Embodying the raw, wayward spirit of rock ‘n’
              roll, the Kilburn portable active stereo
              speaker takes the unmistakable look and sound
              of Marshall, unplugs the chords, and takes the
              show on the road.
              <br />
              <br />
              Weighing in under 7 pounds, the Kilburn is a
              lightweight piece of vintage styled
              engineering. Setting the bar as one of the
              loudest speakers in its class, the Kilburn is
              a compact, stout-hearted hero with a
              well-balanced audio which boasts a clear
              midrange and extended highs for a sound that
              is both articulate and pronounced. The
              analogue knobs allow you to fine tune the
              controls to your personal preferences while
              the guitar-influenced leather strap enables
              easy and stylish travel.
            </div>
            <div className="ml-[110px] mt-[40px] flex flex-row gap-[20px]">
              <img
                className="w-[605px] h-[408px]"
                src="https://picsum.photos/200/300"
                alt=""
              />

              <img
                className="w-[605px] h-[408px]"
                src="https://picsum.photos/200/300"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* End of Product Details */}

        {/* Start of Additional Product */}
      </section>
    </div>
  );
};

export default ProductDetails;
