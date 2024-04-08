import instance from "@/configs/axios";

class CategoryService {
  static getAll = async () => {
    try {
      const { data } = await instance.get("/category");
      return data.categories;
    } catch (err) {
      return [];
    }
  };
  static getById = async (id: string | number) => {
    try {
      const { data } = await instance.get(
        `/category/${id}`
      );
      return data.category;
    } catch (error) {
      console.log(error);
    }
  };
  static add = async (dataCate) => {
    try {
      const { data } = await instance.post(
        `/category`,
        dataCate
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  static editById = async (id: string | number) => {
    try {
      const { data } = await instance.put(`/edit/${id}`);
      return data.categories;
    } catch (error) {
      console.log(error);
    }
  };
  static deleteById = async (id: string | nubmer) => {
    try {
      const { data } = await instance.delete(
        `/delete/${id}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  static softRemoveById = async (id: string | number) => {
    try {
      const { data } = await instance.put(`/hide/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  };
}

export default CategoryService;
