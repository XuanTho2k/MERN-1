import jwt from "jsonwebtoken";
export const checkAuth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "123456", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: err.message });
    }
    req.user = decoded;
    console.log(decoded);
  });
  next();
};
