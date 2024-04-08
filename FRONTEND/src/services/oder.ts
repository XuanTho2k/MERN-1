import instance from "@/configs/axios";

class OrderServices {
  static async getAll() {
    try {
      const { data } = await instance.get("/order");
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  static async create(order) {
    try {
      console.log(order);
      const { data } = await instance.post("/order", order);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  static async getById(id: string | number) {
    try {
      const { data } = await instance.get(`/order/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
export default OrderServices;
