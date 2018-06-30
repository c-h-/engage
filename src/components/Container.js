import React from "react";
import { SafeAreaView } from "react-native";
import { colors } from "../theme";

export default props => {
  return (
    <SafeAreaView
      style={{ backgroundColor: colors.background, flexGrow: 1, flex: 1 }}
      {...props}
    />
  );
};
