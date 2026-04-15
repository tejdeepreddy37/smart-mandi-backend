import { Stack } from "expo-router";
import { Text, View } from "react-native";
import { useAuthCheck } from "./hooks/useAuthCheck";

export default function RootLayout() {
  const { loading, isLoggedIn } = useAuthCheck();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>🚜 Loading Smart Mandi...</Text>
      </View>
    );
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {!isLoggedIn ? (
        <Stack.Screen name="login" />
      ) : (
        <Stack.Screen name="(tabs)" />
      )}
      <Stack.Screen name="welcome" />
    </Stack>
  );
}