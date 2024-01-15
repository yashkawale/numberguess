import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const RoundGuess = ({ roundNumber, guess }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.roundNumber}>#{roundNumber}</Text>
      <Text style={styles.guessList}>
        Opponent's Guess: <Text style={styles.guess}>{guess}</Text>
      </Text>
    </View>
  );
};

export default RoundGuess;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    marginTop: 10,
    padding: 10,
    borderRadius: 8,
    width: 350,
  },

  roundNumber: {
    fontSize: 15,
    fontWeight: "700",
  },

  guessList: {
    color: Colors.brownDark,
    fontSize: 18,
    fontFamily: "NotoSerif_400Regular",
    textAlign: "center",
  },

  guess: {
    fontSize: 20,
    color: "red",
  },
});
