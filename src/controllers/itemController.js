import Item from "../models/Item.js";

// CREATE
export const createItem = async (req, res) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET all
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET under category
export const getItemsByCategory = async (req, res) => {
  try {
    const items = await Item.find({ category_id: req.params.categoryId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET under subcategory
export const getItemsBySubCategory = async (req, res) => {
  try {
    const items = await Item.find({ sub_category_id: req.params.subCategoryId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// SEARCH by name
export const searchItem = async (req, res) => {
  try {
    const items = await Item.find({ name: { $regex: req.query.name, $options: "i" } });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// EDIT
export const editItem = async (req, res) => {
  try {
    const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
