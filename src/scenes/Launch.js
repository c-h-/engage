import React from "react";
import { View, ScrollView, Image, Platform } from "react-native";
import styled from "styled-components/primitives";
import { Spring } from "react-spring/dist/native";
import Bar from "../components/Bar";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import Container from "../components/Container";

const platform = Platform.OS;
const logoImage = (
  <Image
    source={require("../img/bird_logo.png")}
    style={{
      width: 110,
      height: 110
    }}
  />
);

const SubText = styled.Text`
  color: #999;
  font-size: 14px;
  text-align: center;
  margin-bottom: 15px;
`;

export default class Launch extends React.Component {
  state = {
    isFocused: false
  };
  toggle = () => this.setState({ isFocused: !this.state.isFocused });
  render() {
    const { navigate } = this.props.navigation;
    const { isFocused } = this.state;
    const legalSpring = (
      <Spring
        from={{ opacity: 0 }}
        to={{
          opacity: isFocused ? 1 : 0
        }}
        toggle={this.toggle}
      >
        {({ opacity }) => (
          <View style={{ opacity }}>
            <SubText>
              By signing up, I confirm that I'm at least 18 years old, and I
              agree to Bird's Rental Agreement, Terms of Use, and Privacy
              Policy.
            </SubText>
          </View>
        )}
      </Spring>
    );
    return (
      <Container>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          {platform === "web" ? (
            logoImage
          ) : (
            <Spring
              from={{ opacity: 1 }}
              to={{
                opacity: isFocused ? 0 : 1
              }}
              toggle={this.toggle}
            >
              {({ opacity }) => <View style={{ opacity }}>{logoImage}</View>}
            </Spring>
          )}

          <View />
          <Bar position={"bottom"} stack>
            {platform !== "web" && legalSpring}
            <TextInput
              onFocus={this.toggle}
              onBlur={this.toggle}
              placeholder="ENTER EMAIL"
              style={{ marginBottom: 25, width: "100%" }}
            />
            <Button
              onPress={() => navigate("Home")}
              containerStyle={{ width: "100%", marginBottom: 25 }}
            >
              RIDE
            </Button>
            {platform === "web" && legalSpring}
          </Bar>
        </ScrollView>
      </Container>
    );
  }
}
