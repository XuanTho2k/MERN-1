import express from "express";
import { checkAuth } from "../middleware/checkAuth";
import AuthController from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/", AuthController.userSignup);
authRouter.get("/", checkAuth, AuthController.userSignin);

export default authRouter;
