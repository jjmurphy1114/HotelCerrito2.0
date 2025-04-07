import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, TextStyle, ScrollView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import * as React from 'react'
import { useState } from 'react';
import { Button, Card, IconButton, MD3Colors } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const RelaxCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = 7;

  const HandlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const HandleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <View className='carousel'>
      <Button onPress={HandlePrevious}>Previous</Button>
      <Button onPress={HandleNext}>Next</Button>
      <Text>{index}</Text>
    </View>
  );
};

const EducatCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = 5;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <View className='carousel'>
      <Button onPress={handlePrevious}>Previous</Button>
      <Button onPress={handleNext}>Next</Button>
      <Text>{index}</Text>
    </View>
  );
};

const AdventCarousel = () => {
  const [index, setIndex] = useState(0);
  const length = 6;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <View className='carousel'>
      <Button onPress={handlePrevious}>Previous</Button>
      <Button onPress={handleNext}>Next</Button>
      <Text>{index}</Text>
    </View>
  );
};

const relaxImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVklBFlfJOKO5inPoGF1TJ59PAdrVmWJ5Eg&s',
  'https://www.google.com/imgres?q=food&imgurl=https%3A%2F%2Fimages.immediate.co.uk%2Fproduction%2Fvolatile%2Fsites%2F30%2F2020%2F08%2Fchorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg&imgrefurl=https%3A%2F%2Fwww.bbcgoodfood.com%2Frecipes%2Fcollection%2Feasy-recipes%2F&docid=960EF8uS8dLI-M&tbnid=AFLc3R-ODnfMdM&vet=12ahUKEwjs1P3wk8aMAxWelZUCHduyDLYQM3oECBoQAA..i&w=700&h=636&hcb=2&ved=2ahUKEwjs1P3wk8aMAxWelZUCHduyDLYQM3oECBoQAA'
];
const educatImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVklBFlfJOKO5inPoGF1TJ59PAdrVmWJ5Eg&s',
];
const adventImages = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVklBFlfJOKO5inPoGF1TJ59PAdrVmWJ5Eg&s',
];

type ActivityCardProps = {
  imageUrl: string;
  activityTitle: string;
  activityNum: number;
  totActivities: number;
  description: string;
};

const Pool: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "Swim at the Pool",
  activityNum: 1,
  totActivities: 7,
  description: "Take a refreshing dip in the pool and relax on the recliners or stay in the shade under the pavilion. The pool is open from 9:00 AM to 7:00 PM, M-F.",
};

const Restaurant: ActivityCardProps = {
  imageUrl: relaxImages[1],
  activityTitle: "Eat at the Restaurant",
  activityNum: 2,
  totActivities: 7,
  description: "Taste the flavors of Paraguay, with vegetables straight from the school garden and cheese made from the milk of campus cows. See how to make a lunch or dinner reservation here.",
};

const Hammocks: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "Lie in the Hammocks",
  activityNum: 3,
  totActivities: 7,
  description: "Take a book or a nap under the trees in traditional Paraguayan hammocks for some peaceful leisure time. Weather dependent.",
};

const Games: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "Play Tabletop Games",
  activityNum: 4,
  totActivities: 7,
  description: "Visit the game room by the pavilion for a rousing session of foosball, cards, or board games.",
};

const Quinchos: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "Sit at the Quinchos",
  activityNum: 5,
  totActivities: 7,
  description: "Cook and gather with friends/family. ingesta de asados y destinado a reuniones y actividades sociales.",
};

const GiftShop: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "Purchase Souvenirs",
  activityNum: 6,
  totActivities: 7,
  description: "Support the Cerrito School by purchasing products in the hotel lobby. You can find yogurt, dulce de leche, and cheese, all made by students on campus. We also have snacks, drinks, and souvenirs.",
};

const Exercise: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "Work Out",
  activityNum: 7,
  totActivities: 7,
  description: "Exercise. Just do it.",
};

const relaxActivities: ActivityCardProps[] = [
  Pool,
  Restaurant,
  Hammocks,
  Games,
  Quinchos,
  GiftShop,
  Exercise,
];

// const educatActivities: ActivityCardProps = [
//   Production,
//   Tour,
//   Cheese,
//   TobaQom,
//   Eucalyptus,
// ];

// const adventActivities: ActivityCardProps = [
//   Monkeys,
//   Hiking,
//   Biking,
//   Horses,
//   Sports,
//   Playground,
// ];

//export default Carousel;

const Activity_Cards = () => (
  <View>
    <Card>
      {/* <View style={styles.title}> */}
        <Card.Title title = "Relaxing Activities" />
      {/* </View> */}
      <Card.Content>
        {/* <Button>L</Button>
        <Card.Cover source={{ uri: relaxImages[0]}} />
        <Button>R</Button> */}
        <RelaxCarousel></RelaxCarousel>
      </Card.Content>
    </Card>
    <Card>
      <Card.Title title = "Educational Activities" />
      <Card.Content>
        <Button>L</Button>
        <Card.Cover source={{ uri: educatImages[0]}} />
        <Button>R</Button>
      </Card.Content>
    </Card>
    <Card>
      <Card.Title title = "Adventure Activities" />
      <Card.Content>
        <Button>L</Button>
        <Card.Cover source={{ uri: adventImages[0]}} />
        <Button>R</Button>
      </Card.Content>
    </Card>
  </View>
)

//export default Activity_Cards;

export default function Activities() {
  return (
    <View style={styles.container}>
      {/* <Activity_Cards></Activity_Cards> */}
      <RelaxCarousel></RelaxCarousel>
      <EducatCarousel></EducatCarousel>
      <AdventCarousel></AdventCarousel>
      {/* {<Text style={styles.text}>Activities screen</Text>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    alignSelf: 'flex-start'
  },
  title: {
    fontSize: 20,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    color: '#000'
  }
});


