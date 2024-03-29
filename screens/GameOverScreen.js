import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import ScreenTitle from "../components/ui/ScreenTitle";
import gameover from "../assets/images/gameover.png";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

const GameOverScreen = ({ roundNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let content = (
    <>
      <View style={styles.imageContainer}>
        <Image source={gameover} style={styles.image} />
      </View>
      <Text style={styles.result}>
        Your phone needed{" "}
        <Text style={styles.highlightedResult}>{roundNumber}</Text> to guess the
        number <Text style={styles.highlightedResult}>{userNumber}</Text>.
      </Text>
      <PrimaryButton title={"Start New Game"} func={onStartNewGame} />
    </>
  );

  if (width > 500) {
    content = (
      <>
        <View style={styles.landScapeContainer}>
          <View style={styles.imageContainer}>
            <Image source={gameover} style={styles.image} />
          </View>
          <View style={styles.landScapeView}>
            <Text style={styles.result}>
              Your phone needed{" "}
              <Text style={styles.highlightedResult}>{roundNumber}</Text> to
              guess the number{" "}
              <Text style={styles.highlightedResult}>{userNumber}</Text>.
            </Text>
            <PrimaryButton title={"Start New Game"} func={onStartNewGame} />
          </View>
        </View>
      </>
    );
  }

  const paddingVertical = height < 380 ? 20 : 50;
  return (
    <ScrollView style={[styles.screen, { paddingVertical: paddingVertical }]}>
      <View style={styles.container}>
        <ScreenTitle title={"GAME OVER"} />
        {content}
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  landScapeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },

  landScapeView: {
    alignItems: "center",
    gap: 15,
  },

  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 20,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  result: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "NotoSerif_400Regular",
    color: Colors.brownDark,
  },

  highlightedResult: {
    fontSize: 25,
    fontFamily: "NotoSerif_700Bold",
    color: "purple",
  },
});
