import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import StatusBar from './partials/header/StatusBar'

export default class Header extends Component {
  render() {
    return (
      <View>
        <StatusBar />
        <Text style={styles.text}>Privet, podstrizhisya!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
