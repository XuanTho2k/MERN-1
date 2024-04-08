import OrderModel from "../models/OrderModel";
import {
  errorMessages,
  successMessages,
} from "../constants/messages";
class OrderController {
  static async getAll(req, res, next) {
    try {
      const orders = await OrderModel.find();
      return res.status(200).json({
        message: successMessages.READ_SUCCESS,
        orders,
      });
    } catch (error) {
      next(err);
    }
  }
  static async create(req, res, next) {
    try {
      console.log(req.body);
      const order = OrderModel.create(req.body);
      return res.status(200).json({
        message: successMessages.CREATE_SUCCESS,
        order,
      });
    } catch (error) {
      next(error);
    }
  }
  static async getById(req, res, next) {
    try {
      const order = OrderModel.findOne(req.params.id);
      return res.status(200).json({
        message: successMessages.FOUND_SUCCESS,
        order,
      });
    } catch (error) {
      next(error);
    }
  }
  static async edit(req, res, next) {
    try {
      const order = OrderModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      return res.status(200).json({
        message: successMessages.UPDATE_SUCCESS,
        order,
      });
    } catch (error) {
      next(error);
    }
  }
  static async softDelete(req, res, next) {
    try {
      const order = OrderModel.findByIdAndDelete(
        req.params.id
      );
      return res.status(200).json({
        message: successMessages.DELETE_SUCCESS,
        order,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default OrderController;
