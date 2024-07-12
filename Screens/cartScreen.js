import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CartScreen = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        let cartItems = await AsyncStorage.getItem("cart");
        cartItems = cartItems ? JSON.parse(cartItems) : [];
        setCart(cartItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCart();
  }, []);

  const removeFromCart = async (item) => {
    try {
      let cartItems = await AsyncStorage.getItem("cart");
      cartItems = cartItems ? JSON.parse(cartItems) : [];
      cartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
      await AsyncStorage.setItem("cart", JSON.stringify(cartItems));
      setCart(cartItems);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
            <Button
              title="Remove from Cart"
              onPress={() => removeFromCart(item)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default CartScreen;