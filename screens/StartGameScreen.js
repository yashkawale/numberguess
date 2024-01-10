import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        keyboardAppearance="default"
      />
      <PrimaryButton title="Confirm" />
      <PrimaryButton title="Reset" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginHorizontal: 40,
    padding: 40,
    gap: 10,
    borderRadius: 8,
  },

  numberInput: {
    height: 50,
    width: 50,
    fontSize: 40,
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#deb887",
    textAlign: "center",
    color: "#f5f5dc",
  },
});

export default StartGameScreen;
