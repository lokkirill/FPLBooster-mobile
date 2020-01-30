import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Name = ({ name }) => {
  return <View style={[styles.name]}>
    <Text style={[styles.nameText]}>{name}</Text>
  </View>
}

const styles = StyleSheet.create({
  name: {
    flex: 5,
    justifyContent: 'center',
  },
  nameText: {
    fontSize: 16,
  },
})
