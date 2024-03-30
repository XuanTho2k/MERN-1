import express from "express";
import productRouter from "./product";
import categoryRouter from "./category";
import userRouter from "./user";
import authRouter from "./auth";
import cartRouter from "./cartRouter";

const router = express.Router();

//router.use("/auth/user", authRouter);
router.use("/products", productRouter);
router.use("/category", categoryRouter);
router.use("/carts", cartRouter);
router.use("/users", userRouter);
router.use("/auth/user", authRouter);
export default router;
