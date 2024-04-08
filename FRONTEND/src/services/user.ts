import instance from "@/configs/axios";

class UserServices {
  static signUp = async (dataSignUp) => {
    try {
      console.log("helo");
      const { data } = await instance.post(
        "/auth/user/signup",
        dataSignUp
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };
}

export default UserServices;
