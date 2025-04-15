import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, TextStyle, ScrollView, StatusBar, Dimensions, TouchableOpacity, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import * as React from 'react'
import { useState } from 'react';
import { List, Button, Card, IconButton, MD3Colors, Icon } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import CardCover from 'react-native-paper/lib/typescript/components/Card/CardCover';
import { Image } from 'expo-image';
import ActivityCarousel from '../components/ActivityCarousel';
import Category from '../components/Category';


const relaxImages = [
require('../../assets/images/Piscina.jpg'), //pool
require('../../assets/images/Comedor.jpg'), //restaurant; replace with pic of inside
require('../../assets/images/emoji4.png'), //hammocks
require('../../assets/images/emoji4.png'), //games
require('../../assets/images/emoji4.png'), //quinchos
require('../../assets/images/emoji4.png'), //gift shop
require('../../assets/images/emoji4.png'), //exercise
];
const educatImages = [
  require('../../assets/images/emoji4.png'), //production; bakery?
  require('../../assets/images/MapaCentral.jpeg'), //tour
  require('../../assets/images/FabricaDeQueso.jpg'), //cheese; replace with a pic from inside or of cheese
  require('../../assets/images/emoji4.png'), //toba qom; placeholder
  require('../../assets/images/emoji4.png'), //eucalyptus
];
const adventImages = [
  require('../../assets/images/HowlerMonkey.jpeg'), //monkeys
  require('../../assets/images/emoji4.png'), //hiking
  require('../../assets/images/emoji4.png'), //biking
  require('../../assets/images/emoji4.png'), //horses
  require('../../assets/images/Cancha.jpg'), //sports
  require('../../assets/images/emoji4.png'), //playground
];

type ActivityCardProps = {
  imageUrl: any;
  activityTitle: string;
  activityNum: number;
  totActivities: number;
  description: string;
};

const Pool: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "activities.relaxing.pool.title",
  activityNum: 1,
  totActivities: 7,
  description: "activities.relaxing.pool.description",
};

const Restaurant: ActivityCardProps = {
  imageUrl: relaxImages[1],
  activityTitle: "activities.relaxing.restaurant.title",
  activityNum: 2,
  totActivities: 7,
  description: "activities.relaxing.restaurant.description",
};

const Hammocks: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "activities.relaxing.hammocks.title",
  activityNum: 3,
  totActivities: 7,
  description: "activities.relaxing.hammocks.description",
};

const Games: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "activities.relaxing.games.title",
  activityNum: 4,
  totActivities: 7,
  description: "activities.relaxing.games.description",
};

const Quinchos: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "activities.relaxing.quinchos.title",
  activityNum: 5,
  totActivities: 7,
  description: "activities.relaxing.quinchos.description",
};

const GiftShop: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "activities.relaxing.gift_shop.title",
  activityNum: 6,
  totActivities: 7,
  description: "activities.relaxing.gift_shop.description",
};

const Exercise: ActivityCardProps = {
  imageUrl: relaxImages[0],
  activityTitle: "activities.relaxing.exercise.title",
  activityNum: 7,
  totActivities: 7,
  description: "activities.relaxing.exercise.description",
};

const Production: ActivityCardProps = {
  imageUrl: educatImages[0],
  activityTitle: "activities.educational.production.title",
  activityNum: 1,
  totActivities: 5,
  description: "activities.educational.production.description",
};

const Tour: ActivityCardProps = {
  imageUrl: educatImages[1],
  activityTitle: "activities.educational.tour.title",
  activityNum: 2,
  totActivities: 5,
  description: "activities.educational.tour.description",
};

const Cheese: ActivityCardProps = {
  imageUrl: educatImages[0],
  activityTitle: "activities.educational.cheese.title",
  activityNum: 3,
  totActivities: 5,
  description: "activities.educational.cheese.description",
};

const TobaQom: ActivityCardProps = {
  imageUrl: educatImages[0],
  activityTitle: "activities.educational.toba_qom.title",
  activityNum: 4,
  totActivities: 5,
  description: "activities.educational.toba_qom.description",
};

const Eucalyptus: ActivityCardProps = {
  imageUrl: educatImages[0],
  activityTitle: "activities.educational.eucalyptus.title",
  activityNum: 5,
  totActivities: 5,
  description: "activities.educational.eucalyptus.description",
};

const Monkeys: ActivityCardProps = {
  imageUrl: adventImages[0],
  activityTitle: "activities.adventurous.monkeys.title",
  activityNum: 1,
  totActivities: 6,
  description: "activities.adventurous.monkeys.description",
};

const Hiking: ActivityCardProps = {
  imageUrl: adventImages[1],
  activityTitle: "activities.adventurous.hiking.title",
  activityNum: 2,
  totActivities: 6,
  description: "activities.adventurous.hiking.description",
};

const Biking: ActivityCardProps = {
  imageUrl: adventImages[0],
  activityTitle: "activities.adventurous.biking.title",
  activityNum: 3,
  totActivities: 6,
  description: "activities.adventurous.biking.description",
};

const Horses: ActivityCardProps = {
  imageUrl: adventImages[0],
  activityTitle: "activities.adventurous.horses.title",
  activityNum: 4,
  totActivities: 6,
  description: "activities.adventurous.horses.description",
};

const Sports: ActivityCardProps = {
  imageUrl: adventImages[0],
  activityTitle: "activities.adventurous.sports.title",
  activityNum: 5,
  totActivities: 6,
  description: "activities.adventurous.sports.description",
};

const Playground: ActivityCardProps = {
  imageUrl: adventImages[0],
  activityTitle: "activities.adventurous.playground.title",
  activityNum: 6,
  totActivities: 6,
  description: "activities.adventurous.playground.description",
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

const educatActivities: ActivityCardProps[] = [
  Production,
  Tour,
  Cheese,
  TobaQom,
  Eucalyptus,
];

const adventActivities: ActivityCardProps[] = [
  Monkeys,
  Hiking,
  Biking,
  Horses,
  Sports,
  Playground,
];


const Activity_Cards = () => (
  <View style = {styles.topMargin}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Card style={styles.container}>
        <View>
          <Card.Title 
          title = "Relaxing Activities" 
          titleStyle={styles.cardTitle}
          />
        </View>
        <Card.Content>
          <ActivityCarousel 
          length={7}
          activities={relaxActivities}
          images={relaxImages}/>
        </Card.Content>
      </Card>
      {/* <Category 
      activities={relaxActivities}
      images={relaxImages}
      title="relax"/> */}
      <Card style={styles.container}>
        <Card.Title 
        title = "Educational Activities" 
        titleStyle={styles.cardTitle}
        />
        <Card.Content>
          <ActivityCarousel 
          length={5}
          activities={educatActivities}
          images={educatImages}/>
        </Card.Content>
      </Card>
      {/* <Category 
      activities={educatActivities}
      images={educatImages}
      title="edicate"/> */}
      <Card style={styles.container}>
        <Card.Title 
        title = "Adventure Activities"
        titleStyle={styles.cardTitle}
        />
        <Card.Content>
          <ActivityCarousel 
          length={6}
          activities={adventActivities}
          images={adventImages}/>
        </Card.Content>
      </Card>
      {/* <Category 
      activities={adventActivities}
      images={adventImages}
      title="adventure"/> */}
    </ScrollView>
  </View>
)

export default function Activities() {
  return (
    <View>      
      <Activity_Cards/>
    </View>
  );
}

const styles = StyleSheet.create({
  topMargin: {
    marginTop: 10,
  },
  container: {
    flex: 0,
    justifyContent: 'flex-start',
    shadowColor: '#fff',
    borderRadius: 0
  },
  scrollViewContent: {
    marginTop: 1,
  },
  cardTitle: {
    fontSize: 25,
    //textDecorationLine: 'underline',
    textAlign: 'center',
    color: '#000',
    fontFamily: Platform.select({
            android: 'Inter_900Black',
            ios: 'Inter-Black',
          }),
    marginTop: 30,
    marginBottom: 0,
  },
});