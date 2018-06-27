import React from "react";
import { TouchableHighlight } from "react-native";
import styled from "styled-components/primitives";
import Icon from "./Icon";

const Container = styled.View`
  padding: 10px 12px;
  background-color: purple;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;

const textSize = 18;
const Text = styled.Text`
  color: white;
  font-size: ${textSize};
`;

export default class Button extends React.Component {
  render() {
    const icon = (
      <Icon
        color="white"
        name={this.props.icon}
        size={textSize}
        style={{
          [this.props.iconLeft ? "marginRight" : "marginLeft"]: 6,
          //   [this.props.iconLeft ? "paddingLeft" : "paddingRight"]: 2,
          marginTop: 5
        }}
      />
    );
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <Container>
          {this.props.icon && this.props.iconLeft && icon}
          <Text>{this.props.children}</Text>
          {this.props.icon && !this.props.iconLeft && icon}
        </Container>
      </TouchableHighlight>
    );
  }
}
