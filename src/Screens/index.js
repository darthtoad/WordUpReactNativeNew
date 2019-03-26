import LogInScreen from './LogInScreen';
import SignUpScreen from './SignUpScreen';
import SavedScreen from './SavedScreen';
import WelcomeScreen from './WelcomeScreen';
import DefinitionScreen from './DefinitionScreen';

import {
    createBottomTabNavigator,
    createStackNavigator,
    createAppContainer
  } from 'react-navigation';  

  import {
    createNavigationReducer
  } from "react-navigation-redux-helpers";  

export const AuthNavigator = createStackNavigator({
    LogIn: { screen: LogInScreen },
    SignUp: { screen: SignUpScreen },
})

export const MainNavigator = createBottomTabNavigator({
    Saved: { screen: SavedScreen },
    Welcome: { screen: WelcomeScreen },
    Definition: { screen: DefinitionScreen },
})

export const AppNavigator = createStackNavigator({
    Auth: { screen: AuthNavigator },
    Main: { screen: MainNavigator },
})

const AppContainer = createNavigationReducer(AppNavigator);

export default AppContainer;