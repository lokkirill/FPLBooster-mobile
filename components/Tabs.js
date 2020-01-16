import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});



export default createAppContainer(TabNavigator);
