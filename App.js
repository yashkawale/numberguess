import { useState } from "react";
import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundImage from "./assets/images/backgroundImage.jpg";
import Colors from "./constants/colors";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const confirmNumberHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let screen = <StartGameScreen onConfirmNumber={confirmNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
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
