import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Form = ({form}) => {
  return <View style={[styles.container, styles.horizontalFlex, styles.form]}>
    <View style={[styles.container, styles.horizontalFlex]}>
      {form.map((res, index) => {
        return (
          <FormElement res={res} key={index} />
        )
      })}
    </View>
  </View>
}

const FormElement = ({res}) => {
  return res == "W" ?
    <View style={[styles.formElement, styles.wonFormElement]}>
      <Text style={[styles.formText]}>{res}</Text>
    </View>  
    : res == "D" ?
    <View style={[styles.formElement, styles.drawnFormElement]}>
      <Text style={[styles.formText]}>{res}</Text>
    </View>  
    : 
    <View style={[styles.formElement, styles.lostFormElement]}>
      <Text style={[styles.formText]}>{res}</Text>
    </View>
}

const styles = StyleSheet.create({
  container :{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  horizontalFlex: {
    flex: 1,
    flexDirection: 'row',
  },
  form: {
    flex: 6.5,
  },
  formElement: {
    margin: 4,
    width: 24,
    height: 24,
    borderRadius: 24/2,
  },
  formText: {
    color: 'white',
    fontSize: 10,
    margin: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  wonFormElement: {
    backgroundColor: '#13cf00'
  },
  drawnFormElement: {
    backgroundColor: '#76766f'
  },
  lostFormElement: {
    backgroundColor: '#d81920'
  },
})
