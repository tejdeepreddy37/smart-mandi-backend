export const getWeather = async () => {
  return {
    condition: "Sunny",
    temp: 32,
    advice: "Good day for irrigation",
  };
};

export const getCropAdvice = async () => {
  return [
    "Sell Wheat this week 📈",
    "Hold Rice for better price",
    "Cotton demand rising",
  ];
};