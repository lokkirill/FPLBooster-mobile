import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as playersActions from '../store/players/actions';
import * as playersSelectors from '../store/players/reducer';

import TeamListItem from '../components/team/TeamListItem'

const Header = () => {
  return <View style={styles.header}>
    <View style={styles.horizontalFlex}>
      <View style={{flex: 7}}/>
      <Text style={[styles.text, styles.columnText]}>{'G'}</Text>
      <Text style={[styles.text, styles.columnText]}>{'W'}</Text>
      <Text style={[styles.text, styles.columnText]}>{'D'}</Text>
      <Text style={[styles.text, styles.columnText]}>{'L'}</Text>
      <Text style={[styles.text, styles.columnText]}>{'P'}</Text>
    </View>
  </View>
}

class TeamsScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(playersActions.fetchPLTableData());
  }

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#ddd',
        height: 1
      }}
    />
  );

  render(){
    return(
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.container}>
          <FlatList
            data={this.props.getTable}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({item, index}) => <TeamListItem team={item} index={index} {...this.props} />}
          />  
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  // container :{
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   flex:1
  // },
  // verticalFlex: {
  //   flex: 1,
  // },
  horizontalFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 24,
    backgroundColor: '#eee',
  },
  text: {
    fontSize: 12,
    textAlignVertical: 'center',
  },
  columnText: {
    flex: 1,
    textAlign: 'center',
  },

  // name: {
  //   flex: 5,
  //   justifyContent: 'center',
  // },
  // nameText: {
  //   fontSize: 18,
  // },

  // points: {
  //   flex: 5,
  // },
})

const mapStateToProps = (state) => {
  return {
    getTable: playersSelectors.getTable(state),
  };
}

export default connect(mapStateToProps)(TeamsScreen);
