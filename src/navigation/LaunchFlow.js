import { Animated, Easing } from "react-native";
import { StackNavigator } from "react-navigation";

import Launch from "../scenes/Launch";
import Home from "./HomeDrawer";

// kill transition to kill drawer appearing during transition animations
const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
});

const LaunchFlow = StackNavigator(
  {
    Launch: {
      screen: Launch
    },
    Home: {
      screen: Home
    }
  },
  {
    initialRouteName: "Launch",
    mode: "modal",
    transitionConfig: noTransitionConfig,
    navigationOptions: {
      header: null,
      gesturesEnabled: false // don't allow swiping back into onboard flow
    }
  }
);

export default LaunchFlow;
