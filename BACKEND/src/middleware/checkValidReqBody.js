import { errorMessages } from "../constants/messages";

export const validBodyRequest =
  (schema) => async (req, res, next) => {
    try {
      const { error } = await schema.validate(req.body, {
        abortEarly: false,
      });
      if (error) {
        const errors = error.detailsmap(
          (error) => error.message
        );
        return res.status(400).json({
          message: errorMessages.INVALID_BODY,
          errors,
        });
      }
    } catch (error) {
      next(error);
    }
  };
