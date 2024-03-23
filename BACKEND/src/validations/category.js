import Joi from "joi";

export const addCategorySchema = Joi.object({
  name: Joi.string().min(3).max(30).messages({
    "string.base": "Name should be a type of text",
    "string.empty": "Name should not be empty",
    "string.min":
      "Name should have a minimum length of {#limit}",
    "string.max":
      "Name should have a maximum length of {#limit}",
  }),
  description: Joi.string().min(3).max(200).messages({
    "string.base": "Description should be a type of text",
    "string.empty": "Description should not be empty",
    "string.min":
      "Description should have a minimum length of {#limit}",
    "string.max":
      "Description should have a maximum length of {#limit}",
  }),
  slug: Joi.string().min(3).max(30).messages({
    "string.base": "Slug should be a type of text",
    "string.empty": "Slug should not be empty",
    "string.min":
      "Slug should have a minimum length of {#limit}",
    "string.max":
      "Slug should have a maximum length of {#limit}",
  }),
  isHidden: Joi.boolean().messages({
    "boolean.base": "isHidden should be a type of boolean",
    "boolean.empty": "isHidden should not be empty",
  }),
  products: Joi.array().messages({
    "array.base": "Products should be a type of array",
    "array.empty": "Products should not be empty",
  }),
});
