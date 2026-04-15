import { useEffect, useState } from "react";
import { getMandiPrices, getWeather } from "../services/api";

export const useDashboard = () => {
  const [mandi, setMandi] = useState([]);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const m = await getMandiPrices();
      const w = await getWeather();

      setMandi(m);
      setWeather(w);
    } catch (err) {
      console.log("Dashboard error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return { mandi, weather, loading };
};