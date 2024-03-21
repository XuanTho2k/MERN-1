import bcryptjs from "bcryptjs";
import {
  StatusCodes,
  BAD_REQUEST,
  OK,
} from "http-status-codes";
import User from "../models/user";
import {
  signupSchema,
  signinSchema,
} from "../validations/auth";

export const userSignup = async (req, res) => {
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
  const existUser = await User.findOne({ email });
  if (existUser) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: "Email already exist" });
  }
  const hashedPassword = await bcryptjs.hash(password, 12);
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
    return res
      .status(StatusCodes.CREATED)
      .json({ message: "User created successfully" });
  }
};

export const userSignin = async (req, res) => {
  const { email, password } = req.body;
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
  const isEmailExist = await User.findOne({ email });
  if (isEmailExist) {
    const isPasswordMatch = await bcryptjs.compare(
      password,
      isEmailExist.password
    );
    if (isPasswordMatch) {
      return res
        .status(StatusCodes.OK)
        .json({ message: "User signin successfully" });
    }
  }
};
