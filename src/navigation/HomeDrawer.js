import React from "react";
import { Text } from "react-native";
import { DrawerNavigator, StackNavigator } from "react-navigation";

import { colors } from "../theme";
import HomeMap from "../scenes/HomeMap";
import GetLocation from "../scenes/GetLocation";
import CustomDrawerMenu from "./CustomDrawerMenu";

class MenuButton extends React.Component {
  render() {
    return (
      <Text
        onPress={() => this.props.navigation.navigate("DrawerToggle")}
        style={{ color: colors.textInverted }}
      >
        Menu
      </Text>
    );
  }
}

class QRCode extends React.Component {
  render() {
    return (
      <Text
        onPress={() => this.props.navigation.navigate("DrawerToggle")}
        style={{ color: colors.textInverted }}
      >
        Scan Bird
      </Text>
    );
  }
}

const MapStack = StackNavigator(
  {
    HomeMap: {
      screen: HomeMap,
      name: "HomeMap"
    }
  },
  {
    // headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      title: "Nearby Birds",
      headerLeft: <MenuButton navigation={navigation} />,
      headerRight: <QRCode navigation={navigation} />,
      headerStyle: { backgroundColor: colors.background },
      headerTitleStyle: {
        color: colors.textInverted,
        marginRight: "auto",
        marginLeft: "auto"
      }
    })
  }
);

const LocationStack = StackNavigator(
  {
    GetLocation: {
      screen: GetLocation,
      name: "GetLocation"
    }
  },
  {
    // headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      title: "Get Location",
      headerLeft: <MenuButton navigation={navigation} />,
      headerRight: <QRCode navigation={navigation} />,
      headerStyle: { backgroundColor: colors.background },
      headerTitleStyle: {
        color: colors.textInverted,
        marginRight: "auto",
        marginLeft: "auto"
      }
    })
  }
);

const DrawerNavigation = DrawerNavigator(
  {
    MapStack: {
      screen: MapStack,
      name: "MapStack"
    },
    LocationStack: {
      screen: LocationStack,
      name: "LocationStack"
    }
  },
  {
    contentComponent: CustomDrawerMenu
  }
);

export default DrawerNavigation;
