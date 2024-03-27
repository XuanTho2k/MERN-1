import StatusCodes, {
  BAD_REQUEST,
} from "http-status-codes";
import Category from "../models/CategoryModel";
import { addCategorySchema } from "../validations/category";
import { validAuth } from "../utils/validAuth";
import {
  errorMessages,
  successMessages,
} from "../constants/messages";
import { valid } from "joi";
class CategoryController {
  static createCategory = async (req, res, next) => {
    try {
      //Check if the input is valid
      const error = validAuth(
        req.body,
        addCategorySchema,
        res
      );
      if (error !== undefined) return;

      //Check if slug is already in use
      const slugExist = await Category.findOne({
        slug: req.body.slug,
      });
      if (slugExist)
        return res.status(StatusCodes.BAD_REQUEST).json({
          message: errorMessages.SLUG_EXISTS,
        });
      //Create the category
      const category = await Category.create(req.body);
      return res.status(StatusCodes.CREATED).json({
        message: successMessages.CREATE_SUCCESS,
        category,
      });
    } catch (err) {
      next(err);
    }
  };

  static getCategoryById = async (req, res, next) => {
    try {
      const category = await Category.findById(
        req.params.id
      );
      return res.status(StatusCodes.OK).json({
        message: successMessages.CREATE_SUCCESS,
        category,
      });
    } catch (err) {
      next(err);
    }
  };

  static getCategories = async (req, res, next) => {
    try {
      const categories = await Category.find();
      if (categories) {
        return res.status(StatusCodes.OK).json({
          message: successMessages.FOUND_SUCCESS,
          categories,
        });
      }
    } catch (err) {
      next(err);
    }
  };

  static editCategoryById = async (req, res, next) => {
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      return res.status(StatusCodes.OK).json({
        message: successMessages.UPDATE_SUCCESS,
        category,
      });
    } catch (err) {
      next(err);
    }
  };

  static softRemoveCategory = async (req, res, next) => {
    try {
      const category = await Category.findByIdAndUpdate(
        req.params.id,
        { isHidden: true }
      );
      return res.status(StatusCodes.OK).json({
        message: successMessages.SOFT_DELETE_SUCCESS,
        category,
      });
    } catch (err) {
      next(err);
    }
  };
}

export default CategoryController;
