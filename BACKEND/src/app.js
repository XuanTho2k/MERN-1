import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routers/app";
import cors from "cors";
import { connectDB } from "./config/db";
import {
  errorHandleNotFound,
  errorHandler,
} from "./utils/errorHandles";

const app = express();
dotenv.config();
const { PORT, MONGO_URI } = process.env;

//middle ware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));

//connect db
connectDB(MONGO_URI);

//route
app.use("/api/v1", router);

//Error handling 404
app.use(errorHandleNotFound, errorHandler);

export const viteNodeApp = app;
