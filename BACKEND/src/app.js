import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import router from "./routers/app";
import cors from "cors";
import { connectDB } from "./config/db";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 8080;
//middle ware
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
//connect db
connectDB(process.env.MONGO_URI);
//route
app.use("/api/v1", router);

export const viteNodeApp = app;
