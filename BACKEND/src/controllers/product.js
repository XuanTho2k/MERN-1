import {
  addProductSchema,
  updateProductSchema,
} from "../validations/product";
import StatusCodes, {
  BAD_REQUEST,
  OK,
} from "http-status-codes";
import Product from "../models/product";
import { ObjectId } from "mongodb";
export const addProduct = async (req, res) => {
  const { error } = addProductSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const messages = error.details.map(
      (err) => err.message
    );
    return res.status(StatusCodes.BAD_REQUEST).json({
      messages,
    });
  }
  try {
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

export const getProducts = async (req, res) => {
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

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(
      new ObjectId(req.params.id)
    );
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

export const editProductById = async (req, res) => {
  const { error } = updateProductSchema.validate(req.body, {
    abortEarly: false,
  });
  if (error) {
    const messages = error.details.map(
      (err) => err.message
    );
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ messages });
  }
  try {
    const product = await Product.findByIdAndUpdate(
      new ObjectId(req.params.id),
      req.body,
      { new: true }
    );
  } catch (err) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: err.message });
  }
};

export const softRemoveProductById = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      new ObjectId(req.params.id),
      { isHidden: true },
      { new: true }
    );
    if (!product) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Product not found" });
    }
    return res.status(OK).json({ product });
  } catch (err) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: err.message });
  }
};
