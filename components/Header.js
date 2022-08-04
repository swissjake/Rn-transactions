import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import profile from "../assets/profile.png";
import { AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image source={profile} />
        <View style={styles.headerText}>
          <Text style={styles.headerText}>Good Morning</Text>
          <Text style={styles.headerName}>Lois Dagana</Text>
        </View>
        <View>
          <AntDesign name="menufold" size={25} color="black" />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 20,
    color: "#464258",
  },
  headerName: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 20,
    paddingTop: 3,
    color: "#464258",
  },
});
