import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet, TextStyle, ScrollView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import * as React from 'react'
import { useState } from 'react';
import { Button, Card, IconButton, MD3Colors } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';


const RelaxCarousel = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const length = 7;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <View style={{flexDirection: 'row', width: '100%'}}>
      <View style={{ flex: 0 }}>
        <IconButton
          icon = {'chevron-left'}
          iconColor={'orange'}
          size={80}
          onPress={handlePrevious}
        />
      </View>
      <View style={{ flex: 1}}>
        <Card>
          <Card.Title title = {relaxActivities[index].activityNum + "/" + relaxActivities[index].totActivities + ": " + t(relaxActivities[index].activityTitle)}/>
          <Card.Cover source = {{ uri: relaxImages[index]}} />
          <View style={{ flexDirection: 'row'}}>
            <View style={{ flex: 0}}>
              <Text>{t("activities.description")}</Text>
            </View>
            <View style={{ flex: 1}}>
              <IconButton
                icon = {'chevron-right'}
                iconColor={'black'}
                size={20}
                onPress={() => console.log('Pressed')}
              />
            </View>
          </View>
        </Card>
      </View>
      <View style={{ flex: 0 }}>
        <IconButton
          icon = {'chevron-right'}
          iconColor={'orange'}
          size={80}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

const EducatCarousel = () => {
  const { t } = useTranslation();
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
    <View style={{flexDirection: 'row', width: '100%'}}>
      <View style={{ flex: 0 }}>
        <IconButton
          icon = {'chevron-left'}
          iconColor={'orange'}
          size={80}
          onPress={handlePrevious}
        />
      </View>
      <View style={{ flex: 1}}>
        <Card>
          <Card.Title title = {educatActivities[index].activityNum + "/" + educatActivities[index].totActivities + ": " + t(educatActivities[index].activityTitle)}/>
          <Card.Cover source = {{ uri: educatImages[index]}} />
          <View style={{ flexDirection: 'row'}}>
            <View style={{ flex: 0}}>
              <Text>{t("activities.description")}</Text>
            </View>
            <View style={{ flex: 1}}>
              <IconButton
                icon = {'chevron-right'}
                iconColor={'black'}
                size={20}
                onPress={() => console.log('Pressed')}
              />
            </View>
          </View>
        </Card>
      </View>
      <View style={{ flex: 0 }}>
        <IconButton
          icon = {'chevron-right'}
          iconColor={'orange'}
          size={80}
          onPress={handleNext}
        />
      </View>
    </View>
  );
};

const AdventCarousel = () => {
  const { t } = useTranslation();
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
    <View style={{flexDirection: 'row', width: '100%'}}>
      <View style={{ flex: 0 }}>
        <IconButton
          icon = {'chevron-left'}
          iconColor={'orange'}
          size={80}
          onPress={handlePrevious}
        />
      </View>
      <View style={{ flex: 1}}>
        <Card>
          <Card.Title title = {adventActivities[index].activityNum + "/" + adventActivities[index].totActivities + ": " + t(adventActivities[index].activityTitle)}/>
          <Card.Cover source = {{ uri: adventImages[index]}} />
          <View style={{ flexDirection: 'row'}}>
            <View style={{ flex: 0}}>
              <Text>{t("activities.description")}</Text>
            </View>
            <View style={{ flex: 1}}>
              <IconButton
                icon = {'chevron-right'}
                iconColor={'black'}
                size={20}
                onPress={() => console.log('Pressed')}
              />
            </View>
          </View>
        </Card>
      </View>
      <View style={{ flex: 0 }}>
        <IconButton
          icon = {'chevron-right'}
          iconColor={'orange'}
          size={80}
          onPress={handleNext}
        />
      </View>
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
  totActivities: 7,
  description: "activities.educational.toba_qom.description",
};

const Eucalyptus: ActivityCardProps = {
  imageUrl: educatImages[0],
  activityTitle: "activities.educational.eucalyptus.title",
  activityNum: 5,
  totActivities: 7,
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

//export default Carousel;

const Activity_Cards = () => (
  <View>
    <ScrollView>
    <Card>
      <Card.Title title = "Relaxing Activities" />
      <Card.Content>
        <RelaxCarousel></RelaxCarousel>
      </Card.Content>
    </Card>
    <Card>
      <Card.Title title = "Educational Activities" />
      <Card.Content>
        	<EducatCarousel></EducatCarousel>
      </Card.Content>
    </Card>
    <Card>
      <Card.Title title = "Adventure Activities" />
      <Card.Content>
        <AdventCarousel></AdventCarousel>
      </Card.Content>
    </Card>
    </ScrollView>
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


