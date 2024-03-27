import {
  addProductSchema,
  updateProductSchema,
} from "../validations/product";
import StatusCodes, {
  BAD_REQUEST,
  OK,
} from "http-status-codes";
import Product from "../models/ProductModel";
import { errorMessages } from "../constants/messages";
class ProductController {
  static addProduct = async (req, res) => {
    try {
      //Check if the input is valid
      const error = validAuth(
        req.body,
        addProductSchema,
        res
      );
      if (error) return;

      const product = await Product.create(req.body);
      if (product) {
        return res.status(StatusCodes.CREATED).json({
          message: "Product created successfully",
          product,
        });
      }
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: err.message });
    }
  };

  static getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      if (products) {
        return res.status(OK).json({ products });
      }
    } catch (error) {
      return res
        .status(BAD_REQUEST)
        .json({ message: error.message });
    }
  };

  static getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res
          .status(BAD_REQUEST)
          .json({ message: "Product not found" });
      }
      return res.status(OK).json({ product });
    } catch {
      return res
        .status(BAD_REQUEST)
        .json({ message: "Product not found" });
    }
  };

  static editProductById = async (req, res) => {
    try {
      //Check if the input is valid
      const error = validAuth(
        req.body,
        updateProductSchema,
        res
      );
      if (error) return;

      const product = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      return res.status(OK).json({ product });
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: err.message });
    }
  };

  static softRemoveProductById = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(
        req.params.id,
        { isHidden: true },
        { new: true }
      );
      if (!product) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: errorMessages.NOT_FOUND });
      }
      return res.status(OK).json({ product });
    } catch (err) {
      next(err);
    }
  };
}
export default ProductController;
