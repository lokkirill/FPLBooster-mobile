import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>Privet, podstrizhisya!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    backgroundColor: '#29333a',
    height: 56,
    justifyContent: "center",
  },
  text: {
    color: 'white',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  }
});
