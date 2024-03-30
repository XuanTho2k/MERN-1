import { ICategory } from "@/interfaces/category";
import CategoryService from "@/services/category";
import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const useCategoryQuery = (id?: string | number) => {
  const queryClient = useQueryClient();

  const { data, ...rest } = useQuery({
    queryKey: ["CATEGORY_KEY", id],
    queryFn: async () => {
      return id
        ? await CategoryService.getById(id)
        : await CategoryService.getAll();
    },
  });
  const { mutate } = useMutation({
    mutationFn: async ({
      action,
      category,
    }: {
      action: string;
      category: ICategory;
    }) => {
      switch (action) {
        case "EDIT":
          await CategoryService.editById(category._id);
          break;
        case "ADD":
          await CategoryService.add(category);
          break;
        case "REMOVE":
          await CategoryService.deleteById(category._id);
          break;
        case "SOFT-REMOVE":
          await CategoryService.softRemoveById(
            category._id
          );
          break;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CATEGORY_KEY"],
      });
    },
  });
  return { data, mutate, ...rest };
};

export default useCategoryQuery;
