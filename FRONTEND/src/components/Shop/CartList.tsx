import useCart from "@/hooks/useCart";
import { useCounter } from "@/hooks/useCouter";
import { useLocalStorage } from "@/hooks/useStorage";
import { IProduct } from "@/interfaces/product";
import CartService from "@/services/cart";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";

const CartList = () => {
  const {
    data,
    mutate,
    handleQuantityChange,
    calculateTotal,
    isLoading,
    isError,
  } = useCart();

  if (isLoading) return <div>Loading...</div>;
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
                      >
                        <img
                          src="/assets/icons/bin.svg"
                          alt=""
                        />
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
