import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

const { PORT, MONGO_URI, JWT_SECRET } = process.env;

export default { PORT, MONGO_URI, JWT_SECRET };
