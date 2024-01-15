import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const ScreenTitle = ({ title }) => {
  return (
    <View>
      <Text style={styles.screenTitle}>{title}</Text>
    </View>
  );
};

export default ScreenTitle;

const styles = StyleSheet.create({
  screenTitle: {
    textAlign: "center",
    fontSize: 28,
    fontFamily: "NotoSerif_700Bold",
    color: Colors.brownDark,
    borderWidth: 3,
    // borderWidth: Platform.OS === "android" ? 3 : 0,
    // borderWidth: Platform.select({ ios: 9, android: 3 }),
    borderColor: Colors.brownDark,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
});
