import React, { Component } from 'react';
import { StatusBar, View } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: 'white',
        }}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#000000"
        />
      </View>
    );
  }
}
