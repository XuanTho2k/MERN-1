import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    isHidden: { type: Boolean, default: false },
    products: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Category", categorySchema);
