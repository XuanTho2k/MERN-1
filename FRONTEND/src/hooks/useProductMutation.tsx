import ProductDetails from "@/components/Shop/ProductDetails";
import { IProduct } from "@/interfaces/product";
import {
  createProduct,
  deleteProductById,
  editProductById,
} from "@/services/product";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
type useProductMutationProps = {
  action: "EDIT" | "DELETE" | "CREATE";
};
const useProductMutation = ({
  action,
}: useProductMutationProps) => {
  const form = useForm();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      console.log("fdsfsd");
      switch (action) {
        case "EDIT":
          console.log("hello");
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
  });
  const onSubmit = (product: IProdut) => {
    console.log("helo");
    mutate(product);
  };
  return { form, mutate, onSubmit, ...rest };
};

export default useProductMutation;
