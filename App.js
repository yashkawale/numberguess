import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import BackgroundImage from "./assets/images/backgroundImage.jpg";

const App = () => {
  return (
    <LinearGradient style={styles.container} colors={["#deb887", "#f5f5dc"]}>
      <ImageBackground
        style={styles.container}
        imageStyle={styles.backgroundImage}
        source={BackgroundImage}
        resizeMode="cover"
        blurRadius={1}
      >
        <StartGameScreen />
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
