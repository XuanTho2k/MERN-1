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
  },
  brand: {
    type: String,
  },
  discountPercentage: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: [
    {
      type: String,
    },
  ],
  thumbnail: {
    type: String,
  },
  stock: {
    type: Number,
  },
  rating: {
    type: Number,
  },
});

export default mongoose.model("Product", productSchema);
