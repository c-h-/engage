import React from "react";
import { ScrollView, View, Dimensions } from "react-native";

import Container from "../components/Container";
import Heading from "../components/Heading";
import P from "../components/P";
import Bar from "../components/Bar";
import TextInput from "../components/TextInput";

export default class GetLocation extends React.Component {
  static navigationOptions = {
    title: "GetLocation",
    header: null
  };
  onPress = () => {
    const { navigate } = this.props.navigation;
    navigate("GetLocation");
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <ScrollView style={{ flexGrow: 1, flexDirection: "column" }}>
          <Container height={Dimensions.get("window").height}>
            <Heading>Of the People</Heading>
            <P center>Let's find your voting district</P>
            <P center>
              We need your home address to find your representatives and
              district.
            </P>
            <Bar position="bottom">
              <TextInput />
            </Bar>
          </Container>
        </ScrollView>
      </View>
    );
  }
}
