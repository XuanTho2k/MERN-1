import { errorMessages } from "../constants/messages";

export const errorHandler = (err, req, res) => {
  return res.status(err.status || 500).json({
    error: {
      name: err.name,
      message: err.message || errorMessages.ERROR_SERVER,
    },
  });
};

export const errorHandleNotFound = (req, res, next) => {
  const error = new Error(errorMessages.NOT_FOUND);
  error.status = 404;
  next(error);
};
