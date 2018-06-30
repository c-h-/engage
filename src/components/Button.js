import React from "react";
import { TouchableHighlight } from "react-native";
import styled from "styled-components/primitives";
import Icon from "./Icon";
import { colors } from "../theme";

const Container = styled.View`
  padding: 14px;
  background-color: ${colors.primary};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;

const textSize = 14;
const Text = styled.Text`
  color: ${colors.textInverted};
  font-size: ${textSize};
`;

export default class Button extends React.Component {
  render() {
    let icon;
    if (this.props.icon) {
      icon = (
        <Icon
          color={colors.textInverted}
          name={this.props.icon}
          size={textSize}
          style={{
            [this.props.iconLeft ? "marginRight" : "marginLeft"]: 6,
            //   [this.props.iconLeft ? "paddingLeft" : "paddingRight"]: 2,
            marginTop: 5
          }}
        />
      );
    }
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={this.props.containerStyle}
      >
        <Container>
          {this.props.icon && this.props.iconLeft && icon}
          <Text>{this.props.children}</Text>
          {this.props.icon && !this.props.iconLeft && icon}
        </Container>
      </TouchableHighlight>
    );
  }
}
