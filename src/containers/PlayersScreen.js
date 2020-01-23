import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import * as playersActions from '../store/players/actions';
import * as playersSelectors from '../store/players/reducer';

import PlayerListItem from '../components/player/PlayerListItem'

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

  componentDidMount() {
    this.props.dispatch(playersActions.fetchFPLData());
  }

  render(){
    const isLoading = false 

    return(
      <View style={styles.mainContainer}>
        {isLoading
          ? 
        <ActivityIndicator size="large"/>
          :
        <View style={styles.container}>
          <FlatList
            data={this.props.getPlayers}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <PlayerListItem player={item} {...this.props} />}
          />  
        </View>}
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
    getPlayers: playersSelectors.getPlayers(state),
  };
}

export default connect(mapStateToProps)(PlayersScreen);
