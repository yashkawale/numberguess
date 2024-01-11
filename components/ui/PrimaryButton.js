import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

const PrimaryButton = ({ title, func }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.innerContainer]
            : styles.innerContainer
        }
        android_ripple={{ color: Colors.brownDark }}
        onPress={func}
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
    backgroundColor: Colors.brownMedium,
    paddingVertical: 6,
    paddingHorizontal: 15,
    elevation: 2,
  },

  btnText: {
    fontSize: 20,
    color: Colors.brownDark,
  },
  pressed: {
    opacity: 0.7,
  },
});

export default PrimaryButton;
