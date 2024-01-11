import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import ScreenTitle from "../components/ui/ScreenTitle";
import Colors from "../constants/colors";
import NumberContainer from "../components/game/NumberContainer";

const generateRandomNumber = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ScreenTitle title="Opponent's Guess" />
      </View>
      <View style={styles.numberContainer}>
        <NumberContainer number={initialGuess} />
      </View>
      <View>
        <Text>Higher Or Lower!?</Text>
      </View>
      <View>
        <PrimaryButton title="+" />
        <PrimaryButton title="-" />
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  numberContainer: {
    margin: 20,
    borderWidth: 2,
    borderColor: Colors.brownDark,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },
});
