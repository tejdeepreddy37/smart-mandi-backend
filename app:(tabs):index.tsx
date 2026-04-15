import { Text, View } from "react-native";
import { useDashboard } from "../../hooks/useDashboard";
import Card from "../components/ui/Card";
import Header from "../components/ui/Header";

export default function Home() {
  const { mandi, weather, loading } = useDashboard();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>🚜 Loading Smart Mandi...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#f4fff4" }}>
      
      {/* HEADER */}
      <Header />

      {/* WEATHER */}
      <Card>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>
          🌦️ Weather Insight
        </Text>

        <Text style={{ marginTop: 5 }}>
          {weather?.condition} | {weather?.temp}°C
        </Text>

        <Text style={{ color: "gray", marginTop: 5 }}>
          {weather?.advice}
        </Text>
      </Card>

      {/* MANDI SECTION TITLE */}
      <Text style={{ marginTop: 20, fontWeight: "bold", fontSize: 16 }}>
        📊 Live Crop Prices
      </Text>

      {/* MANDI CARDS */}
      {mandi.map((item: any, i: number) => {
        const isUp = item.price > 2500;

        return (
          <Card key={i}>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                {item.name}
              </Text>

              <Text style={{ fontWeight: "bold", color: isUp ? "green" : "red" }}>
                ₹{item.price} {isUp ? "📈" : "📉"}
              </Text>

            </View>

            <Text style={{ color: isUp ? "green" : "red", marginTop: 5 }}>
              {isUp ? "💡 Good time to sell" : "⏳ Hold crop for better price"}
            </Text>
          </Card>
        );
      })}

    </View>
  );
}