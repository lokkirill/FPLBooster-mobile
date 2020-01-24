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

  render(){
    return(
      <View style={styles.mainContainer}>
        <ScrollView>
          <Text>
            {JSON.stringify(this.props.getPreviousGameWeek, null, 4)}
          </Text>
          <Text>
            {JSON.stringify(this.props.getCurrentGameWeek, null, 4)}
          </Text>
          <Text>
            {JSON.stringify(this.props.getNextGameWeek, null, 4)}
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
    getGameWeeks: playersSelectors.getGameWeeks(state),
    getPreviousGameWeek: playersSelectors.getPreviousGameWeek(state),
    getCurrentGameWeek: playersSelectors.getCurrentGameWeek(state),
    getNextGameWeek: playersSelectors.getNextGameWeek(state),
  };
}

export default connect(mapStateToProps)(PlayersScreen);
