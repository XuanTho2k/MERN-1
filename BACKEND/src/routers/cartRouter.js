import { Router } from "express";
import CartController from "../controllers/cartController";
import { validBodyRequest } from "../middleware/checkValidReqBody";

const cartRouter = Router();
cartRouter.get("/", CartController.getAll);
cartRouter.get("/:userId", CartController.getByUserId);
cartRouter.delete("/", CartController.removeItem);

//cartRouter.use(validBodyRequest(cartSchema)) middle ware
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
export default cartRouter;
