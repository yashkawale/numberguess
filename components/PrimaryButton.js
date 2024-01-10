import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const PrimaryButton = ({ title }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.innerContainer]
            : styles.innerContainer
        }
        android_ripple={{ color: "#554736" }}
      >
        <Text style={styles.btnText}>{title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },

  innerContainer: {
    backgroundColor: "#deb887",
    paddingVertical: 6,
    paddingHorizontal: 15,
    elevation: 2,
  },

  btnText: {
    fontSize: 20,
    color: "#211f1d",
  },
  pressed: {
    opacity: 0.7,
  },
});

export default PrimaryButton;
