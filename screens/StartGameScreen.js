import {
  Alert,
  StyleSheet,
  TextInput,
  View,
  Text,
  useWindowDimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import ScreenTitle from "../components/ui/ScreenTitle";

const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { width, height } = useWindowDimensions();

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
  };

  const marginTopMain = height < 380 ? 10 : 100;
  const marginTopSecond = height < 380 ? 10 : 50;
  const marginHorizontal = height < 380 ? 80 : 40;
  const paddingContainer = height < 380 ? 20 : 40;

  return (
    <ScrollView style={styles.mainContainer}>
      <KeyboardAvoidingView style={styles.mainContainer} behavior="position">
        <View style={[styles.mainContainer, { marginTop: marginTopMain }]}>
          <View style={styles.screenTitle}>
            <ScreenTitle title={"GUESS MY NUMBER"} />
          </View>
          <View
            style={[
              styles.container,
              {
                marginTop: marginTopSecond,
                marginHorizontal: marginHorizontal,
                padding: paddingContainer,
              },
            ]}
          >
            <Text style={styles.promptTitle}>Enter a number</Text>
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
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },

  container: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    borderRadius: 8,
  },

  screenTitle: {
    paddingTop: 30,
    marginHorizontal: 20,
  },

  promptTitle: {
    fontFamily: "NotoSerif_400Regular_Italic",
    fontSize: 25,
    fontWeight: "900",
    color: Colors.brownLight,
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

  someText: {
    fontSize: 100,
  },
});

export default StartGameScreen;
