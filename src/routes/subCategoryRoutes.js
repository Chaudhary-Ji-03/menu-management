import express from "express";
import { createSubCategory, getAllSubCategories, getSubCategoriesByCategory, editSubCategory } from "../controllers/subCategoryController.js";

const router = express.Router();

router.post("/:categoryId", createSubCategory);
router.get("/", getAllSubCategories);
router.get("/category/:categoryId", getSubCategoriesByCategory);
router.put("/:id", editSubCategory);

export default router;
