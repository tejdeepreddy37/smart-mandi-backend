const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const mandiData = [
  { name: "Wheat", price: 2400 },
  { name: "Rice", price: 3100 },
  { name: "Cotton", price: 6200 },
  { name: "Maize", price: 1800 },
];

// API: Mandi prices
app.get("/api/mandi", (req, res) => {
  res.json(mandiData);
});

// API: Weather
app.get("/api/weather", (req, res) => {
  res.json({
    condition: "Sunny",
    temp: 32,
    advice: "Good for irrigation",
  });
});

// TEST ROUTE (IMPORTANT)
app.get("/", (req, res) => {
  res.send("🚜 Smart Mandi Backend Running");
});

app.listen(5000, () => {
  console.log("🚀 Smart Mandi backend running on port 5000");
});