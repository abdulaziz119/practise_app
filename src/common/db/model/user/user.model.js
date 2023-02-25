import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
export default mongoose.model("users", UserSchema);
