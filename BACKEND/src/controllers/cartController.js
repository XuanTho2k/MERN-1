import {
  errorMessages,
  successMessages,
} from "../constants/messages";
import Cart from "../models/CartMode";

import StatusCodes, { NOT_FOUND } from "http-status-codes";

class CartController {
  static async getByUserId(req, res, next) {
    const { userId } = req.params;
    try {
      const cart = await Cart.findOne({ userId }).populate(
        "products.productId"
      );
      const cartData = {
        products: cart.products.map((item) => ({
          productId: item.productId._id,
          title: item.productId.title,
          price: item.productId.price,
          quantity: item.quantity,
          thumbnail: item.productId.thumbnail,
          _id: item.productId._id,
        })),
      };
      return res.status(200).json({
        message: successMessages.READ_SUCCESS,
        products: cartData.products,
      });
    } catch (err) {
      next(err);
    }
  }
  static async addItem(req, res, next) {
    const { userId, productId, quantity } = req.body;
    try {
      // Check if cart already exists
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        cart = new Cart({ userId, products: [] });
      }

      // Check if product already exists in cart
      const existProductIndex = cart.products.findIndex(
        (item) => item.productId == productId
      );
      if (existProductIndex !== -1) {
        //If product exists, increase the quantity
        cart.products[existProductIndex].quantity +=
          quantity;
        // If product does not exist, add it to the cart
      } else {
        cart.products.push({ productId, quantity });
      }
      await cart.save();
      // Return success message
      return res.status(200).json({
        cart,
        message: successMessages.ADD_TO_CART_SUCCESS,
      });
    } catch (err) {
      next(err);
    }
  }
  static async removeItem(req, res, next) {
    console.log("ao that day");
    const { userId, productId } = req.body;
    console.log(req.body);
    try {
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(400).json({
          message: errorMessages.NOT_FOUND,
        });
      }
      cart.products = cart.products.filter(
        (item) => item.productId.toString() !== productId
      );
      await cart.save();
      return res.status(200).json({
        message: successMessages.REMOVE_FROM_CART_SUCCESS,
        cart,
      });
    } catch (err) {
      next(err);
    }
  }
  static async updateProductQuantity(req, res, next) {
    const { userId, productId, quantity } = req.body;
    try {
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(400).json({
          message: errorMessages.NOT_FOUND,
        });
      }
      const product = cart.products.find(
        (item) => item.productId.toString() === productId
      );
      if (!product) {
        return res.status(StatusCodes.NOT_FOUND).json({
          message: errorMessages.NOT_FOUND,
        });
      }
      product.quantity = quantity;
      await cart.save();
      return res.status(StatusCodes.OK).json({
        message: successMessages.UPDATE_SUCCESS,
        cart,
      });
    } catch (err) {
      next(err);
    }
  }
  static async increaseProductQuantity(req, res, next) {
    const { userId, productId } = req.body;
    console.log(userId);
    try {
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(400).json({
          message: errorMessages.NOT_FOUND,
        });
      }
      const product = cart.products.find(
        (item) => item.productId.toString() === productId
      );
      if (!product) {
        return res.status(404).json({
          message: errorMessages.NOT_FOUND,
        });
      }

      product.quantity++;
      await cart.save();
      res.status(200).json({
        cart,
        message: successMessages.INCREASE_QUANTITY_SUCCESS,
      });
    } catch (error) {
      next(err);
    }
  }
  static async decreaseProductQuantity(req, res, next) {
    const { userId, productId } = req.body;
    console.log(userId, productId);
    try {
      //find cart by user id
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(400).json({
          message: errorMessages.NOT_FOUND,
        });
      }
      // find product in cart
      const product = cart.products.find(
        (item) => item.productId.toString() === productId
      );
      if (!product) {
        return res.status(400).json({
          message: errorMessages.NOT_FOUND,
        });
      }
      if (product.quantity > 1) {
        product.quantity--;
      }
      cart.save();
      return res.status(200).json({
        cart,
        message: successMessages.DECREASE_QUANTITY_SUCCESS,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default CartController;
