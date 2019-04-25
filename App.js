import React, { Component } from 'react';
import {Provider} from 'react-redux';
import Store from './src/store';
import Screen1 from './src/View/Screen1'
import Screen2 from './src/View/Screen2'
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <Provider store = {Store}>
        <AppContainer/>
      </Provider>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Screen1: Screen1,
    Screen2: Screen2,
  },
  {
    initialRouteName: "Screen1",
    defaultNavigationOptions:{
      headerStyle: {
        backgroundColor: '#2598cc'
      },
      headerTintColor: '#FFFFFF',
      headerBackTitleStyle: {
        fontWeight: 'normal'
      }
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

