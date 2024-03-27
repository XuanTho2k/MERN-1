import UserModel from "../models/UserModel";

class UserController {
  static getAllUsers = async (req, res) => {
    try {
      const data = await UserModel.find();
      return res.status(200).json({
        message: "Users fetched successfully",
        data,
      });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  };
  static createUser = async (req, res) => {
    try {
      const data = await UserModel.create(req.body);
      return res.status(200).json({
        message: "User created successfully",
        data,
      });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  };
  static getUserById = async (req, res) => {
    try {
      const data = await UserModel.findById(req.params.id);
      return res.status(200).json({
        message: "User fetched",
      });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  };
  static editUser = async (req, res) => {
    const { error } = editUserSchema.validation(req.body);
    if (error) {
      const messages = error.details.map(
        (err) => err.message
      );
      return res.status(400).json({
        messages,
      });
    }
    try {
      const data = await UserModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      return res.status(200).json({
        message: "User updated successfully",
        data,
      });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  };
  static deleteUser = async (req, res) => {
    try {
      const data = await UserModel.findByIdAndDelete(
        req.params.id
      );
      return res.status(200).json({
        message: "User deleted successfully",
        data,
      });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  };
  static softRemoveUser = async (req, res) => {
    try {
      const data = await UserModel.findByIdAndUpdate(
        req.params.id,
        {
          isHidden: true,
        }
      );
      return res.status(200).json({
        message: "User removed",
      });
    } catch (err) {
      return res.status(400).json({
        message: err.message,
      });
    }
  };
}
export default UserController;
