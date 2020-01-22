import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class PlayerListItem extends React.Component {
  render(){
    const { player } = this.props

    return(
      <View style={styles.container}>
        <TouchableHighlight>
          <View>
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
           </View>
        </TouchableHighlight>
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

  container: {
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    height: 90,
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
    backgroundColor: '#94c2f7',
  },
  posDEF: {
    backgroundColor: '#a1f794',
  },
  posMID: {
    backgroundColor: '#f7ef94',
  },
  posFWD: {
    backgroundColor: '#f79494',
  },
})
