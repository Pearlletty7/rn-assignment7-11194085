import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import CartScreen from "./screens/CartScreen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;