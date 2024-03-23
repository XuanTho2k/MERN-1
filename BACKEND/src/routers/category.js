import { Router } from "express";
import {
  createCategory,
  editCategoryById,
  getCategories,
  softRemoveCategory,
  getCategoryById,
} from "../controllers/category";

const categoryRouter = Router();

categoryRouter.get("/", getCategories);
categoryRouter.get("/:id", getCategoryById);
categoryRouter.post("/", createCategory);
categoryRouter.put("/edit/:id", editCategoryById);
categoryRouter.put("/hide/:id", softRemoveCategory);
export default categoryRouter;
