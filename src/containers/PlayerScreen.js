import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
// import * as playersActions from '../store/players/actions';
import * as playersSelectors from '../store/players/reducer';

import ProfileBackground from  '../components/icons/profileBackground';

const FormItem = ({header, value}) => {
  return <View style={[styles.formItem]}>
    <Text style={[styles.formItem]}>
      {header}
    </Text>
    <Text style={[styles.formItem]}>
      {value}
    </Text>
  </View>
}

class PlayerScreen extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { player } = this.props.navigation.state.params
    const { id } = this.props.getCurrentGameWeek

    return(
      <View style={styles.container}>
        <ScrollView>
            {/* NEWS */}
            {!!player.news &&
            <Text style={styles.news}>
              {player.news}
            </Text>}

            {/* HEADER */}
            <View style={styles.header}>
              <ProfileBackground />
              <View style={[styles.horizontalFlex, styles.headerWrapper]}>
                <View style={styles.verticalFlex}>
                  <Text style={[styles.text, styles.name]}>
                    {`${player.first_name} ${player.web_name}`}
                  </Text>
                  <Text style={[styles.text, styles.playerPosition, styles[`pos${player.element_type.singular_name_short}`]]}>
                    {` ${player.element_type.singular_name} ` }
                  </Text>
                  <Text style={[styles.text, styles.club]}>
                    {player.team.name}
                  </Text>
                </View>
                <View style={[styles.verticalFlex, styles.imageContainer]}>
                  <Image
                    style={styles.imageBackground}
                    source={{ uri: player.photo }}
                  />
                </View>
              </View>
            </View>

            {/* FORM */}
            <View style={[styles.horizontalFlex, styles.formContainer]}>
              <FormItem header={'Form'} value={'loopa'}/>
              <FormItem header={`GW ${id}`} value={'loopa'}/>
              <FormItem header={'Total'} value={'loopa'}/>
              <FormItem header={'Price'} value={'loopa'}/>
              <FormItem header={'TSB'} value={'loopa'}/>
            </View>

            {/* ICT Indexes */}
            <View>
              <Text style={[styles.text, styles.name]}>
                {`${player.first_name} ${player.web_name}`}
              </Text>
              <Text style={[styles.text, styles.playerPosition, styles[`pos${player.element_type.singular_name_short}`]]}>
                {` ${player.element_type.singular_name} ` }
              </Text>
              <Text style={[styles.text, styles.club]}>
                {player.team.name}
              </Text>
            </View>

            {/* <View style={[styles.playerContainer]}> */}
              <Text>
                {JSON.stringify(player, null, 4)}
              </Text>
            {/* </View> */}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  verticalFlex: {
    flex: 1,
  },
  horizontalFlex: {
    flex: 1,
    flexDirection: 'row',
  },

  // Header
  header: {
    backgroundColor: '#37003C',
    borderRadius: 10,
    color: 'white',
    height: 160,
    marginTop: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.33,
    shadowRadius: 3.27,
    elevation: 5,
  },
  headerWrapper: {
    position: 'absolute'
  },

  // Form
  formContainer: {
    flex: 5
  },
  formItem: {
    backgroundColor: '#ddd',
    flex: 1,
  },

  // Image
  imageContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imageBackground: {
    width: 110,
    height: 140,
    marginTop: 20,
  },
  
  // Text
  text: {
    marginLeft: 10,
    marginTop: 3,
  },
  name: {
    color: 'white',
    fontSize: 20,
    marginTop: 6,
  },
  club: {
    color: 'white',
    fontSize: 14,
  },
  playerPosition: {
    alignSelf: 'flex-start',
    fontSize: 15,
    fontStyle: 'italic',
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
  news: {
    backgroundColor: '#d81921',
    color: 'white',
    textAlign: 'center'
  },
})

const mapStateToProps = (state) => {
  return {
    getGameWeeks:        playersSelectors.getGameWeeks(state),
    getPreviousGameWeek: playersSelectors.getPreviousGameWeek(state),
    getCurrentGameWeek:  playersSelectors.getCurrentGameWeek(state),
    getNextGameWeek:     playersSelectors.getNextGameWeek(state),
  };
}

export default connect(mapStateToProps)(PlayerScreen);
