import SubCategory from "../models/SubCategory.js";

// CREATE
export const createSubCategory = async (req, res) => {
  try {
    const subcategory = await SubCategory.create({
      ...req.body,
      category_id: req.params.categoryId
    });
    res.status(201).json(subcategory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET all
export const getAllSubCategories = async (req, res) => {
  try {
    const subcategories = await SubCategory.find();
    res.json(subcategories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET under category
export const getSubCategoriesByCategory = async (req, res) => {
  try {
    const subs = await SubCategory.find({ category_id: req.params.categoryId });
    res.json(subs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// EDIT
export const editSubCategory = async (req, res) => {
  try {
    const updated = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
