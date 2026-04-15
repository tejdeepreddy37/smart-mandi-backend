import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

export default function Login() {
  const router = useRouter();

  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!phone || !password) {
      alert("⚠️ Please enter phone and password");
      return;
    }

    try {
      // fake auth token (backend-ready structure)
      const token = "token_" + Date.now();

      await AsyncStorage.setItem("smart_mandi_token", token);

      alert("✅ Login successful");

      // redirect to dashboard
      router.replace("/(tabs)");
    } catch (err) {
      console.log("Login error:", err);
      alert("❌ Login failed");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
        backgroundColor: "#f4fff4",
      }}
    >
      {/* TITLE */}
      <Text style={{ fontSize: 28, fontWeight: "bold", textAlign: "center" }}>
        🌾 Smart Mandi
      </Text>

      <Text style={{ textAlign: "center", color: "gray", marginTop: 5 }}>
        Farmer Intelligence Platform
      </Text>

      {/* INPUTS */}
      <TextInput
        placeholder="📱 Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 10,
          marginTop: 30,
          backgroundColor: "#fff",
        }}
      />

      <TextInput
        placeholder="🔒 Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 12,
          borderRadius: 10,
          marginTop: 10,
          backgroundColor: "#fff",
        }}
      />

      {/* LOGIN BUTTON */}
      <Pressable
        onPress={handleLogin}
        style={{
          backgroundColor: "#0f2e1d",
          padding: 14,
          borderRadius: 10,
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", fontSize: 16 }}>
          🚜 Login
        </Text>
      </Pressable>

      {/* FOOTER */}
      <Text style={{ textAlign: "center", marginTop: 20, color: "gray" }}>
        Secure Farmer Login System
      </Text>
    </View>
  );
}