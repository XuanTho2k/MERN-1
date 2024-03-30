import {
  getAllProducts,
  getProductByCategoryId,
} from "@/services/product";
import { useQuery } from "@tanstack/react-query";

const useProductsCategory = (id?: string | number) => {
  //check id
  console.log(id);
  const { data, ...rest } = useQuery({
    queryKey: ["PRODUCT_CATEGORY", id],
    queryFn: async () => {
      return id === undefined
        ? getAllProducts()
        : getProductByCategoryId(id);
    },
  });
  return { data, ...rest };
};

export default useProductsCategory;
