import useCart from "@/hooks/useCart";
import { IProduct } from "@/interfaces/product";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./CartList.module.css";
import Loading from "../Loading";

const CartList = () => {
  const {
    data,
    mutate,
    handleQuantityChange,
    calculateTotal,
    isLoading,
    isError,
  } = useCart();
  console.log(data);

  if (isLoading) return <Loading />;
  if (isError) return <div>Error...</div>;

  return (
    <div className="max-w-[1440px] mx-auto flex flex-row gap-[20px]  mb-[80px]">
      <div className="ml-[110px]">
        <table className="table-fixed w-[817px]">
          <thead>
            <tr className="bg-[#F9F1E7] h-[55px] ">
              <th></th>
              <th className="w-[110px]">Product</th>
              <th className="w-[200px]">Price</th>
              <th className="w-[80px]">Quantity</th>
              <th className="w-[200px]">Subtotal</th>
              <th className="w-[50px]"></th>
            </tr>
          </thead>
          <tbody>
            {data?.products.map(
              (item: IProduct, idx: number) => {
                return (
                  <tr key={idx} className="">
                    <td>
                      <img
                        src={item.thumbnail}
                        className="w-[105px] h-[105px]"
                        alt=""
                      />
                    </td>
                    <td className="text-[#9f9f9f] text-center">
                      {item.title}
                    </td>
                    <td className="text-[#9f9f9f] text-center">
                      {item.price} $
                    </td>
                    <td className="px-auto">
                      <div className="border border-gray-300 w-[80px] h-[64px] px-2 py-3 flex flex-row justify-between aligns-center gap-[15px]  text-[16px] rounded-[0.6rem] pt-[20px]">
                        <button
                          className="h-[24px]"
                          onClick={() =>
                            mutate({
                              action: "DECREMENT",
                              productId: item._id,
                            })
                          }
                        >
                          -
                        </button>
                        <span className="h-[24px]">
                          {item.quantity}
                        </span>
                        <button
                          className="h-[24px]"
                          onClick={() =>
                            mutate({
                              action: "INCREMENT",
                              productId: item._id,
                            })
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="text-center">
                      {item.price * item.quantity} d
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          mutate({
                            action: "REMOVE",
                            productId: item._id,
                          })
                        }
                        className={styles.bin_button}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 39 7"
                          className={styles.bin_top}
                        >
                          <line
                            strokeWidth={4}
                            stroke="white"
                            y2={5}
                            x2={39}
                            y1={5}
                          />
                          <line
                            strokeWidth={3}
                            stroke="white"
                            y2="1.5"
                            x2="26.0357"
                            y1="1.5"
                            x1={12}
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 33 39"
                          className={styles.bin_bottom}
                        >
                          <mask
                            fill="white"
                            id="path-1-inside-1_8_19"
                          >
                            <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z" />
                          </mask>
                          <path
                            mask="url(#path-1-inside-1_8_19)"
                            fill="white"
                            d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z"
                          />
                          <path
                            strokeWidth={4}
                            stroke="white"
                            d="M12 6L12 29"
                          />
                          <path
                            strokeWidth={4}
                            stroke="white"
                            d="M21 6V29"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 89 80"
                          className={styles.garbage}
                        >
                          <path
                            fill="white"
                            d="M20.5 10.5L37.5 15.5L42.5 11.5L51.5 12.5L68.75 0L72 11.5L79.5 12.5H88.5L87 22L68.75 31.5L75.5066 25L86 26L87 35.5L77.5 48L70.5 49.5L80 50L77.5 71.5L63.5 58.5L53.5 68.5L65.5 70.5L45.5 73L35.5 79.5L28 67L16 63L12 51.5L0 48L16 25L22.5 17L20.5 10.5Z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      <div className="bg-[#F9F1E7] w-[393px] h-[390px] flex flex-col justify-start items-center gap-[40px]">
        <span className="text-[32px] mt-[20px]">
          Cart Totals
        </span>
        <div className="flex flex-row justify-around gap-[50px] mt-[10px]">
          <span>Subtotal</span>
          <span className="text-[#9f9f9f]">
            25.000.000d
          </span>
        </div>
        <div className="flex flex-row justify-around gap-[50px]">
          <span>Total</span>
          <span className="text-[#B88E2F] text-[20px]">
            {calculateTotal()} d
          </span>
        </div>
        <Link
          to="/checkout"
          className="border text-[20px] px-14 py-2 border-black rounded-xl hover:bg-[#B88E2F] hover:text-white duration-300 w-[225px]"
        >
          Check Out
        </Link>
      </div>
    </div>
  );
};

export default CartList;
