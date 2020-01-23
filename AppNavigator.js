import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
 
import HomeScreen from './src/containers/HomeScreen';
import SettingsScreen from './src/containers/SettingsScreen';
import DetailsScreen from './src/containers/DetailsScreen';
import PlayerScreen from './src/containers/PlayerScreen';
import PlayersScreen from './src/containers/PlayersScreen';
import ProfileScreen from './src/containers/ProfileScreen';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#29333a',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
    },
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#29333a',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
    },
  }
);

const PlayersStack = createStackNavigator(
  {
    Players: { screen: PlayersScreen },
    Player: { screen: PlayerScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#29333a',
      },
      headerTintColor: '#FFFFFF',
      title: 'Players',
    },
  }
);

const App = createBottomTabNavigator(
  {
    Players: { screen: PlayersStack },
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        
        if (routeName === 'Players') {
          return <IconComponent name={`${Platform.OS === "ios" ? "ios" : "md"}-people`} size={25} color={tintColor} />;
        } else {
          if (routeName === 'Home') {
            iconName = `${Platform.OS === "ios" ? "ios" : "md"}-information-circle${focused ? '' : '-outline'}`;
          } else if (routeName === 'Settings') {
            iconName = `${Platform.OS === "ios" ? "ios" : "md"}-checkmark-circle${focused ? '' : '-outline'}`;
          }
          return <IconComponent name={iconName} size={25} color={tintColor} />;
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: '#29333a',
      inactiveTintColor: 'gray',
    },
  }
);

export default createAppContainer(App);
