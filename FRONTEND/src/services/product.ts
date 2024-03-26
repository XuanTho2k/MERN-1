import { ProductDetails } from "@/components/Shop/ProductDetails";
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

export const createProduct = async (product: IProduct) => {
  try {
    const data = await instance.post("/products", product);
    return data.data;
  } catch (err) {
    return console.log(err);
  }
};

export const editProductById = async (
  product: IProduct
) => {
  try {
    const { _id, __v, ...updateData } = product;
    console.log(updateData);
    const data = await instance.put(
      `/products/edit/${product._id}`,
      updateData
    );
    console.log("Success ");
    return data.data;
  } catch (err) {
    console.log(err);
  }
};

export const softRemoveProduct = async (
  product: IProduct
) => {
  try {
    const data = await instance.put(
      `/products/edit/${product._id}`,
      {
        isHidden: true,
      }
    );
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
export const deleteProductById = async (
  id: number | string
) => {
  try {
    const data = await instance.delete(
      `/products/delete/${id}`
    );
    return data.data;
  } catch (err) {
    console.log(err);
  }
};
