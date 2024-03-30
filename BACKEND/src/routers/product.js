import express from "express";
import ProductController from "../controllers/productController";

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
productRouter.post("/", ProductController.addProduct);

productRouter.put(
  "/edit/:id",
  ProductController.editProductById
);
productRouter.put(
  "/hide/:id",
  ProductController.softRemoveProductById
);

productRouter.delete(
  "/delete/:id",
  ProductController.hardRemoveProductById
);

productRouter.get(
  "/pagi/nate",
  ProductController.getAllPaginate
);

export default productRouter;
