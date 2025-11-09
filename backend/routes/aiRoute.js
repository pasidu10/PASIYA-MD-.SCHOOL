// backend/routes/aiRoute.js
import express from "express";
import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post("/", async (req, res) => {
  const { question, gradeLevel } = req.body;
  try {
    const prompt = `
      You are a Sri Lankan school AI teacher.
      Provide answers ONLY according to Sri Lanka's ${gradeLevel} syllabus.
      Question: ${question}
    `;
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "system", content: prompt }],
    });
    res.json({ answer: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "AI Response Failed", details: error });
  }
});

export default router;
