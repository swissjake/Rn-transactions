import { View, Text, SafeAreaView, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SecondScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Text>This is the SecondScreen</Text>
      <Button title="Open modal" onPress={() => navigation.navigate("Modal")} />
    </SafeAreaView>
  );
};

export default SecondScreen;
