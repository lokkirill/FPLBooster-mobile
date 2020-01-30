import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default Logo = ({ teamCode }) => {
  return <View style={[styles.container, styles.logo]}>
    <Image
      source={teamLogo(teamCode)}
      style={styles.icon25} />
  </View>
}

const teamLogo = (teamCode) => {
  // "return require(`../../images/teams/${teamCode}.png`);" doesn't work
  switch (teamCode) {
    case 1:  return require('../../images/teams/1.png');
    case 3:  return require('../../images/teams/3.png');
    case 4:  return require('../../images/teams/4.png');
    case 6:  return require('../../images/teams/6.png');
    case 7:  return require('../../images/teams/7.png');
    case 8:  return require('../../images/teams/8.png');
    case 11: return require('../../images/teams/11.png');
    case 13: return require('../../images/teams/13.png');
    case 14: return require('../../images/teams/14.png');
    case 20: return require('../../images/teams/20.png');
    case 21: return require('../../images/teams/21.png');
    case 31: return require('../../images/teams/31.png');
    case 36: return require('../../images/teams/36.png');
    case 39: return require('../../images/teams/39.png');
    case 43: return require('../../images/teams/43.png');
    case 45: return require('../../images/teams/45.png');
    case 49: return require('../../images/teams/49.png');
    case 57: return require('../../images/teams/57.png');
    case 90: return require('../../images/teams/90.png');
    case 91: return require('../../images/teams/91.png');
    default: return require('../../images/teams/default.png');
  }
}

const styles = StyleSheet.create({
  container :{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  logo: {
    flex: 1.5,
  },
  icon25: {
    width: 25,
    height: 25,
  },
})
