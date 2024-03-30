import { Router } from "express";
import CategoryController from "../controllers/categoryController";

const categoryRouter = Router();

categoryRouter.get("/", CategoryController.getCategories);
categoryRouter.get(
  "/:id",
  CategoryController.getCategoryById
);
categoryRouter.post("/", CategoryController.createCategory);
categoryRouter.put(
  "/edit/:id",
  CategoryController.editCategoryById
);
categoryRouter.put(
  "/hide/:id",
  CategoryController.softRemoveCategory
);

categoryRouter.delete(
  "/delete/:id",
  CategoryController.hardRemove
);
export default categoryRouter;
