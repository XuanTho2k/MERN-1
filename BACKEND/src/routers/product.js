import express from "express";
import {
  addProduct,
  editProductById,
  getProductById,
  getProducts,
  softRemoveProductById,
} from "../controllers/product";
import product from "../models/product";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProductById);
productRouter.post("/", addProduct);
productRouter.put("/edit/:id", editProductById);
productRouter.put("/hide/:id", softRemoveProductById);

export default productRouter;
