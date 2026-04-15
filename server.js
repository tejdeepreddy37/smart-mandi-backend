const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ------------------
// 🌾 MANDI DATA API
// ------------------
app.get("/api/mandi", (req, res) => {
  res.json([
    { crop: "Wheat", price: 2400 },
    { crop: "Rice", price: 2100 },
    { crop: "Maize", price: 1800 },
    { crop: "Cotton", price: 6200 },
  ]);
});

// ------------------
// ☁️ WEATHER API
// ------------------
app.get("/api/weather", (req, res) => {
  res.json({
    location: "Andhra Pradesh",
    temp: 32,
    humidity: 60,
    advice: "Good for irrigation",
  });
});

// ------------------
// 🛒 MARKETPLACE API
// ------------------
let products = [];

app.get("/api/market", (req, res) => {
  res.json(products);
});

app.post("/api/market", (req, res) => {
  const { name, price } = req.body;

  const newItem = {
    id: Date.now(),
    name,
    price,
  };

  products.push(newItem);
  res.json(newItem);
});

// ------------------
// 🤖 AI CROP DETECTION (DUMMY)
// ------------------
const upload = multer({ dest: "uploads/" });

app.post("/api/predict", upload.single("image"), (req, res) => {
  res.json({
    crop: "Tomato",
    disease: "Leaf Curl",
    confidence: "92%",
  });
});

// ------------------
// ❤️ HEALTH CHECK
// ------------------
app.get("/", (req, res) => {
  res.send("🚜 Smart Mandi API is running...");
});

// ------------------
// 🚀 START SERVER
// ------------------
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`🚀 Smart Mandi backend running on port ${PORT}`);
});