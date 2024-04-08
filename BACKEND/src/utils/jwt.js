import jwt from "jsonwebtoken";
import JWT_SECRET from "./env";
export const verifyToken = (token) =>
  jwt.verify(token, JWT_SECRET);

export const generateToken = (payload, expiresIn = "1h") =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: expiresIn });
