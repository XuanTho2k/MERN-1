import express from "express";
import ProductController from "../controllers/productController";
import { validBodyRequest } from "../middleware/checkValidReqBody";
import { addProductSchema } from "../validations/product";

const productRouter = express.Router();

productRouter.get("/", ProductController.getProducts);
productRouter.get("/:id", ProductController.getProductById);
productRouter.get(
  "/category/:id",
  ProductController.getByCategoryId
);
productRouter.get(
  "/:categoryId/related/:id",
  ProductController.related
);
productRouter.delete(
  "/delete/:id",
  ProductController.hardRemoveProductById
);

productRouter.get(
  "/pagi/nate",
  ProductController.getAllPaginate
);

//productRouter.use(validBodyRequest(addProductSchema)); //middle ware
productRouter.post("/", ProductController.addProduct);

productRouter.put(
  "/edit/:id",
  ProductController.editProductById
);
productRouter.put(
  "/hide/:id",
  ProductController.softRemoveProductById
);

export default productRouter;
