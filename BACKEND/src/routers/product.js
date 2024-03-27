import express from "express";
import ProductController from "../controllers/productController";

const productRouter = express.Router();

productRouter.get("/", ProductController.getProducts);
productRouter.get("/:id", ProductController.getProductById);
productRouter.get(
  "/category/:id",
  ProductController.getByCategoryId
);
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
