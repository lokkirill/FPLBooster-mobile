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
// import TeamScreen from './src/containers/TeamScreen';
import TeamsScreen from './src/containers/TeamsScreen';
import ProfileScreen from './src/containers/ProfileScreen';

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#37003c',
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
        backgroundColor: '#37003c',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
    },
  }
);

const PlayersStack = createStackNavigator(
  {
    Players: {
      screen: PlayersScreen,
      path: 'players',
    },
    Player: {
      screen: PlayerScreen,
      path: 'player/:id',
      navigationOptions: ({ navigation }) => ({
        title: `${navigation.state.params.player.first_name} ${navigation.state.params.player.web_name}`,
      }),
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#37003c',
      },
      headerTintColor: '#FFFFFF',
      title: 'Players',
    },
  }
);

const TeamsStack = createStackNavigator(
  {
    Teams: {
      screen: TeamsScreen,
      path: 'teams',
    },
    // Team: {
    //   screen: TeamScreen,
    //   path: 'team/:id',
    //   navigationOptions: ({ navigation }) => ({
    //     title: `${navigation.state.params.player.first_name} ${navigation.state.params.player.web_name}`,
    //   }),
    // },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#37003c',
      },
      headerTintColor: '#FFFFFF',
      title: 'Teams',
    },
  }
);

const App = createBottomTabNavigator(
  {
    Players: { screen: PlayersStack },
    Teams: { screen: TeamsStack },
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
          return <IconComponent name={`${Platform.OS === "ios" ? "ios" : "md"}-person`} size={25} color={tintColor} />;
        } else if (routeName === 'Teams') {
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
