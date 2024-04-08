import { Router } from "express";
import OrderController from "../controllers/orderController";

const orderRouter = Router();
orderRouter.get("/", OrderController.getAll);
orderRouter.get("/:id", OrderController.getById);
orderRouter.post("/", OrderController.create);
orderRouter.put("/:id", OrderController.edit);
orderRouter.put("/hide/:id", OrderController.softDelete);

export default orderRouter;
