import { View, Text } from "react-native";
import React from "react";
import More from "../screens/More";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const MoreNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="More" component={More} />
    </Stack.Navigator>
  );
};

export default MoreNav;
