import React from 'react';
import axios from 'axios'; 
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

import { elementsQuickSort } from '../helpers/sort'

export default class PlayersScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: {
        elements: [],
        teams: []
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
          elements: elementsQuickSort(response.data.elements)
        },
      });
    })
    .catch((error) =>{
      console.error(error);
    });
  }

  getByValue(arr, value) {
    let result = arr.filter(function(o){return o.id == value;} );
    return result ? result[0].short_name : null;
  }

  render(){
    const { dataSource, isLoading } = this.state
    const { elements, teams } = dataSource

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
            renderItem={({item}) =>
              <TouchableHighlight style={{borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth}}
                // onPress={() => this._onPress(item)}
                >
                <View style={[{flex: 1, flexDirection: 'row'}]}>
                  <View style={styles.club}>
                    {/* <Text style={styles.title}>{this.getByValue(teams, item.team)}</Text> */}
                    <Text style={styles.title}>{item.total_points}</Text>
                  </View>
                  {/* <View style={[styles.playerType, styles[`player${item.element_type}`]]}/> */}
                  <View style={[styles.item]}>
                    <Text style={styles.title}>{`${item.first_name} ${item.web_name}`}</Text>
                  </View>
                </View>
              </TouchableHighlight>}
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
  item: {
    fontSize: 12,
    height: 40,
  },
  title: {
    fontSize: 24,
  },
  club: {
    width: 64,
    alignItems: 'center'
  },
  playerType: {
    width: 5
  },
  player1: { // goalkeeper - 1
    backgroundColor: '#94c2f7',
  },
  player2: { // defender - 2
    backgroundColor: '#a1f794',
  },
  player3: { // midfielder - 3
    backgroundColor: '#f7ef94',
  },
  player4: { // forward - 4
    backgroundColor: '#f79494',
  },
})
