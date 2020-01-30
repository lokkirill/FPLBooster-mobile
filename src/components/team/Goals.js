import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Goals = ({stats}) => {
  return <View style={[styles.container, styles.horizontalFlex, styles.goals]}>
    <Text style={[styles.verticalFlex, styles.textCenter, styles.goalsText, styles.rightBorder]}>{`GF: ${stats.goalsFor}`}</Text>
    <Text style={[styles.verticalFlex, styles.textCenter, styles.goalsText, styles.rightBorder]}>{`GA: ${stats.goalsAgainst}`}</Text>
    <Text style={[styles.verticalFlex, styles.textCenter, styles.goalsText]}>{`GD: ${stats.goalsDifference}`}</Text>
  </View>
}
const styles = StyleSheet.create({
  container :{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  verticalFlex: {
    flex: 1,
  },
  horizontalFlex: {
    flex: 1,
    flexDirection: 'row',
  },
  goals: {
    flex: 5,
  },
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
  },
  goalsText: {
    fontSize: 12,
  },
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: '#dddddd',
  },
})
