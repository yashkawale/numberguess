import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundImage from "./assets/images/backgroundImage.jpg";
import Colors from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import {
  useFonts,
  NotoSerif_400Regular,
  NotoSerif_700Bold,
  NotoSerif_400Regular_Italic,
  NotoSerif_700Bold_Italic,
} from "@expo-google-fonts/noto-serif";

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  let [fontsLoaded, fontError] = useFonts({
    NotoSerif_400Regular,
    NotoSerif_700Bold,
    NotoSerif_400Regular_Italic,
    NotoSerif_700Bold_Italic,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const confirmNumberHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGameOver(false);
  };

  const gameOverHandler = () => {
    setGameOver(true);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <StartGameScreen onConfirmNumber={confirmNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameOver && userNumber) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        roundNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      style={styles.container}
      colors={[Colors.brownMedium, Colors.brownLight]}
    >
      <ImageBackground
        style={styles.container}
        imageStyle={styles.backgroundImage}
        source={BackgroundImage}
        resizeMode="cover"
        blurRadius={1}
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  },
});

export default App;
