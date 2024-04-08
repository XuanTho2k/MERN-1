import mongoose, { Schema } from "mongoose";

const orderItemSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    auto: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  items: [orderItemSchema],
  orderNumber: {
    type: String,
    required: true,
    unique: true,
    auto: true,
  },
  customerInfo: {
    type: Object,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "shipped", "delivered"],
    default: "pending",
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Order", orderSchema);
