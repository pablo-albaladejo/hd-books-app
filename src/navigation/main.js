import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from '../screens/home'
import ScannerScreen from '../screens/scanner'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Scanner: {
    screen: ScannerScreen
  }
});

export default createAppContainer(AppNavigator);