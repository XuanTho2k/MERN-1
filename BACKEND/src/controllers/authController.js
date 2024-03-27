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
import { validAuth } from "../utils/validAuth";
import {
  errorMessages,
  successMessages,
} from "../constants/messages";
import { hashPassword } from "../utils/hashPassword";
class AuthController {
  static userSignup = async (req, res, next) => {
    const { email, password } = req.body;

    //check if the input is valid
    validAuth(req.body, signupSchema);

    //check if the email already exist
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: errorMessages.EMAIL_EXISTS });
    }

    //hash the password
    const hashPassword = await hashPassword(password);

    //create the user
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
        message: successMessages.CREATE_SUCCESS,
        user,
      });
    }
  };

  static userSignin = async (req, res, next) => {
    const { email, password } = req.body;
    // Check if the user input is valid
    validAuth(req.body, signinSchema);

    try {
      // Check if the user exist
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: errorMessages.NOT_FOUND });
      }

      //Check if the password match
      const isPasswordMatch = await bcryptjs.compare(
        password,
        user.password
      );
      if (!isPasswordMatch) {
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: errorMessages.INVALID_PASSWORD,
        });
      }

      //Generate token
      const token = jwt.sign({ id: user._id }, "123456", {
        expiresIn: "1h",
      });
      return res.status(StatusCodes.OK).json({
        message: successMessages.LOGIN_SUCCESS,
        token,
        user,
      });
    } catch (err) {
      next(err);
    }
  };
}
export default AuthController;
