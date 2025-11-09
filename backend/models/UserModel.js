// backend/models/UserModel.js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fullName: String,
  grade: { type: String, enum: ["O/L", "A/L"] },
  stream: { type: String, enum: ["Science", "Arts", "Commerce"] },
  isAdmin: { type: Boolean, default: false },
});

export default mongoose.model("User", userSchema);
