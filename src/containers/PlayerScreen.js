import React from 'react';
import { View } from 'react-native';

import PlayerListItem from '../components/player/PlayerListItem'

export default class PlayerScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { player } = this.props.navigation.state.params

    return(
      <View>
        <PlayerListItem player={player} />
      </View>
    );
  }
}
