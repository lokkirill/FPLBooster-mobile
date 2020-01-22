import React from 'react';
import axios from 'axios'; 
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { elementsQuickSort } from '../helpers/sort'
import PlayerListItem from '../partials/player/PlayerListItem'


export default class PlayersScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: {
        elements: []
      },
    }
  }

  componentDidMount(){
    return axios({
      baseURL: 'https://fantasy.premierleague.com/api/bootstrap-static/',
      responseType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
      }
    })
    .then((response) => {
      this.setState({
        isLoading: false,
        dataSource: {
          ...response.data,
          elements: elementsQuickSort(this.playersData(response.data))
        },
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  playersData(data) {
    const { elements, teams, element_types } = data
    return elements.map(player => {
      let team = teams.filter(team => {return team.id == player.team}); 
      let element_type = element_types.filter(type => {return type.id == player.element_type}); 
      
      return {
        ...player,
        team: team ? team[0] : {id: player.team},
        element_type: element_type ? element_type[0] : {id: player.element_type},
        photo: `https://platform-static-files.s3.amazonaws.com/premierleague/photos/players/110x140/p${player.photo.split('.')[0]}.png`,
      }
    })
  }

  render(){
    const { dataSource, isLoading } = this.state
    const { elements } = dataSource

    return(
      <View style={styles.mainContainer}>
        {isLoading
          ? 
        <ActivityIndicator size="large"/>
          :
        <View style={styles.container}>
          <FlatList
            data={elements}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <PlayerListItem player={item}/>}
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
