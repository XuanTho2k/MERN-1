import express from "express";
import { checkAuth } from "../middleware/checkAuth";
import AuthController from "../controllers/authController";
import { validBodyRequest } from "../middleware/checkValidReqBody";
import {
  loginSchema,
  registerSchema,
} from "../validations/user";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validBodyRequest(registerSchema),
  AuthController.userSignup
);
authRouter.post(
  "/login",
  // validBodyRequest(loginSchema),

  AuthController.userSignin
);

export default authRouter;
