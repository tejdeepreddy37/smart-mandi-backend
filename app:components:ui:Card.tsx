import { View } from "react-native";

export default function Card({ children }: any) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 12,
        marginTop: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3
      }}
    >
      {children}
    </View>
  );
}