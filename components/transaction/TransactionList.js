import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const TransactionList = ({ name, time, amount, mode, index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.roundedContainer}>
        <View
          style={[
            styles.rounded,
            { backgroundColor: index % 2 === 0 ? "#D7E5D4" : "#F6D1D1" },
          ]}
        >
          {index % 2 !== 0 ? (
            <AntDesign name="arrowdown" size={18} color="#D41818" />
          ) : (
            <AntDesign name="arrowup" size={18} color="#25531A" />
          )}
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{time}</Text>
        </View>
      </View>
      {/* right */}
      <View style={styles.transfer}>
        <Text style={{ color: index % 2 === 0 ? "#25531A" : "#D41818" }}>
          {amount}
        </Text>
        <Text>{mode}</Text>
      </View>
    </View>
  );
};

export default TransactionList;

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  roundedContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rounded: {
    width: 40,
    height: 40,
    borderRadius: 50,
    // backgroundColor: "red",
    marginRight: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: " #464258",
  },
  date: {
    fontSize: 12,
    color: " #464258",
    fontWeight: "400",
  },
  transfer: {
    alignItems: "center",
    fontSize: 12,
    color: " #464258",
    fontWeight: "400",
  },
});
