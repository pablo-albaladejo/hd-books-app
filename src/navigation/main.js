import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from '../screens/home'
import ScannerScreen from '../screens/scanner'
import BookScreen from '../screens/book'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Scanner: {
    screen: ScannerScreen
  },
  Book: {
    screen: BookScreen,
  }

});

export default createAppContainer(AppNavigator);