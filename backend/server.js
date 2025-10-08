const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Allow frontend requests
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Vite usually runs on 5173
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Routes
app.use("/api/contact", require("./routes/Contact"));

// Root route (for testing)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Error handling middleware (optional but good practice)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: "Something went wrong!" });
});

// Server listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
