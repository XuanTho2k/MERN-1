import express from "express";
import {
  userSignup,
  userSignin,
} from "../controllers/auth";
import { checkAuth } from "../middleware/checkAuth";

const authRouter = express.Router();

authRouter.post("/", userSignup);
authRouter.get("/", checkAuth, userSignin);

export default authRouter;
