import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function AI() {
  const [image, setImage] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");
  const [loading, setLoading] = useState(false);

  /* =========================
     📷 PICK IMAGE
  ========================= */
  const pickImage = async () => {
    const permission =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      alert("Permission required to access gallery");
      return;
    }

    const res = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!res.canceled) {
      setImage(res.assets[0].uri);
      setResult("");
    }
  };

  /* =========================
     🤖 ANALYZE CROP (AI API)
  ========================= */
  const analyzeCrop = async () => {
    if (!image) {
      alert("Please upload an image first");
      return;
    }

    setLoading(true);

    const formData = new FormData();

    formData.append("image", {
      uri: image,
      name: "crop.jpg",
      type: "image/jpeg",
    } as any);

    try {
      const res = await fetch(
        "http://10.221.152.208:7000/api/predict",
        {
          method: "POST",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = await res.json();

      if (data?.prediction) {
        setResult(
          `🌾 Disease: ${data.prediction.disease}\n\n🎯 Confidence: ${data.prediction.confidence}%\n\n💡 Advice: ${data.prediction.advice}`
        );
      } else {
        setResult("❌ No prediction received");
      }
    } catch (error) {
      console.log("AI error:", error);
      setResult("❌ AI analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f4fff4" }}>
      <View style={{ padding: 20 }}>

        {/* TITLE */}
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>
          🤖 AI Crop Detection
        </Text>

        <Text style={{ color: "gray", marginTop: 5 }}>
          Upload crop image to detect disease using Smart Mandi AI
        </Text>

        {/* IMAGE BOX */}
        <View
          style={{
            height: 250,
            backgroundColor: "#fff",
            marginTop: 20,
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {image ? (
            <Image
              source={{ uri: image }}
              style={{ width: "100%", height: "100%" }}
            />
          ) : (
            <Text>📷 No image selected</Text>
          )}
        </View>

        {/* UPLOAD BUTTON */}
        <Pressable
          onPress={pickImage}
          style={{
            backgroundColor: "#0f2e1d",
            padding: 12,
            marginTop: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            📤 Upload Crop Image
          </Text>
        </Pressable>

        {/* ANALYZE BUTTON */}
        <Pressable
          onPress={analyzeCrop}
          style={{
            backgroundColor: "#1b5e20",
            padding: 12,
            marginTop: 10,
            borderRadius: 10,
            opacity: loading ? 0.6 : 1,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            {loading ? "⏳ Analyzing..." : "🤖 Analyze Crop"}
          </Text>
        </Pressable>

        {/* RESULT CARD */}
        {result !== "" && (
          <View
            style={{
              marginTop: 20,
              padding: 15,
              backgroundColor: "#fff",
              borderRadius: 12,
            }}
          >
            <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
              🧠 AI Result:
            </Text>

            <Text>{result}</Text>
          </View>
        )}

      </View>
    </ScrollView>
  );
}