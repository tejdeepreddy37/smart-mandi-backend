import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { logoutUser } from "../../services/auth";

export default function Profile() {
  const router = useRouter();

  const handleLogout = async () => {
    await logoutUser();
    router.replace("/login");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 22 }}>👤 Profile</Text>

      <Pressable
        onPress={handleLogout}
        style={{
          marginTop: 20,
          backgroundColor: "red",
          padding: 12,
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "white" }}>Logout</Text>
      </Pressable>
    </View>
  );
}