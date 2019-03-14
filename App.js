/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import {Platform, StyleSheet, Text, View } from 'react-native';
import Home from './src/Screens/Home';
import Amplify from 'aws-amplify';
import store, { AppWithNavigationState } from './src/Redux/Store/index'

import awsmobile from './src/aws-exports';

Amplify.configure(awsmobile);

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const App = () => 
  (
    <Provider store={store}>
      <AppWithNavigationState />
    </Provider>
  );

export default App;