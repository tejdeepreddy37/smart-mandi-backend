import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
      backgroundColor: "#f5fff5"
    }}>
      
      <Text style={{ fontSize: 28, fontWeight: "bold" }}>
        🌾 Smart Mandi
      </Text>

      <Text style={{ marginTop: 10, color: "gray", textAlign: "center" }}>
        AI Powered Farming Assistant for Indian Farmers 🚜
      </Text>

      <Pressable
        onPress={() => router.push("/login")}
        style={{
          marginTop: 30,
          backgroundColor: "#0f2e1d",
          padding: 12,
          borderRadius: 10,
          width: "80%"
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>
          Get Started
        </Text>
      </Pressable>

    </View>
  );
}