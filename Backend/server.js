import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./db.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"], // Vite frontend ports
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// CTA Form API
app.post("/api/contact", (req, res) => {
  console.log("BODY RECEIVED:", req.body);

  const { name, email, message } = req.body;

  if (!name || !email) {
    console.log("Validation failed");
    return res.status(400).json({
      error: "Name and Email are required",
    });
  }

  const sql =
    "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message || ""], (err, result) => {
    if (err) {
      console.log("FULL SQL ERROR:");
      console.log(err);

      return res.status(500).json({
        error: err.sqlMessage || "Database error",
      });
    }

    console.log("INSERT SUCCESS");

    res.json({
      success: true,
      message: "Form submitted successfully",
    });
  });
});
// GET all contacts
app.get("/api/contacts", (req, res) => {
  const sql = "SELECT * FROM contacts ORDER BY id DESC";

  db.query(sql, (err, rows) => {
    if (err) {
      console.error("DB Error:", err);
      return res.status(500).json({ error: "Database error" });
    }

    res.json({
      success: true,
      contacts: [],
    });
  });
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});