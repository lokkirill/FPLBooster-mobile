import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  View
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Header from './components/Header';
import Tabs from './components/Tabs';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '%username%'
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }
  
  render() {
    const { userName } = this.state
    
    return (
      <View style={styles.main}>
        <Header />

        <KeyboardAvoidingView style={styles.empty} behavior="padding" enabled>
          <View style={styles.logo}>
            <ScrollView style={styles.scroll}>
              <TextInput
                style={{height: 40}}
                placeholder="Fill your name!"
                onChangeText={(userName) => this.setState({userName})}
                value={userName}
              />
            </ScrollView>
          </View>
          <View style={styles.empty} />
        </KeyboardAvoidingView>
        <Tabs />
      </View>
    );
  }
}

<View style={{flex: 1, backgroundColor: 'powderblue'}} />
        
const styles = StyleSheet.create({

  main: {
    flex: 1,
  },
  logo: {
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  empty: {
    flex: 1,
    backgroundColor: '#00788a',
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    color: 'white'
  },
  scroll: {
    alignSelf: 'stretch',
    textAlign: 'center',
  }
});
