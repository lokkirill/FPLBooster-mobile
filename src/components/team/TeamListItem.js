import React from 'react';
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const Position = ({ position }) => {
  return <View style={styles.container}>
    <Text style={[styles.formItemHeadText, styles.textCenter]}>
      {position}
    </Text>
  </View>
}

const Logo = ({ teamCode }) => {
  return <View style={styles.container}>
    <Image
      source={teamLogo(teamCode)}
      style={styles.icon25} />
  </View>
}

const teamLogo = (teamCode) => {
  // te most shit of the shit I've ever did
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

const Name = ({ name }) => {
  return <View style={[styles.name]}>
    <Text style={[styles.nameText]}>
      {name}
    </Text>
  </View>
}

const Points = ({ stats }) => {
  return <View style={[styles.container, styles.horizontalFlex, styles.points]}>
    <Text style={[styles.verticalFlex, styles.textCenter]}>
      {stats.played}
    </Text>
    <Text style={[styles.verticalFlex, styles.textCenter]}>
      {stats.won}
    </Text>
    <Text style={[styles.verticalFlex, styles.textCenter]}>
      {stats.drawn}
    </Text>
    <Text style={[styles.verticalFlex, styles.textCenter]}>
      {stats.lost}
    </Text>
    <Text style={[styles.verticalFlex, styles.textCenter]}>
      {stats.points}
    </Text>
  </View>
}

export default class PlayerListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      opened: false,
      pointsMode: 'overall', // overall/home/away
    }
  }
  
  render() {
    const { team } = this.props

    return(
      <View style={[styles.horizontalFlex, styles.element]}>
        <Position position={team.results.position} />
        <Logo teamCode={team.code} />
        <Name name={team.name} />
        <Points stats={team.results[this.state.pointsMode]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  verticalFlex: {
    flex: 1,
  },
  horizontalFlex: {
    flex: 1,
    flexDirection: 'row',
  },
  element: {
    height: 36,
  },

  name: {
    flex: 5,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 16,
  },

  points: {
    flex: 5,
  },

  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
  },
  icon25: {
    width: 25,
    height: 25,
  },
})
