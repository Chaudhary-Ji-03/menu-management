import express from "express";
import { createItem, getAllItems, getItemsByCategory, getItemsBySubCategory, searchItem, editItem } from "../controllers/itemController.js";

const router = express.Router();

router.post("/", createItem);
router.get("/", getAllItems);
router.get("/category/:categoryId", getItemsByCategory);
router.get("/subcategory/:subCategoryId", getItemsBySubCategory);
router.get("/search", searchItem);
router.put("/:id", editItem);

export default router;
