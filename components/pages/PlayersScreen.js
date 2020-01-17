import React from 'react';
// import { Text, View } from 'react-native';
import { FlatList, ActivityIndicator, SectionList, StyleSheet, Text, View  } from 'react-native';
 
export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    return fetch('https://fantasy.premierleague.com/api/bootstrap-static/',
    // return fetch('https://facebook.github.io/react-native/movies.json',
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => (
        console.log(response),
        response.json())
      )
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          isLoading: false,
          dataSource: responseJson.elements,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    const { isLoading } = this.state

    return(
      <View style={{flex: 1}}>
        {isLoading && <ActivityIndicator/>}
        {!isLoading &&
        <View style={styles.container}>
          {/* <SectionList
            sections={[
              {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
              {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          /> */}
          
          {/* <FlatList
            data={[
              {key: 'Devin'},
              {key: 'Dan'},
              {key: 'Dominic'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          /> */}

          <FlatList
            data={this.state.dataSource}
            renderItem={({item}) => <Text>{item.id}, {item.code}</Text>}
            keyExtractor={({id}, index) => id}
          />
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})



// import React from 'react';
// import { FlatList, ActivityIndicator, Text, View  } from 'react-native';

// export default class FetchExample extends React.Component {

//   constructor(props){
//     super(props);
//     this.state ={ isLoading: true}
//   }

//   componentDidMount(){
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.movies,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }



//   render(){

//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     return(
//       <View style={{flex: 1, paddingTop:20}}>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={({id}, index) => id}
//         />
//       </View>
//     );
//   }
// }
