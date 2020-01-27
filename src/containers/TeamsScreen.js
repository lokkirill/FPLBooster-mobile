import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as playersActions from '../store/players/actions';
import * as playersSelectors from '../store/players/reducer';

import TeamListItem from '../components/team/TeamListItem'

const Header = ({header, value}) => {
  return <View style={[styles.formItem]}>
    <Text style={[styles.formItemHeadText]}>
      {header}
    </Text>
    <Text style={[styles.formItemDataText]}>
      {value}
    </Text>
  </View>
}

class TeamsScreen extends React.Component {
  componentDidMount() {
    this.props.dispatch(playersActions.fetchPLTableData());
  }

  render(){
    return(
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.container}>
          <FlatList
            data={this.props.getTable}
            keyExtractor={item => item.team.id.toString()}
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
})

const mapStateToProps = (state) => {
  return {
    getTable: playersSelectors.getTable(state),
  };
}

export default connect(mapStateToProps)(TeamsScreen);
