import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, TextStyle, ScrollView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import * as React from 'react'
import { Button, Card } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

type ActivityCard = {
  imageUrl: string;
  activityTitle: string;
  activityNum: number;
  totActivities: number;
  description: string;
  nextCard: ActivityCard;
  prevCard: ActivityCard;
  onNext: () => void; //TODO
  onPrevious: () => void; //TODO
  onDetails: () => void; //TODO
};

type Carousel = {
  typeTitle: string;
  firstCard: ActivityCard;
};

function Pool({
  imageUrl = "https://storage.googleapis.com/tempo-public-images/figma-exports%2Fgithub%7C146297896-1744029297721-node-218%3A146-1744029296830.png",
  activityTitle = "Swim at the Pool",
  activityNum = 1,
  totActivities = 7,
  description = "Take a refreshing dip in the pool and relax on the recliners or stay in the shade under the pavilion. The pool is open from 9:00 AM to 7:00 PM, M-F.",
  nextCard = Restaurant,
  prevCard = Exercise,
}: ActivityCard) {
  return (
    //TODO
  );
}

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


