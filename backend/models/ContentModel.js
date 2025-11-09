// backend/models/ContentModel.js
import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  gradeLevel: { type: String, enum: ["O/L", "A/L"], required: true },
  lessonTitle: { type: String, required: true },
  notesPDFUrl: String,
  pastPaperPDFUrl: String,
});

export default mongoose.model("Content", contentSchema);
