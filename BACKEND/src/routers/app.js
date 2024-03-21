import express from "express";
import productRouter from "./product";
//import authRouter from "./auth";

const router = express.Router();

//router.use("/auth/user", authRouter);
router.use("/product", productRouter);
export default router;
