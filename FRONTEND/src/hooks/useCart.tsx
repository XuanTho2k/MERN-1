import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useLocalStorage } from "./useStorage";
import CartService from "@/services/cart";
import { debounce, reduce, update } from "lodash";
import { useMatch } from "react-router-dom";
import { string } from "joi";
import { ChangeEvent } from "react";

const useCart = () => {
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;

  const { data, ...rest } = useQuery({
    queryKey: ["CARTS_KEY", userId],
    queryFn: async () => {
      const { data } = await CartService.getByUserId(
        userId
      );
      console.log(data);
      return data;
    },
  });
  const updateQuantityDebounce = debounce(
    async (productId, quantity: number) => {
      await CartService.updateProductQuantity({
        userId,
        productId,
        quantity,
      });
      queryClient.invalidateQueries({
        queryKey: ["CARTS_KEY", userId],
      });
    },
    300
  );

  const { mutate } = useMutation({
    mutationFn: async ({
      action,
      productId,
    }: {
      action: string;
      productId: string;
    }) => {
      switch (action) {
        case "INCREMENT":
          await CartService.increaseProductQuantity({
            userId,
            productId,
          });
          break;
        case "DECREMENT":
          await CartService.decreaseProductQuantity({
            userId,
            productId,
          });
          break;
        case "REMOVE":
          console.log(userId, productId);
          await CartService.removeItem({
            userId,
            productId,
          });
          break;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CARTS_KEY", userId],
      });
    },
  });
  const handleQuantityChange = (
    productId: string,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const quantity = parseInt(e.target.value);
    updateQuantityDebounce(productId, quantity);
  };
  const calculateTotal = () => {
    if (!data || !data.products) return 0;
    return reduce(
      data.products,
      (total, product) =>
        total + product.price * product.quantity,
      0
    );
  };
  return {
    data,
    mutate,
    calculateTotal,
    handleQuantityChange,
    ...rest,
  };
};

export default useCart;
