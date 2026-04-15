import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  useEffect(() => {
    const init = async () => {
      try {
        const token = await AsyncStorage.getItem("token");

        if (token) {
          router.replace("/(tabs)");
        } else {
          router.replace("/welcome");
        }
      } catch (e) {
        router.replace("/welcome");
      }
    };

    init();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}