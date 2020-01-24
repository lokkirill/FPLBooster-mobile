import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

export default class PlayerListItem extends React.Component {
  _openPlayerScreen(player) {
    this.props.navigation.navigate('Player', { player })
  }
  
  render(){
    const { player } = this.props

    return(
      <View style={[styles.container, styles.element]}>
        <TouchableWithoutFeedback
          onPress={() => this._openPlayerScreen(player)}
          style={styles.element}
        >
          <View style={[styles.playerContainer, styles.horizontalFlex]}>
            {/* Image (left part) */}
            <View style={[styles.imageContainer]}>
              <ImageBackground
                style={styles.imageBackground}
                imageStyle={{ borderRadius: 10}}
                source={{ uri: player.photo }}
              />
            </View>
            {/* Data (right part) */}
            <View style={[styles.dataContainer]}>
              <View style={[styles.verticalFlex]}>
                <View style={[styles.horizontalFlex]}>
                  <Text style={styles.name}> 
                    {`${player.first_name} ${player.web_name}`}
                  </Text>
                  <Text style={[styles.playerPosition, styles[`pos${player.element_type.singular_name_short}`]]}>
                    {player.element_type.singular_name_short}
                  </Text>
                </View>  
                <Text style={styles.club}>{`${player.team.name}`}</Text>
                <Text style={styles.club}>{`${player.team.name}`}</Text>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

PlayerListItem.defaultProps = {
  player: {
    team: {},
    element_type: {}
  }
}

const styles = StyleSheet.create({
  verticalFlex: {
    flex: 1,
  },
  horizontalFlex: {
    flex: 1,
    flexDirection: 'row',
  },

  element: {
    height: 90,
  },
  container: {
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.33,
    shadowRadius: 3.27,
    elevation: 5,
  },
  playerContainer: {
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 5,
    marginRight: 10,
  },

  // Image
  imageContainer: {
    flex: 1,
  },
  imageBackground: {
    width: 55,
    height: 70,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.33,
    shadowRadius: 1.27,
    elevation: 2,
  },
  
  dataContainer: {
    flex: 6,
    height: 70,
  },
  
  // Text
  name: {
    flex: 5.5,
    fontSize: 18,
    marginLeft: 10,
  },
  club: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },

  // Position
  playerPosition: {
    borderRadius: 6,
    flex: 1,
    fontSize: 16,
    marginRight: 0,
    textAlign: 'center',
  },
  posGKP: {
    backgroundColor: '#ebff00',
  },
  posDEF: {
    backgroundColor: '#00ff87',
  },
  posMID: {
    backgroundColor: '#05f0ff',
  },
  posFWD: {
    backgroundColor: '#e90052',
    color: 'white'
  },
})
