import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as playersSelectors from '../store/players/reducer';

import ProfileBackground from  '../components/icons/profileBackground';

const FormItem = ({header, value}) => {
  return <View style={[styles.formItem]}>
    <Text style={[styles.formItemHeadText]}>
      {header}
    </Text>
    <Text style={[styles.formItemDataText]}>
      {value}
    </Text>
  </View>
}

const ICTItem = ({header, value}) => {
  return <View style={[styles.formItem]}>
    <Text style={[styles.formItemHeadText]}>
      {header}
    </Text>
    <Text style={[styles.formItemDataText]}>
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
      <ScrollView>
        <View style={styles.container}>
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
            <FormItem header={'Form'} value={player.form}/>
            <FormItem header={`GW ${id}`} value={`${player.event_points}pts`}/>
            <FormItem header={'Total'} value={`${player.total_points}pts`}/>
            <FormItem header={'Price'} value={`£${player.now_cost/10}`}/>
            <FormItem header={'TSB'} value={`${player.selected_by_percent}%`}/>
          </View>

          {/* ICT Indexes */}
          <View style={[styles.horizontalFlex, styles.ICTContainer]}>
            <ICTItem header={'Influence'} value={player.influence}/>
            <ICTItem header={`Creativity`} value={player.creativity}/>
            <ICTItem header={'Threat'} value={player.threat}/>
            <ICTItem header={'ICT Index'} value={player.ict_index}/>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 5,
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
    // backgroundColor: '#ddd',
    flex: 1,
    height: 48,
    marginTop: 10
  },
  
  // ICT Form
  ICTContainer: {
    flex: 4,
    backgroundColor: '#00ff87',
    borderRadius: 10,
    color: 'white',
    marginTop: 5,
  },
   
  // Image
  imageContainer: {
    alignItems: 'center',
    flex: 0.8,
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
    marginTop: 5,
    textAlign: 'center'
  },
  formItemHeadText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  formItemDataText: {
    textAlign: 'center',
    fontSize: 14,
  },
})

const mapStateToProps = (state) => {
  return {
    getCurrentGameWeek:  playersSelectors.getCurrentGameWeek(state),
  };
}

export default connect(mapStateToProps)(PlayerScreen);
