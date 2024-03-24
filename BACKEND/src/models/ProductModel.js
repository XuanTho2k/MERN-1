import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
    default: 0,
  },
  brand: {
    type: String,
  },
  discountPercentage: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
  },
  images: [
    {
      type: String,
    },
  ],
  thumbnail: {
    type: String,
  },
  stock: {
    type: Number,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  isHidden: {
    type: Boolean,
    default: false,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Product", productSchema);
