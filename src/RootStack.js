import { createStackNavigator } from "react-navigation";
import HomeScene from "./scenes/Home";

const RootStack = createStackNavigator({
  Home: {
    screen: HomeScene
  }
});

export default RootStack;
