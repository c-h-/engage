import React from "react";
import { KeyboardAvoidingView, View } from "react-native";

export default props => {
  const containerStyles = {
    alignSelf: "stretch"
  };
  const styles = {
    flexDirection: props.stack ? "column" : "row",
    marginRight: 25,
    marginLeft: 25,
    justifyContent: "space-between",
    alignItems: "flex-end"
  };
  const positions = ["top", "left", "right", "bottom"];
  if (props.position && positions.indexOf(props.position) > -1) {
    containerStyles.position = "absolute";
    switch (props.position) {
      case "bottom":
        containerStyles.bottom = 0;
        containerStyles.left = 0;
        containerStyles.right = 0;
        containerStyles.paddingBottom = 30;
        break;
      case "top":
        containerStyles.top = 0;
        containerStyles.left = 0;
        containerStyles.right = 0;
        break;
      case "left":
        containerStyles.left = 0;
        break;
      case "right":
        containerStyles.right = 0;
        break;
    }
  }
  return (
    <KeyboardAvoidingView
      behavior="position"
      style={[containerStyles, props.containerStyle]}
    >
      <View style={[styles, props.style]}>{props.children}</View>
    </KeyboardAvoidingView>
  );
};
