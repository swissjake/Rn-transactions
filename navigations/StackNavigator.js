import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import HomeNav from "./HomeNav";
import CardNav from "./CardNav";
import TransferNav from "./TransferNav";
import MoreNav from "./MoreNav";

const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* modal  */}
      {/* <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={Modal} />
      </Stack.Group> */}

      {/* bottom nav */}

      <Tab.Screen
        name="HomeNav"
        component={HomeNav}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CardNav"
        component={CardNav}
        options={{
          tabBarLabel: "Cards",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="credit-card" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="TransferNav"
        component={TransferNav}
        options={{
          tabBarLabel: "Transfer",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bank-transfer-in"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="More"
        component={MoreNav}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="more-horiz" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default StackNavigator;
