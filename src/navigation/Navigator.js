import { StackNavigator } from "react-navigation";

import HomeScreen from "../scenes/Home";

const Navigator = StackNavigator({
  Home: { screen: HomeScreen }
});

export default Navigator;
