import { Router } from "express";
import UserController from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", UserController.getAllUsers);
userRouter.post("/", UserController.createUser);
userRouter.get("/:id", UserController.getUserById);
userRouter.put("/edit/:id", UserController.editUser);
userRouter.put("/hide/:id", UserController.softRemoveUser);
userRouter.delete("/delete/:id", UserController.deleteUser);

export default userRouter;
