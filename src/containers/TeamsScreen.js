import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import * as playersActions from '../store/players/actions';
import * as playersSelectors from '../store/players/reducer';

import TeamListItem from '../components/team/TeamListItem'

const Header = () => {
  return <View style={styles.header}>
    <View style={styles.horizontalFlex}>
      <Text style={[styles.text, styles.columnText]}>{'#'}</Text>
      <View style={{flex: 6.5}}/>
      <Text style={[styles.text, styles.columnText]}>{'G'}</Text>
      <Text style={[styles.text, styles.columnText]}>{'W'}</Text>
      <Text style={[styles.text, styles.columnText]}>{'D'}</Text>
      <Text style={[styles.text, styles.columnText]}>{'L'}</Text>
      <Text style={[styles.text, styles.columnText]}>{'P'}</Text>
    </View>
  </View>
}

class TeamsScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true,
    }
  }
  
  componentDidMount() {
    this.props.dispatch(playersActions.fetchFPLData());
    this.props.dispatch(playersActions.fetchPLTableData());
    this.setState({
      loading: false
    }
  )}

  renderSeparator = () => (
    <View
      style={{
        backgroundColor: '#ddd',
        height: 1
      }}
    />
  );

  render(){
    const { loading } = this.state

    return(
      loading
        ?
      <View style={styles.horizontalFlex}>
        <ActivityIndicator size="large" color="#37003c" />
      </View>
        :
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.container}>
          <FlatList
            data={this.props.getTable}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={this.renderSeparator}
            renderItem={({item, index}) => <TeamListItem team={item} index={index} {...this.props} />}
            initialNumToRender={20}
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
  horizontalFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    height: 24,
    backgroundColor: '#c8c8c8',
  },
  text: {
    fontSize: 12,
    textAlignVertical: 'center',
  },
  columnText: {
    flex: 1,
    textAlign: 'center',
  },
})

const mapStateToProps = (state) => {
  return {
    getTable: playersSelectors.getTable(state),
  };
}

export default connect(mapStateToProps)(TeamsScreen);
