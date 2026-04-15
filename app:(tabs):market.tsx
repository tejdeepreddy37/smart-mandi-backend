import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { addListing, getListings } from "../services/market";

export default function Market() {
  const [listings, setListings] = useState<any[]>([]);

  const [farmer, setFarmer] = useState("");
  const [crop, setCrop] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  /* LOAD DATA */
  const loadListings = async () => {
    const res = await getListings();
    setListings(res.data || []);
  };

  useEffect(() => {
    loadListings();
  }, []);

  /* ADD CROP */
  const handleAdd = async () => {
    const res = await addListing({
      farmer,
      crop,
      price,
      quantity,
      location: "AP",
    });

    if (res.success) {
      setFarmer("");
      setCrop("");
      setPrice("");
      setQuantity("");
      loadListings();
    }
  };

  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#f4fff4" }}>

      <Text style={{ fontSize: 22, fontWeight: "bold" }}>
        🛒 Farmer Marketplace
      </Text>

      {/* FORM */}
      <View style={{ marginTop: 15 }}>

        <TextInput
          placeholder="Farmer Name"
          value={farmer}
          onChangeText={setFarmer}
          style={{ borderWidth: 1, padding: 8, marginTop: 5 }}
        />

        <TextInput
          placeholder="Crop Name"
          value={crop}
          onChangeText={setCrop}
          style={{ borderWidth: 1, padding: 8, marginTop: 5 }}
        />

        <TextInput
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          style={{ borderWidth: 1, padding: 8, marginTop: 5 }}
        />

        <TextInput
          placeholder="Quantity"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
          style={{ borderWidth: 1, padding: 8, marginTop: 5 }}
        />

        <Pressable
          onPress={handleAdd}
          style={{
            backgroundColor: "#0f2e1d",
            padding: 12,
            marginTop: 10,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            ➕ Add Listing
          </Text>
        </Pressable>
      </View>

      {/* LISTINGS */}
      <Text style={{ marginTop: 20, fontWeight: "bold" }}>
        📦 Available Crops
      </Text>

      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: "#fff",
              padding: 12,
              marginTop: 10,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>
              🌾 {item.crop}
            </Text>

            <Text>👨‍🌾 Farmer: {item.farmer}</Text>
            <Text>💰 Price: ₹{item.price}</Text>
            <Text>📦 Qty: {item.quantity} kg</Text>
          </View>
        )}
      />
    </View>
  );
}