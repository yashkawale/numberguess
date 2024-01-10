import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View>
      <Text>StartGameScreen</Text>
      <PrimaryButton title="Submit" />
      <PrimaryButton title="Reset" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default StartGameScreen;
