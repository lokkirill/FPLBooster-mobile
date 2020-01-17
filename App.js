import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import StatusBar from './components/partials/header/StatusBar'
import Tabs from './components/Tabs';

export default class HelloWorldApp extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  
  render() {
    return (
      <View style={styles.main}>
        <StatusBar />
        <Tabs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
