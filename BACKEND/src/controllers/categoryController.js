import StatusCodes, {
  BAD_REQUEST,
} from "http-status-codes";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import Category from "../models/CategoryModel";
import { addCategorySchema } from "../validations/category";
class CategoryController {
  static createCategory = async (req, res) => {
    const { error } = addCategorySchema.validate(req.body);
    if (error) {
      const messages = error.details.map(
        (err) => err.message
      );
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ messages });
    }
    try {
      const category = await Category.create(req.body);
      if (!category) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Category not created" });
      }
      return res.status(StatusCodes.CREATED).json({
        message: "Category created successfully",
        category,
      });
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: err.message });
    }
  };

  static getCategoryById = async (req, res) => {
    try {
      const category = await Category.findById(
        new ObjectId(req.params.id)
      );
      if (!category) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Category not found" });
      }
      return res.status(StatusCodes.OK).json({ category });
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: err.message });
    }
  };

  static getCategories = async (req, res) => {
    try {
      const categories = await Category.find();
      if (categories) {
        return res
          .status(StatusCodes.OK)
          .json({ categories });
      }
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Categories not found" });
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: err.message });
    }
  };

  static editCategoryById = async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      if (!category) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Category not found" });
      }
      return res
        .status(StatusCodes.OK)
        .json({ message: "Category updated successfully" });
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: err.message });
    }
  };

  static softRemoveCategory = async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        { isHidden: true }
      );
      if (!category) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ message: "Category not found" });
      }
      return res.status(StatusCodes.OK).json({
        message: "Category removed successfully",
        category,
      });
    } catch (err) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: err.message });
    }
  };
}

export default CategoryController;
