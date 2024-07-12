import React from "react";
import { View, Text, Button } from "react-native";

const ProductDetailScreen = ({ route }) => {
  const { product } = route.params;

  return (
    <View>
      <Text>{product.name}</Text>
      <Text>{product.price}</Text>
      <Text>{product.description}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(product)} />
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

export default ProductDetailScreen;