import {
  addProductSchema,
  updateProductSchema,
} from "../validations/product";
import StatusCodes, {
  BAD_REQUEST,
  OK,
} from "http-status-codes";
import Product from "../models/ProductModel";
import {
  errorMessages,
  successMessages,
} from "../constants/messages";
import { validAuth } from "../utils/validAuth";
import Category from "../models/CategoryModel";
class ProductController {
  static addProduct = async (req, res, next) => {
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
      next(err);
    }
  };

  static getProducts = async (req, res, next) => {
    try {
      const products = await Product.find().populate(
        "category"
      );
      if (products) {
        return res.status(OK).json({
          message: successMessages.READ_SUCCESS,
          products,
        });
      }
    } catch (error) {
      next(err);
    }
  };

  static getProductById = async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res
          .status(BAD_REQUEST)
          .json({ message: "Product not found" });
      }
      return res.status(OK).json({ product });
    } catch {
      next(err);
    }
  };
  static getByCategoryId = async (req, res, next) => {
    try {
      const products = await Product.find({
        category: req.params.id,
      }).populate("category");
      return res.status(StatusCodes.OK).json({
        message: successMessages.READ_SUCCESS,
        products,
      });
    } catch (err) {
      next(err);
    }
  };

  static editProductById = async (req, res, next) => {
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
      next(err);
    }
  };

  static softRemoveProductById = async (req, res, next) => {
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
  static hardRemoveProductById = async (req, res, next) => {
    try {
      const product = await Product.findByIdAndDelete(
        req.params.id
      );
      return res.status(200).json({
        message: successMessages.DELETE_SUCCESS,
        product,
      });
    } catch (err) {
      next(err);
    }
  };
  static related = async (req, res) => {
    try {
      const products = await Product.find({
        category: req.params.categoryId,
        _id: { $ne: req.params.id },
      });
      if (!products) {
        return res.status(400).json({
          message: "Not Found Products",
        });
      }
      return res.status(200).json(products);
    } catch (error) {}
  };
}
export default ProductController;
