import React from "react";
import { View, Text } from "react-native";

class Home extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Scene</Text>
      </View>
    );
  }
}

export default Home;
