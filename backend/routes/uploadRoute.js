// backend/routes/uploadRoute.js
import express from "express";
import multer from "multer";

const router = express.Router();

// 🧱 Basic Admin Middleware
const adminOnly = (req, res, next) => {
  const isAdmin = req.headers["x-admin"] === "true";
  if (!isAdmin) return res.status(403).json({ message: "Access denied" });
  next();
};

// 📁 Multer Config
const storage = multer.diskStorage({
  destination: "uploads/past-papers/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// 📤 Upload Route
router.post("/", adminOnly, upload.single("pdf"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });
  res.json({
    message: "PDF uploaded successfully",
    filePath: `/uploads/past-papers/${req.file.filename}`,
  });
});

export default router;
