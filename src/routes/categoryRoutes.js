import express from "express";
import { createCategory, getAllCategories, getCategory, editCategory } from "../controllers/categoryController.js";

const router = express.Router();

router.post("/", createCategory);
router.get("/", getAllCategories);
router.get("/:idOrName", getCategory);
router.put("/:id", editCategory);

export default router;
