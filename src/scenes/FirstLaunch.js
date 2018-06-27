import React from "react";

import Button from "../components/Button";
import Container from "../components/Container";
import Heading from "../components/Heading";
import P from "../components/P";
import Bar from "../components/Bar";

export default class FirstLaunch extends React.Component {
  static navigationOptions = {
    title: "FirstLaunch",
    header: null
  };
  onPress = () => {
    const { navigate } = this.props.navigation;
    navigate("GetLocation");
  };
  render() {
    return (
      <Container>
        <Heading>Of the People</Heading>
        <P center>
          Bringing you the relevant issues and letting you know when to act
        </P>
        <Bar position="bottom">
          <Button icon="arrow-forward" color="white" onPress={this.onPress}>
            Give Me Control
          </Button>
        </Bar>
      </Container>
    );
  }
}
