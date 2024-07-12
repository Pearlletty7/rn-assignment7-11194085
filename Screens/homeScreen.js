import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button, TouchableOpacity } from "react-native";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/1"); // Replace with your API endpoint
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProductDetail", { product: item })
            }
          >
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button title="Add to Cart" onPress={() => addToCart(item)} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const addToCart = async (item) => {
  try {
    let cart = await AsyncStorage.getItem("cart");
    cart = cart ? JSON.parse(cart) : [];
    cart.push(item);
    await AsyncStorage.setItem("cart", JSON.stringify(cart));
  } catch (error) {
    console.error(error);
  }
};

export default HomeScreen;