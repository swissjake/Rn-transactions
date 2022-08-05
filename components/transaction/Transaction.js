import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import React from "react";
import TransactionList from "./TransactionList";
import { SafeAreaView } from "react-native-safe-area-context";

const transactions = [
  {
    name: "Lois Dagana",
    time: "11 Jun, 8:15AM",
    amount: "+$50,000",
    mode: "transfer",
  },
  {
    name: "Lois Dagana",
    time: "11 Jun, 9:00AM",
    amount: "+$10,000",
    mode: "transfer",
  },
  {
    name: "Lois Dagana",
    time: "15 Jun, 8:15AM",
    amount: "+$25,000",
    mode: "transfer",
  },
  {
    name: "Sofirtari A.",
    time: "20 Aug, 8:15AM",
    amount: "+$5000",
    mode: "transfer",
  },
];
const Transaction = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transaction</Text>
      <SafeAreaView>
        <StatusBar barStyle={{ backgroundColor: "red" }} hidden={false} />
        <FlatList
          data={transactions}
          renderItem={({ item, index }) => (
            <TransactionList {...item} index={index} />
          )}
        ></FlatList>
      </SafeAreaView>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 20,
    color: "#464258",
  },
});
