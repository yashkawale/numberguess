import {
  Alert,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import ScreenTitle from "../components/ui/ScreenTitle";
import Colors from "../constants/colors";
import NumberContainer from "../components/game/NumberContainer";
import { Ionicons } from "@expo/vector-icons";
import RoundGuess from "../components/game/RoundGuess";

const generateRandomNumber = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNum;
  }
};

let min = 1;
let max = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = generateRandomNumber(min, max, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    min = 1;
    max = 100;
  }, []);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!!", "You know that you are cheating!", [
        { text: "Sorry!!", style: "destructive" },
      ]);
      return;
    }
    if (direction === "lower") {
      max = currentGuess;
    } else {
      min = currentGuess;
    }
    let nextGuess = generateRandomNumber(min, max, currentGuess);
    setCurrentGuess(nextGuess);
    setGuessRounds((prevGuessRound) => [nextGuess, ...prevGuessRound]);
  };

  const guessRoundsLength = guessRounds.length;

  let content = (
    <>
      <View style={styles.numberContainer}>
        <NumberContainer number={currentGuess} />
      </View>
      <View style={styles.controllers}>
        <View>
          <Text style={styles.btnTitle}>Lower Or Higher!?</Text>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title={
              <Ionicons name="md-remove" size={30} color={Colors.brownDark} />
            }
            func={nextGuessHandler.bind(this, "lower")}
          />
          <PrimaryButton
            title={
              <Ionicons name="md-add" size={30} color={Colors.brownDark} />
            }
            func={nextGuessHandler.bind(this, "greater")}
          />
        </View>
      </View>
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.landscapeContainer}>
          <PrimaryButton
            title={
              <Ionicons name="md-remove" size={30} color={Colors.brownDark} />
            }
            func={nextGuessHandler.bind(this, "lower")}
          />
          <View style={styles.numberContainer}>
            <NumberContainer number={currentGuess} />
          </View>
          <PrimaryButton
            title={
              <Ionicons name="md-add" size={30} color={Colors.brownDark} />
            }
            func={nextGuessHandler.bind(this, "greater")}
          />
        </View>
      </>
    );
  }

  const paddingTop = height < 380 ? 0 : 30;
  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.screenTitle, { paddingTop: paddingTop }]}>
        <ScreenTitle title="Opponent's Guess" />
      </View>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <RoundGuess
              roundNumber={guessRoundsLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </SafeAreaView>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 60,
  },

  screenTitle: {
    paddingTop: 30,
  },

  numberContainer: {
    margin: 20,
    borderWidth: 2,
    borderColor: Colors.brownDark,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 40,
  },

  controllers: {
    width: 350,
    backgroundColor: Colors.brownLight,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    borderRadius: 8,
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },

  btnTitle: {
    fontSize: 25,
    fontFamily: "NotoSerif_400Regular_Italic",
  },

  buttonContainer: {
    flexDirection: "row",
    gap: 20,
    padding: 20,
  },

  landscapeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  listContainer: {
    height: 235,
  },
});
