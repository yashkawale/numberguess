import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const NumberContainer = ({ number }) => {
  return <Text style={styles.number}>{number}</Text>;
};

export default NumberContainer;

const styles = StyleSheet.create({
  number: {
    height: 50,
    width: 50,
    fontSize: 40,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: Colors.brownMedium,
    textAlign: "center",
    color: Colors.brownDark,
  },
});
