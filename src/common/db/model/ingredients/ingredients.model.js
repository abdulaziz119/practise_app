import mongoose from "mongoose";

export const ingredientsSchema = new mongoose.Schema({
  add_new_recipe_id: mongoose.SchemaTypes.ObjectId,
  name: String,
  amount_type: String,
  amount: Number,
  sequence: Number,
});

export default mongoose.model("ingredients", ingredientsSchema);
