import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Transfer from "../screens/Transfer";

const Stack = createNativeStackNavigator();

const TransferNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Transfer" component={Transfer} />
    </Stack.Navigator>
  );
};

export default TransferNav;
