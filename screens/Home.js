import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Balance from "../components/Balance";
import QuickActions from "../components/QuickActions";
import Transaction from "../components/transaction/Transaction";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.HomeContainer}>
      <Header />
      <Balance />
      <QuickActions />
      <Transaction />
      {/* <Text>This is Home</Text>
      <Button
        title="click"
        onPress={() => navigation.navigate("SecondScreen")}
      /> */}
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  HomeContainer: {
    paddingTop: 31,
    paddingHorizontal: 23,
    flex: 1,
    backgroundColor: "#fff",
  },
});
