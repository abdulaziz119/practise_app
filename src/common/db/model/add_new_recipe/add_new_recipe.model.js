import mongoose from "mongoose";

export const add_new_recipeSchema = new mongoose.Schema({
  meal_name: String,
  userId: mongoose.SchemaTypes.ObjectId,
  photo: String,
  description: String,
  date: Date,
});

export default mongoose.model("add_new_recipe", add_new_recipeSchema);
