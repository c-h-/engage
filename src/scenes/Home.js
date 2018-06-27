import React from "react";
import { View, Text, Button } from "react-native";

export default class Home extends React.Component {
  static navigationOptions = {
    title: "Home"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Scene</Text>
        <Button onPress={() => navigate("FirstLaunch")} title="FirstLaunch" />
      </View>
    );
  }
}
