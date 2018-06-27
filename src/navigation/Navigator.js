import { StackNavigator } from "react-navigation";

import HomeScreen from "../scenes/Home";
import FirstLaunch from "../scenes/FirstLaunch";

const Navigator = StackNavigator({
  Home: { screen: HomeScreen },
  FirstLaunch: { screen: FirstLaunch }
});

export default Navigator;
