import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Header() {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: "#0f2e1d",
        borderRadius: 15,
        marginBottom: 15
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="leaf" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 20, marginLeft: 10 }}>
          Smart Mandi
        </Text>
      </View>

      <Text style={{ color: "#cdeccd", marginTop: 5 }}>
        AI Farming Intelligence Dashboard 🚜
      </Text>
    </View>
  );
}