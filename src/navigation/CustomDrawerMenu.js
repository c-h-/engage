import React from "react";
import { StyleSheet, Image, View } from "react-native";
import styled from "styled-components/primitives";
import { Spring } from "react-spring";
import { colors } from "../theme";
import Bar from "../components/Bar";

const Container = styled.View`
  background-color: ${colors.emphasis};
  flex: 1;
  padding: 40px 30px;
`;

const DrawerHeader = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.textInverted};
  padding-bottom: 15px;
  margin-bottom: 20px;
`;

const DrawerTitle = styled.Text`
  font-weight: bold;
  color: ${colors.textInverted};
  font-size: 14;
`;

const DrawerItemText = styled.Text`
  color: ${colors.textInverted};
  font-size: 14px;
`;

const DrawerItemSpacer = styled.View`
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: flex-start;
`;

const FlyOut = styled.View`
  background-color: ${colors.background};
  flex: 1;
  padding: 20px 30px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
`;

class DrawerItem extends React.Component {
  render() {
    return (
      <DrawerItemSpacer>
        {/* View stands in for icons */}
        <View
          style={{
            backgroundColor: colors.textInverted,
            width: 15,
            height: 15,
            marginRight: 20
          }}
        />
        <DrawerItemText>{this.props.children}</DrawerItemText>
      </DrawerItemSpacer>
    );
  }
}

export default class CustomDrawerMenu extends React.Component {
  render() {
    const { navigation } = this.props;
    const drawerIsOpen = true; // navigation.state.key === "DrawerOpen";
    return (
      <Container>
        <DrawerHeader>
          <Image
            source={require("../img/bird_mark.png")}
            style={{
              width: 60,
              height: 40
            }}
          />
          <View style={{ marginLeft: 15 }}>
            <DrawerTitle>Firsto</DrawerTitle>
            <DrawerTitle>Nameo</DrawerTitle>
          </View>
        </DrawerHeader>
        <DrawerItem onPress={() => navigation.navigate("screen1")}>
          PAYMENT
        </DrawerItem>
        <DrawerItem onPress={() => navigation.navigate("screen1")}>
          FREE RIDES
        </DrawerItem>
        <DrawerItem onPress={() => navigation.navigate("screen1")}>
          RIDE HISTORY
        </DrawerItem>
        <DrawerItem onPress={() => navigation.navigate("screen1")}>
          HOW TO RIDE
        </DrawerItem>
        <DrawerItem onPress={() => navigation.navigate("screen1")}>
          SAFETY
        </DrawerItem>
        <DrawerItem onPress={() => navigation.navigate("screen1")}>
          HELP
        </DrawerItem>
        <DrawerItem onPress={() => navigation.navigate("screen1")}>
          SETTINGS
        </DrawerItem>
        <DrawerItem onPress={() => navigation.navigate("screen1")}>
          BECOME A CHARGER
        </DrawerItem>
        <Bar
          position={"bottom"}
          style={
            {
              /* width: "100%" */
            }
          }
        >
          <Spring
            from={{ opacity: 0 }}
            to={{
              opacity: drawerIsOpen ? 1 : 0
            }}
          >
            {({ opacity }) => (
              <FlyOut style={{ opacity }}>
                <View>
                  <DrawerItemText>GIVE A RIDE.</DrawerItemText>
                  <DrawerItemText>GET A RIDE.</DrawerItemText>
                </View>
                {/* Image placeholder */}
                <View
                  style={{
                    width: 50,
                    height: 50,
                    backgroundColor: "#999",
                    borderRadius: 2
                  }}
                />
              </FlyOut>
            )}
          </Spring>
        </Bar>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  uglyDrawerItemText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E73536",
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: "#E73536",
    borderWidth: 1,
    textAlign: "center"
  }
});
