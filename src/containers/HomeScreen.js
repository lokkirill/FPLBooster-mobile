import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as playersSelectors from '../store/players/reducer';

class PlayersScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      dataSource: {
        elements: []
      },
    }
  }

  render() {
    const table = this.props.getTable
    
    const firstTeamForm = table[0].results.form
    // .map(element => {
    //   return element.teams.map(element => {
    //     return `${element.team.id} - ${element.score}`
    //   })
    // })

    const firstTeam = table.map(element => {
      return element
    })

    return(
      <View style={styles.mainContainer}>
        <ScrollView>
          <Text>
            {JSON.stringify(firstTeam, null, 4)}
          </Text>
        
          <Text>
            {JSON.stringify(firstTeamForm, null, 4)}
          </Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})

const mapStateToProps = (state) => {
  return {
    getTable: playersSelectors.getTable(state),
  };
}

export default connect(mapStateToProps)(PlayersScreen);
