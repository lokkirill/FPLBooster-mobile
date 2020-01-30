import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Points = ({ stats }) => {
  return <View style={[styles.container, styles.horizontalFlex, styles.points]}>
    <Text style={[styles.verticalFlex, styles.textCenter, styles.rightBorder]}>{stats.played}</Text>
    <Text style={[styles.verticalFlex, styles.textCenter, styles.rightBorder]}>{stats.won}</Text>
    <Text style={[styles.verticalFlex, styles.textCenter, styles.rightBorder]}>{stats.drawn}</Text>
    <Text style={[styles.verticalFlex, styles.textCenter, styles.rightBorder]}>{stats.lost}</Text>
    <Text style={[styles.verticalFlex, styles.textCenter, styles.rightBorder]}>{stats.points}</Text>
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
  points: {
    flex: 5,
  },
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
  },
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: '#dddddd',
  },
})
