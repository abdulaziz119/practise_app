import mongoose from "mongoose";

export const commentsSchema = new mongoose.Schema({
  userId: mongoose.SchemaTypes.ObjectId,
  add_new_recipe_id: mongoose.SchemaTypes.ObjectId,
  comment: String,
  date: Date,
});

export default mongoose.model("comments", commentsSchema);
