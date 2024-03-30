import { Router } from "express";
import CartController from "../controllers/cartController";

const cartRouter = Router();
cartRouter.get("/", CartController.getAll);
cartRouter.get("/:userId", CartController.getByUserId);
cartRouter.post("/add-to-cart", CartController.addItem);
cartRouter.post(
  "/increase-quantity",
  CartController.increaseProductQuantity
),
  cartRouter.post(
    "/decrease-quantity",
    CartController.decreaseProductQuantity
  );
cartRouter.put(
  "/update-product-quantity",
  CartController.updateProductQuantity
);
cartRouter.delete("/", CartController.removeItem);
export default cartRouter;
