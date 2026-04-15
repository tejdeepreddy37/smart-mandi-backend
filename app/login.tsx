import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Login() {
  const [phone, setPhone] = useState("");

  const handleLogin = async () => {
    await AsyncStorage.setItem("token", "smart-mandi-token");
    router.replace("/(tabs)");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>
        Smart Mandi Login
      </Text>

      <TextInput
        placeholder="Enter Phone Number"
        value={phone}
        onChangeText={setPhone}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 20,
          borderRadius: 8,
        }}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
