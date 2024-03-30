import express from "express";
import { checkAuth } from "../middleware/checkAuth";
import AuthController from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/signup", AuthController.userSignup);
authRouter.post(
  "/login",

  AuthController.userSignin
);

export default authRouter;
