import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { colors } from "../theme";

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "transparent",
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 18,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    textAlign: "center",
    color: colors.textInverted
  }
});

export default props => {
  return (
    <TextInput
      placeholderTextColor="#999"
      autoCapitalize={"none"}
      autoCorrect={false}
      keyboardType={"email-address"}
      {...props}
      style={[styles.textInput, props.style]}
    />
  );
};
