import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, TextStyle } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import * as React from 'react'
import { Button, Card } from 'react-native-paper';

const Activity_Cards = () => (
  <View>
    <Card>
      {/* <View style={styles.title}> */}
        <Card.Title title = "Relaxing Activities" />
      {/* </View> */}
      <Card.Content>
        <Button>L</Button>
        <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVklBFlfJOKO5inPoGF1TJ59PAdrVmWJ5Eg&s'}} />
        <Button>R</Button>
      </Card.Content>
    </Card>
    <Card>
      <Card.Title title = "Educational Activities" />
      <Card.Content>
        <Button>L</Button>
        <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVklBFlfJOKO5inPoGF1TJ59PAdrVmWJ5Eg&s'}} />
        <Button>R</Button>
      </Card.Content>
    </Card>
    <Card>
      <Card.Title title = "Adventure Activities" />
      <Card.Content>
        <Button>L</Button>
        <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVklBFlfJOKO5inPoGF1TJ59PAdrVmWJ5Eg&s'}} />
        <Button>R</Button>
      </Card.Content>
    </Card>
  </View>
)

//export default Activity_Cards;

export default function Activities() {
  return (
    <View style={styles.container}>
      <Activity_Cards></Activity_Cards>
      {/* {<Text style={styles.text}>Activities screen</Text>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
//    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
  title: {
    fontSize: 20,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    color: '#000'
  }
});
