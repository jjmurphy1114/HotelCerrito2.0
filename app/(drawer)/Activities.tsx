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
import type { TFunction } from 'i18next';
import CardCover from 'react-native-paper/lib/typescript/components/Card/CardCover';
import { Image } from 'expo-image';
import ActivityCarousel from '../components/ActivityCarousel';
import Category from '../components/Category';


const relaxImages = [
require('../../assets/compressed/Piscina.webp'), //pool
require('../../assets/compressed/Comedor1.webp'), //restaurant
require('../../assets/compressed/Hammocks.webp'), //hammocks
require('../../assets/compressed/Quincho.webp'), //quinchos
require('../../assets/compressed/Shop.webp'), //gift shop
require('../../assets/compressed/Ejercicios1.webp'), //exercise
];
const educatImages = [
  require('../../assets/compressed/Production.webp'), //production
  require('../../assets/compressed/MapaCentral1.webp'), //tour
  require('../../assets/compressed/CheeseMaking.webp'), //cheese
  require('../../assets/compressed/TobaQom.webp'), //toba qom
  require('../../assets/compressed/Eucalipto3.webp'), //eucalyptus
];
const adventImages = [
  require('../../assets/compressed/HowlerMonkey.webp'), //monkeys
  require('../../assets/compressed/PatioWithStudents.webp'), //hiking
  require('../../assets/compressed/Bici.webp'), //biking
  require('../../assets/compressed/Horses1.webp'), //horses
  require('../../assets/compressed/Sports1.webp'), //sports
  require('../../assets/compressed/Parque.webp'), //playground
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
  totActivities: 6,
  description: "activities.relaxing.pool.description",
};

const Restaurant: ActivityCardProps = {
  imageUrl: relaxImages[1],
  activityTitle: "activities.relaxing.restaurant.title",
  activityNum: 2,
  totActivities: 6,
  description: "activities.relaxing.restaurant.description",
};

const Hammocks: ActivityCardProps = {
  imageUrl: relaxImages[2],
  activityTitle: "activities.relaxing.hammocks.title",
  activityNum: 3,
  totActivities: 6,
  description: "activities.relaxing.hammocks.description",
};

const Games: ActivityCardProps = { //removed-- not available to guests
  imageUrl: relaxImages[3],
  activityTitle: "activities.relaxing.games.title",
  activityNum: 4,
  totActivities: 7,
  description: "activities.relaxing.games.description",
};

const Quinchos: ActivityCardProps = {
  imageUrl: relaxImages[3],
  activityTitle: "activities.relaxing.quinchos.title",
  activityNum: 4,
  totActivities: 6,
  description: "activities.relaxing.quinchos.description",
};

const GiftShop: ActivityCardProps = {
  imageUrl: relaxImages[4],
  activityTitle: "activities.relaxing.gift_shop.title",
  activityNum: 5,
  totActivities: 6,
  description: "activities.relaxing.gift_shop.description",
};

const Exercise: ActivityCardProps = {
  imageUrl: relaxImages[5],
  activityTitle: "activities.relaxing.exercise.title",
  activityNum: 6,
  totActivities: 6,
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
  imageUrl: educatImages[2],
  activityTitle: "activities.educational.cheese.title",
  activityNum: 3,
  totActivities: 5,
  description: "activities.educational.cheese.description",
};

const TobaQom: ActivityCardProps = {
  imageUrl: educatImages[3],
  activityTitle: "activities.educational.toba_qom.title",
  activityNum: 4,
  totActivities: 5,
  description: "activities.educational.toba_qom.description",
};

const Eucalyptus: ActivityCardProps = {
  imageUrl: educatImages[4],
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
  imageUrl: adventImages[2],
  activityTitle: "activities.adventurous.biking.title",
  activityNum: 3,
  totActivities: 6,
  description: "activities.adventurous.biking.description",
};

const Horses: ActivityCardProps = {
  imageUrl: adventImages[3],
  activityTitle: "activities.adventurous.horses.title",
  activityNum: 4,
  totActivities: 6,
  description: "activities.adventurous.horses.description",
};

const Sports: ActivityCardProps = {
  imageUrl: adventImages[4],
  activityTitle: "activities.adventurous.sports.title",
  activityNum: 5,
  totActivities: 6,
  description: "activities.adventurous.sports.description",
};

const Playground: ActivityCardProps = {
  imageUrl: adventImages[5],
  activityTitle: "activities.adventurous.playground.title",
  activityNum: 6,
  totActivities: 6,
  description: "activities.adventurous.playground.description",
};

const relaxActivities: ActivityCardProps[] = [
  Pool,
  Restaurant,
  Hammocks,
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

type Props = {
  t: TFunction<"translation">
};

const Activity_Cards = ({t} : Props) => (
  
  <View style = {styles.topMargin}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Card style={styles.container}>
        <View>
          <Card.Title 
          title = {t("activities.relax")}
          titleStyle={styles.cardTitle}
          />
        </View>
        <Card.Content>
          <ActivityCarousel 
          length={6}
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
        title = {t("activities.educate")}
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
        title = {t("activities.adventure")}
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
  const { t } = useTranslation();

  return (
    <View>      
      <Activity_Cards t={t}/>
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