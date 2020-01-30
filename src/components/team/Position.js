import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Position = ({ position }) => {
  return <View style={[styles.container, styles.horizontalFlex]}>
    <Text style={[styles.verticalFlex, styles.textCenter]}>
      {position}
    </Text>
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
  textCenter: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
  },
})
