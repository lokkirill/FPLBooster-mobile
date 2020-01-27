import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const Position = ({ position }) => {
  return <View style={styles.container}>
    <Text style={[styles.formItemHeadText, styles.textCenter]}>
      {position}
    </Text>
  </View>
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
  
  render(){
    const { team, results } = this.props.team
    

    return(
      <View style={[styles.horizontalFlex, styles.element]}>
        <Position position={results.position} />
        <Name name={team.name} />
        <Points stats={results[this.state.pointsMode]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
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
    height: 32,
    
  },

  name: {
    flex: 6,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 18,
  },

  points: {
    flex: 5,
  },

  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 18,
  },

  // container: {
  //   // borderRadius: 15,
  //   backgroundColor: '#F0F0F0',
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },
  //   shadowOpacity: 0.33,
  //   shadowRadius: 3.27,
  //   elevation: 5,
  // },
  // playerContainer: {
  //   marginTop: 10,
  //   marginLeft: 10,
  //   marginBottom: 5,
  //   marginRight: 10,
  // },

  // Image
  // imageContainer: {
  //   flex: 1,
  // },
  // imageBackground: {
  //   width: 55,
  //   height: 70,
  //   backgroundColor: 'white',
  //   borderRadius: 10,
  //   shadowColor: "#000",
  //   shadowOffset: {
  //     width: 0,
  //     height: 3,
  //   },
  //   shadowOpacity: 0.33,
  //   shadowRadius: 1.27,
  //   elevation: 2,
  // },
  
  // dataContainer: {
  //   flex: 6,
  //   height: 70,
  // },
  
  // Text
  // name: {
  //   flex: 5.5,
  //   fontSize: 18,
  //   marginLeft: 10,
  // },
  // club: {
  //   flex: 1,
  //   fontSize: 16,
  //   marginLeft: 10,
  // },

  // Position
  // playerPosition: {
  //   borderRadius: 6,
  //   flex: 1,
  //   fontSize: 16,
  //   marginRight: 0,
  //   textAlign: 'center',
  // },
  // posGKP: {
  //   backgroundColor: '#ebff00',
  // },
  // posDEF: {
  //   backgroundColor: '#00ff87',
  // },
  // posMID: {
  //   backgroundColor: '#05f0ff',
  // },
  // posFWD: {
  //   backgroundColor: '#e90052',
  //   color: 'white'
  // },
})
