import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

const Balance = () => {
  return (
    <LinearGradient
      colors={[
        "rgba(255, 223, 157, 0.5) 11.14%",
        "rgba(212, 16, 191, 0.5) 56.94%",
        "rgba(255, 223, 157, 0.5) 87.42%)",
      ]}
      style={styles.background}
    >
      <View>
        <View style={styles.container}>
          <Text style={styles.account}>Account Balance</Text>
          <Text style={styles.amount}>$150,750</Text>
        </View>
        <View>
          <Text style={styles.savings}>Savings Account</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    height: 150,
  },
  background: {
    paddingVertical: 20,
    marginTop: 40,
    borderRadius: 30,
    paddingHorizontal: 30,
  },
  account: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color: "#464258",
  },
  amount: {
    fontSize: 36,
    fontWeight: "600",
    lineHeight: 20,
    color: "#464258",
    paddingTop: 29,
    zIndex: 999,
  },
  savings: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 20,
    color: "#464258",
  },
});
