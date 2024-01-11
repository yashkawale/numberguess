import { Alert, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const inputNumberHandler = (enteredText) => {
    setEnteredNumber(enteredText);
  };

  const resetButton = () => {
    setEnteredNumber("");
  };

  const confirmHandler = () => {
    const selectedNumber = parseInt(enteredNumber);

    if (isNaN(selectedNumber) || selectedNumber <= 0 || selectedNumber > 99) {
      Alert.alert("Invalid number!", "Enter a number between 1 and 99.", [
        { text: "OK!", style: "destructive", onPress: resetButton },
      ]);
      return;
    }
    onConfirmNumber(selectedNumber);
    console.log("Valid Number!");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        keyboardAppearance="default"
        onChangeText={inputNumberHandler}
        value={enteredNumber}
      />
      <PrimaryButton title="Confirm" func={confirmHandler} />
      <PrimaryButton title="Reset" func={resetButton} />
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
    borderBottomColor: Colors.brownMedium,
    textAlign: "center",
    color: Colors.brownLight,
  },
});

export default StartGameScreen;
