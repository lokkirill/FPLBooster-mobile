import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import SplashScreen from 'react-native-splash-screen';

import * as reducers from './src/store/reducers';
import AppNavigator from './AppNavigator';
import StatusBar from './src/components/header/StatusBar'

const store = createStore(combineReducers(reducers), applyMiddleware(thunk));

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.main}>
          <StatusBar />
          <AppNavigator />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
