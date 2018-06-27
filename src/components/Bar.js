import React from "react";
import { View } from "react-native";

export default props => {
  const styles = {
    flexDirection: "row-reverse",
    marginRight: 20,
    marginLeft: 20,
    justifyContent: "space-around"
  };
  const positions = ["top", "left", "right", "bottom"];
  if (props.position && positions.indexOf(props.position) > -1) {
    styles.position = "absolute";
    switch (props.position) {
      case "bottom":
        styles.bottom = 0;
        styles.left = 0;
        styles.right = 0;
        styles.paddingBottom = 20;
        break;
      case "top":
        styles.top = 0;
        styles.left = 0;
        styles.right = 0;
        break;
      case "left":
        styles.left = 0;
        break;
      case "right":
        styles.right = 0;
        break;
    }
  }
  return <View style={styles}>{props.children}</View>;
};
