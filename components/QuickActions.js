import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const quicks = [
  {
    title: "transfer",
    name: "compare-arrows",
    color: "#FAEEF0",
  },
  {
    title: "Bills",
    name: "insert-drive-file",
    color: "#E9EDF9",
  },
  {
    title: "Top",
    name: "multiple-stop",
    color: "#FDF8F3",
  },
  {
    title: "transfer",
    name: "compare-arrows",
    color: "#E8ECF7",
  },
];

const QuickActions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quick Actions</Text>
      <View style={styles.quick}>
        {quicks.map((quick, index) => (
          <View
            style={[styles.quickContainer, { backgroundColor: quick.color }]}
            key={index}
          >
            <MaterialIcons name={quick.name} size={24} color="#3F4462" />
            <Text style={styles.quickTitle}>{quick.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default QuickActions;

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
  quick: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  quickContainer: {
    width: 78,
    height: 64,
    paddingHorizontal: 8,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  quickTitle: {
    fontSize: 12,
    color: "#101B1A",
    fontWeight: "500",
    lineHeight: 20,
  },
});
