import instance from "@/configs/axios";
class CartService {
  static getByUserId = async (userId: string | number) => {
    try {
      const res = await instance.get(`/carts/${userId}`);
      return res;
    } catch (err) {
      return [];
    }
  };
  static addItem = async (bodyData) => {
    try {
      const res = await instance.post(
        `/carts/add-to-cart`,
        bodyData
      );
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  static removeItem = async (bodyData) => {
    try {
      const res = await instance.delete(`/carts`, {
        data: bodyData,
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  static updateProductQuantity = async (bodyData) => {
    try {
      const res = await instance.put(`/carts`, bodyData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  static increaseProductQuantity = async (bodyData) => {
    try {
      console.log(bodyData);
      const res = await instance.post(
        `/carts/increase-quantity`,
        bodyData
      );
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  static decreaseProductQuantity = async (bodyData) => {
    try {
      const { data } = await instance.post(
        "/carts/decrease-quantity",
        bodyData
      );
      return data;
    } catch (error) {
      console.error(error);
    }
  };
}

export default CartService;
