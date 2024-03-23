import Joi from "joi";

export const editUserSchema = Joi.object({
  userName: Joi.string().min(3).max(30).messages({
    "string.base": "Username should be a type of text",
    "string.empty": "Username should not be empty",
    "string.min":
      "Username should have a minimum length of {#limit}",
    "string.max":
      "Username should have a maximum length of {#limit}",
  }),
  email: Joi.string().email().messages({
    "string.base": "Email should be a type of text",
    "string.empty": "Email should not be empty",
    "string.email": "Email should be a valid email",
  }),
  password: Joi.string().messages({
    "string.base": "Password should be a type of text",
    "string.empty": "Password should not be empty",
  }),
});
