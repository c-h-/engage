import { StackNavigator } from "react-navigation";

import HomeScreen from "../scenes/Home";
import FirstLaunch from "../scenes/FirstLaunch";
import GetLocation from "../scenes/GetLocation";

const Navigator = StackNavigator({
  FirstLaunch: { screen: FirstLaunch },
  GetLocation: { screen: GetLocation },
  Home: { screen: HomeScreen }
});

export default Navigator;
