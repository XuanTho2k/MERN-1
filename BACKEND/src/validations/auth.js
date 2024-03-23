import Joi from "joi";
export const signupSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .messages({
      "string.base": "Username should be a type of text",
      "string.empty": "Username should not be empty",
      "string.min":
        "Username should have a minimum length of {#limit}",
      "string.max":
        "Username should have a maximum length of {#limit}",
    }),
  email: Joi.string().email().required().messages({
    "string.base": "Email should be a type of text",
    "string.empty": "Email should not be empty",
    "string.email": "Email should be a valid email",
    "any.required": "Email is required",
  }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .messages({
      "string.base": "Password should be a type of text",
      "string.empty": "Password should not be empty",
      "string.pattern.base":
        "Password should be a valid password",
      "any.required": "Password is required",
    }),
  confirmPassword: Joi.string()
    .valid(Joi.ref("password"))
    .required()
    .messages({
      "any.required": "Confirm Password is required",
    }),
});

export const signinSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "Email should be a type of text",
    "string.empty": "Email should not be empty",
    "string.email": "Email should be a valid email",
    "any.required": "Email is required",
  }),
  password: Joi.string().required().messages({
    "string.base": "Password should be a type of text",
    "string.empty": "Password should not be empty",
    "any.required": "Password is required",
  }),
});
