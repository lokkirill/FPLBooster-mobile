import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import Divider from './Divider'
import Form from './Form'
import Goals from './Goals'
import Logo from './Logo'
import Name from './Name'
import Points from './Points'
import Position from './Position'
import PositionChange from './PositionChange'

export default class TeamListItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      opened: false, // true / false / Math.random(1) > 0.8
    }
  }

  openOrClose = () => {
    this.setState(prevstate => ({
      opened: !prevstate.opened
    })
  )}

  formArr = (teamShortName, form) => {
    return form.map(fe => {
      const teamScore     = fe.teams.filter(el => {return el.team.club.abbr == teamShortName})[0].score
      const opponentScore = fe.teams.filter(el => {return el.team.club.abbr != teamShortName})[0].score
      
      return teamScore > opponentScore ? 'W' : teamScore < opponentScore ? 'L' : 'D'
    })
  }

  render() {
    const { team, pointsMode } = this.props
    const { opened } = this.state
    const form = this.formArr(team.short_name, team.results.form)

    return(
      (<TouchableWithoutFeedback
        onPress={this.openOrClose}>
        <View style={[styles.verticalFlex, styles[opened ? 'openedTeamContainer' : 'teamContainer']]}>
          {/* Main line */}
          <View style={[styles.horizontalFlex, styles.mainElement]}>
            <Position position={team.results.position} />
            <Divider />
            <Logo teamCode={team.code} />
            <Name name={team.name} />
            <Divider />
            <Points stats={team.results[pointsMode]} />
          </View>
          {/* Additional data */}
          {opened && (
            <View style={[styles.horizontalFlex, styles.secondaryElement]}>
              <PositionChange results={team.results}/>
              <Divider />
              <Form form={form} />
              <Divider />
              <Goals stats={team.results[pointsMode]} />
            </View>)}
        </View>
      </TouchableWithoutFeedback>)
    );
  }
}

TeamListItem.defaultProps = {
  pointsMode: 'overall', // overall/home/away
  team: {
    short_name: '',
    results: {
      form: [],
    }
  },
}

const styles = StyleSheet.create({
  verticalFlex: {
    flex: 1,
  },
  horizontalFlex: {
    flex: 1,
    flexDirection: 'row',
  },
  teamContainer: {
    height: 36,
  },
  openedTeamContainer: {
    height: 72,
  },
  mainElement: {
    backgroundColor: '#eeeeee',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.33,
    shadowRadius: 3,
    elevation: 3,
  },
  secondaryElement: {
    backgroundColor: '#FFF',
  },
})
