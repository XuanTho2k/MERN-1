import {
  getAllProducts,
  getProductByCategoryId,
} from "@/services/product";
import { useQuery } from "@tanstack/react-query";

const useProductsCategory = (options) => {
  console.log(options);
  const { data, ...rest } = useQuery({
    queryKey: ["PRODUCT_CATEGORY", options],
    queryFn: async () => {
      return options.id
        ? getProductByCategoryId(options.id)
        : getAllProducts(options);
    },
  });
  return { data, ...rest };
};

export default useProductsCategory;
