import {
  getAllProducts,
  getProductById,
} from "@/services/product";
import { useQuery } from "@tanstack/react-query";

export const useProductQuery = (options) => {
  const { data, ...rest } = useQuery({
    queryKey: ["PRODUCTS_KEY", options],
    queryFn: async () => {
      return options.id !== undefined
        ? await getProductById(options.id)
        : await getAllProducts(options);
    },
  });
  return { data, ...rest };
};
