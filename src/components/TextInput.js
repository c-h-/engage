import React from "react";
import { TextInput, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 18
  }
});

export default props => {
  return <TextInput style={styles.textInput} {...props} />;
};
