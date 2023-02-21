import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
UserSchema.index({ email: 1 });
export default mongoose.model("users", UserSchema);
