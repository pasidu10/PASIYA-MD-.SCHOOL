// backend/server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import aiRoute from "./routes/aiRoute.js";
import uploadRoute from "./routes/uploadRoute.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

app.use("/api/ai-answer", aiRoute);
app.use("/api/upload-paper", uploadRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT} | Powered by PASIYA-MD TEAM`)
);
