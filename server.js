const express = require("express");
const cors = require("cors");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(cors());
app.use(express.json());

/* =========================
   🏠 BASE ROUTE
========================= */
app.get("/", (req, res) => {
  res.json({ message: "🚜 Smart Mandi Backend Running" });
});

/* =========================
   📊 MANDI PRICES API
========================= */
app.get("/api/mandi", (req, res) => {
  res.json([
    { name: "Wheat", price: 2400 },
    { name: "Rice", price: 3100 },
    { name: "Cotton", price: 6200 },
    { name: "Maize", price: 1800 },
    { name: "Sugarcane", price: 450 }
  ]);
});

/* =========================
   🌦️ WEATHER API
========================= */
app.get("/api/weather", (req, res) => {
  res.json({
    condition: "Sunny",
    temp: 32,
    advice: "Good for irrigation"
  });
});

/* =========================
   🤖 AI CROP PREDICTION
========================= */
app.post("/api/predict", upload.single("image"), (req, res) => {
  const results = [
    "Leaf Blight 🌿",
    "Healthy Crop 🌱",
    "Fungal Infection ⚠️",
    "Nutrient Deficiency 🧪",
    "Rust Disease 🍂"
  ];

  const prediction = results[Math.floor(Math.random() * results.length)];
  const confidence = Math.floor(Math.random() * 30) + 70;

  res.json({
    success: true,
    disease: prediction,
    confidence: confidence
  });
});

/* =========================
   🛒 MARKETPLACE SYSTEM
========================= */

let listings = [];

/**
 * Add crop listing
 */
app.post("/api/listings", (req, res) => {
  const { farmer, crop, price, quantity, location } = req.body;

  if (!farmer || !crop || !price || !quantity) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  const newListing = {
    id: Date.now(),
    farmer,
    crop,
    price,
    quantity,
    location: location || "Unknown",
    createdAt: new Date(),
  };

  listings.push(newListing);

  res.json({
    success: true,
    message: "Crop listed successfully 🚜",
    data: newListing,
  });
});

/**
 * Get all listings
 */
app.get("/api/listings", (req, res) => {
  res.json({
    success: true,
    data: listings,
  });
});

/**
 * Delete listing
 */
app.delete("/api/listings/:id", (req, res) => {
  const id = parseInt(req.params.id);

  listings = listings.filter((item) => item.id !== id);

  res.json({
    success: true,
    message: "Listing removed",
  });
});

/* =========================
   🚀 START SERVER
========================= */
const PORT = 7000;

app.listen(PORT, () => {
  console.log(`🚀 Smart Mandi backend running on port ${PORT}`);
});