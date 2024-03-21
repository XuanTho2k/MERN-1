import express from "express";
import {
  userSignup,
  userSignin,
} from "../controllers/auth";

const authRouter = express.Router();

authRouter.post("/", userSignup);
authRouter.get("/", userSignin);

export default authRouter;
