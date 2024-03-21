import Joi from "joi";

export const addProductSchema = Joi.object({
  title: Joi.string().min(3).max(30).messages({
    "string.base": "Name should be a type of text",
    "string.empty": "Name should not be empty",
    "string.min":
      "Name should have a minimum length of {#limit}",
    "string.max":
      "Name should have a maximum length of {#limit}",
  }),
});

export const updateProductSchema = Joi.object({
  title: Joi.string().min(3).max(30).messages({
    "string.base": "Name should be a type of text",
    "string.empty": "Name should not be empty",
    "string.min":
      "Name should have a minimum length of {#limit}",
    "string.max":
      "Name should have a maximum length of {#limit}",
  }),
  price: Joi.number().messages({
    "number.base": "Price should be a type of number",
    "number.empty": "Price should not be empty",
  }),
  description: Joi.string().min(3).max(100).messages({
    "string.base": "Description should be a type of text",
    "string.empty": "Description should not be empty",
    "string.min":
      "Description should have a minimum length of {#limit}",
    "string.max":
      "Description should have a maximum length of {#limit}",
  }),
  category: Joi.string()
    .min(3)
    .max(30)

    .messages({
      "string.base": "Category should be a type of text",
      "string.empty": "Category should not be empty",
      "string.min":
        "Category should have a minimum length of {#limit}",
      "string.max":
        "Category should have a maximum length of {#limit}",
    }),
  stock: Joi.number().messages({
    "number.base": "Stock should be a type of number",
    "number.empty": "Stock should not be empty",
  }),
  images: Joi.string().messages({
    "string.base": "Image should be a type of text",
    "string.empty": "Image should not be empty",
  }),
  brand: Joi.string().messages({
    "string.base": "Brand should be a type of text",
    "string.empty": "Brand should not be empty",
  }),
  discountPercentage: Joi.number().messages({
    "number.base": "Discount should be a type of number",
    "number.empty": "Discount should not be empty",
  }),
});
