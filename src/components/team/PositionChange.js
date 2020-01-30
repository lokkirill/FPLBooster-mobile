import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default PositionChange = ({ results }) => {
  const posDiff = (results.startingPosition ? results.startingPosition : 0) - results.position

  if (posDiff > 0) {
    return <View style={[styles.container]}>
      <Text style={styles.horizontalFlex, styles.posDiff}>
        <Ionicons name={`${Platform.OS === "ios" ? "ios" : "md"}-arrow-up`} size={15} color={'green'} />
      </Text>
      <Text style={styles.verticalFlex, styles.posDiff}>
        {posDiff}
      </Text>
    </View>
  } else if (posDiff < 0) {
    return <View style={[styles.container]}>
      <Text style={styles.horizontalFlex, styles.posDiff}>
        <Ionicons name={`${Platform.OS === "ios" ? "ios" : "md"}-arrow-down`} size={15} color={'red'} />
      </Text>
      <Text style={styles.verticalFlex, styles.posDiff}>
        {(-1)*posDiff}
      </Text>
    </View>
  } else {
    return <View style={[styles.container]}>
      <Text style={styles.verticalFlex, styles.textCenter}>
        -
      </Text>
    </View>
    }
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
  posDiff: {
    fontSize: 10,
  },
})
