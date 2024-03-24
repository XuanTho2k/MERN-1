import { IProduct } from "./../interfaces/product";
import instance from "src/configs/axios";
import { IProduct } from "@/interfaces/product";
export const getAllProducts = async (): Promise<
  IProduct[]
> => {
  try {
    const res = await instance.get("/products");
    return res.data.products;
  } catch (error) {
    return [];
  }
};

export const getProductById = async (
  id?: number | string
): Promise<IProduct | null> => {
  try {
    const res = await instance.get(`/products/${id}`);
    return res.data.product;
  } catch (error) {
    return null;
  }
};

export const editProductById = async (
  id?: number | string
) => {
  try {
    //  const data = await instance.put(`/products/${id}`);
  } catch (err) {
    console.log(err);
  }
};
