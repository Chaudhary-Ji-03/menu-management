import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  sub_category_id: { type: mongoose.Schema.Types.ObjectId, ref: "SubCategory" },
  name: { type: String, required: true },
  image: String,
  description: String,
  tax_applicable: { type: Boolean, default: false },
  tax: { type: Number, default: 0 },
  base_amount: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  total_amount: { type: Number }
});

// calculate total automatically
itemSchema.pre("save", function (next) {
  this.total_amount = this.base_amount - this.discount;
  next();
});

export default mongoose.model("Item", itemSchema);
