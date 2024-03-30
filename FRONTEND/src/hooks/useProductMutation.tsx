import ProductDetails from "@/components/Shop/ProductDetails";
import { IProduct } from "@/interfaces/product";
import {
  createProduct,
  deleteProductById,
  editProductById,
} from "@/services/product";
import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
type useProductMutationProps = {
  action: "EDIT" | "DELETE" | "CREATE";
};
const useProductMutation = ({
  action,
}: useProductMutationProps) => {
  const queryClient = useQueryClient();

  const form = useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      switch (action) {
        case "EDIT":
          await editProductById(product);
          break;
        case "DELETE":
          await deleteProductById(product._id);
          break;
        case "CREATE":
          await createProduct(product);
          break;

        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["PRODUCTS_KEY"],
      });
    },
  });
  const onSubmit = (product: IProdut) => {
    mutate(product);
  };
  return { form, mutate, onSubmit, ...rest };
};

export default useProductMutation;
