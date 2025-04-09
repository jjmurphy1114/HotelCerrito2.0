import { NavigationContainer } from '@react-navigation/native';
import { FlatList, Text, View, StyleSheet, TextStyle, ScrollView, StatusBar, Dimensions, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Link } from 'expo-router';
import * as React from 'react'
import { useState } from 'react';
import { List, Button, Card, IconButton, MD3Colors, Icon } from 'react-native-paper';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import CardCover from 'react-native-paper/lib/typescript/components/Card/CardCover';

const { width, height } = Dimensions.get('window');

const RelaxCarousel = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  var isOpen = false;
  const length = 7;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const handleDesc = () => {
    isOpen = !isOpen;
  }

  return (
    <View>
      <View style={styles.carousel}>
        <View style={styles.arrowButton}>
          <IconButton
          icon = {'chevron-left'}
          iconColor={'orange'}
          size={80}
          onPress={handlePrevious}
          />
        </View>
        <View style={styles.cardContainer/*{ flex: 1}*/}>
          <Card style={styles.card}>
            <Card.Title 
            style = {styles.header}
            title = {relaxActivities[index].activityNum + "/" + relaxActivities[index].totActivities + ": " + t(relaxActivities[index].activityTitle)}/>
            <Card.Cover 
            style = {styles.cardCover} 
            source = {{ uri: relaxImages[index]}} />

          </Card>
        </View>
        <View style={styles.arrowButton}>
          <IconButton
          icon = {'chevron-right'}
          iconColor={'orange'}
          size={80}
          onPress={handleNext}
          />
        </View>
      </View>
      <View style={styles.accordionContainer}>
        <Text style={styles.accordionTitle}>
          {t("activities.details")}
        </Text>
        <List.Accordion
        onPress={handleDesc}
        style={styles.accordion}
        titleStyle={styles.accordionTitle}
        title=""
        theme={{colors: {primary: 'transparent', background: 'transparent', placeholder: 'transparent'}}}
        right={() => (
          <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={1} >
            <Text style={styles.iconText}>
              {isOpen ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>
        )} >
          <Text style={styles.content}> {t(relaxActivities[index].description)} </Text>
        </List.Accordion>
      </View>
    </View>
  );
};

const EducatCarousel = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  var isOpen = false;
  const length = 5;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const handleDesc = () => {
    isOpen = !isOpen;
  }

  return (
    <View>
      <View style={styles.carousel}>
        <View style={styles.arrowButton}>
          <IconButton
          icon = {'chevron-left'}
          iconColor={'orange'}
          size={80}
          onPress={handlePrevious}
          />
        </View>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Title 
            style = {styles.header}
            title = {educatActivities[index].activityNum + "/" + educatActivities[index].totActivities + ": " + t(educatActivities[index].activityTitle)}/>
            <Card.Cover 
            style = {styles.cardCover} 
            source = {{ uri: educatImages[index]}} />
          </Card>
        </View>
        <View style={styles.arrowButton}>
          <IconButton
          icon = {'chevron-right'}
          iconColor={'orange'}
          size={80}
          onPress={handleNext}
          />
        </View>
      </View>
      <View style={styles.accordionContainer}>
        <Text style={styles.accordionTitle}>
          {t("activities.details")}
        </Text>
        <List.Accordion
        onPress={handleDesc}
        style={styles.accordion}
        title=""
        titleStyle={styles.accordionTitle}
        theme={{colors: {primary: 'transparent', background: 'transparent', placeholder: 'transparent'}}}
        right={() => (
          <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={1} >
            <Text style={styles.iconText}>
              {isOpen ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>
        )} >
          <Text style={styles.content}> {t(educatActivities[index].description)} </Text>
        </List.Accordion>
      </View>      
    </View>
  );
};

const AdventCarousel = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  var isOpen = false;
  const length = 6;

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  const handleDesc = () => {
    isOpen = !isOpen;
  }

  return (
    <View>
      <View style={styles.carousel}>
        <View style={styles.arrowButton}>
          <IconButton
          icon = {'chevron-left'}
          iconColor={'orange'}
          size={80}
          onPress={handlePrevious}
          />
        </View>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Title 
            style = {styles.header}
            title = {adventActivities[index].activityNum + "/" + adventActivities[index].totActivities + ": " + t(adventActivities[index].activityTitle)}/>
            <Card.Cover 
            style = {styles.cardCover} 
            source = {{ uri: adventImages[index]}} />
          </Card>
        </View>
        <View style={styles.arrowButton}>
          <IconButton
          icon = {'chevron-right'}
          iconColor={'orange'}
          size={80}
          onPress={handleNext}
          />
        </View>
      </View>
      <View style={styles.accordionContainer}>
        <Text style={styles.accordionTitle}>
          {t("activities.details")}
        </Text>
        <List.Accordion
        onPress={handleDesc}
        style={styles.accordion}
        title=""
        titleStyle={styles.accordionTitle}
        theme={{colors: {primary: 'transparent', background: 'transparent', placeholder: 'transparent'}}}
        right={() => (
          <TouchableOpacity
          style={styles.iconButton}
          activeOpacity={1} >
            <Text style={styles.iconText}>
              {isOpen ? '▼' : '▶'}
            </Text>
          </TouchableOpacity>
        )} >
          <Text style={styles.content}> {t(adventActivities[index].description)} </Text>
        </List.Accordion>
      </View>
    </View>
  );
};

//This is a comment to test a lil thing

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
  <View style = {styles.topMargin}>
    <ScrollView /*contentContainerStyle={styles.scrollViewContent}*/>
    <Card style={styles.container}>
      <View>
        <Card.Title 
        title = "Relaxing Activities" 
        titleStyle={styles.cardTitle}
        />
      </View>
      <Card.Content>
        <RelaxCarousel/>
      </Card.Content>
    </Card>
    <Card style={styles.container}>
      <Card.Title 
      title = "Educational Activities" 
      titleStyle={styles.cardTitle}
      />
      <Card.Content>
        	<EducatCarousel/>
      </Card.Content>
    </Card>
    <Card style={styles.container}>
      <Card.Title 
      title = "Adventure Activities"
      titleStyle={styles.cardTitle}
      />
      <Card.Content>
        <AdventCarousel/>
      </Card.Content>
    </Card>
    </ScrollView>
  </View>
)

//export default Activity_Cards;

export default function Activities() {
  return (
    <View>      
      <Activity_Cards></Activity_Cards>
      {/* {<Text style={styles.text}>Activities screen</Text>} */}
    </View>
  );
}

const styles = StyleSheet.create({
  topMargin: {
    marginTop: 30,
  },
  container: {
    flex: 0,
    //backgroundColor: '#fff',
    justifyContent: 'flex-start',
    shadowColor: '#fff',
    borderRadius: 0
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
  card: {
    borderRadius: 0,
    shadowColor: '#fff',
  },
  carousel: {
    flexDirection: 'row', 
    justifyContent: 'space-between'/*'center'*/, 
    paddingHorizontal: 10, 
    alignItems: 'center'/*'stretch'*/,
    flex: 1,
  },
  cardTitle: {
    fontSize: 24,
    textDecorationLine: 'underline',
    textAlign: 'center',
    color: '#000',
    //fontWeight: 'bold',
    fontFamily: 'inter',
    marginTop: 0,
    marginBottom: -10
  },
  header: {
    //how to get this centered
  },
  arrowButton: {
    flex: 0,
    width: 0,  
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    marginHorizontal: 30,
    marginBottom: -10
  },
  cardCover: {
    height: 200,
    borderRadius: 0,
    marginTop: -10
  },
  cardDescription: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 0,
  },
  rightArrowContainer: {
    flex: 0,
    width: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  accordionContainer: {
    flexDirection: 'row',
    paddingTop: 5
    //justifyContent: 'center'
  },
  accordion: {
    //color: '#000',
    textDecorationColor: '#000',
    padding: 0,
    margin: 0,
    //justifyContent: 'flex-start',
    width: 50
  },
  accordionTitle: {
    fontSize: 18,
    color: '#000',
    paddingLeft: 10,
    paddingTop: 20,
    //paddingRight: -20,
    //width: 20
  },
  content: {
    paddingRight: 100,
    marginTop: -10,
    marginLeft: -30,
    justifyContent: 'space-evenly'
  },
  iconButton: {
    padding: 0,
    justifyContent: 'center',
    //alignItems: 'flex-start',
    alignItems: 'center'
  },
  iconText: {
    fontSize: 18,
    color: '#000',
  }
});