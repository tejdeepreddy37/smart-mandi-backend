const BASE_URL = "http://10.221.152.208:7000";

export const getMandiPrices = async () => {
  const res = await fetch(`${BASE_URL}/api/mandi`);
  return res.json();
};

export const getWeather = async () => {
  const res = await fetch(`${BASE_URL}/api/weather`);
  return res.json();
};