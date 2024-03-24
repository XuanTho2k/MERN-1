import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  StatusCodes,
  BAD_REQUEST,
  OK,
} from "http-status-codes";
import User from "../models/UserModel";
import {
  signupSchema,
  signinSchema,
} from "../validations/auth";
class AuthController {
  static userSignup = async (req, res) => {
    const { email, username, password, confirmPassword } =
      req.body;
    const { error } = signupSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const messages = error.details.map(
        (err) => err.message
      );
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ messages });
    }
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Email already exist" });
    }
    const hashedPassword = await bcryptjs.hash(
      password,
      12
    );
    const role =
      (await User.countDocuments({})) === 0
        ? "admin"
        : "user";
    const user = await User.create({
      ...req.body,
      password: hashedPassword,
      role,
    });
    if (user) {
      return res.status(StatusCodes.CREATED).json({
        message: "User created successfully",
        user,
      });
    }
  };

  static userSignin = async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const { error } = signinSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const messages = error.details.map(
        (err) => err.message
      );
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ messages });
    }
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Invalid email or password" });
      }
      const isPasswordMatch = await bcryptjs.compare(
        password,
        user.password
      );
      if (!isPasswordMatch) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: "Invalid email or password",
        });
      }

      const token = jwt.sign({ id: user._id }, "123456", {
        expiresIn: "1h",
      });
      return res.status(StatusCodes.OK).json({
        message: "User logged in successfully",
        token,
        user,
      });
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: err.message });
    }
  };
}
export default AuthController;
