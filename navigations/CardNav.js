import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cards from "../screens/Cards";

const Stack = createNativeStackNavigator();

const CardNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Cards" component={Cards} />
    </Stack.Navigator>
  );
};

export default CardNav;
