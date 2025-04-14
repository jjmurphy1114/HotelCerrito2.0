import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react'
import { useState } from 'react';
import { List, Card, IconButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

type ActivityCardProps = {
    imageUrl: any;
    activityTitle: string;
    activityNum: number;
    totActivities: number;
    description: string;
  };

type ActivityCarouselProps = {
    length: number;
    activities: ActivityCardProps[];
    images: any[];
};

export default function ActivityCarousel({length, activities, images}: ActivityCarouselProps) {
    const { t } = useTranslation();
    const [index, setIndex] = useState(0);
    var isOpen = false;
  
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
              title = {activities[index].activityNum + "/" + activities[index].totActivities + ": " + t(activities[index].activityTitle)}/>
              <Card.Cover 
              style = {styles.cardCover}
              source = {images[index]}
              />
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
            <Text style={styles.content}> {t(activities[index].description)} </Text>
          </List.Accordion>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    carousel: {
        flexDirection: 'row', 
        justifyContent: 'space-between'/*'center'*/, 
        paddingHorizontal: 10, 
        alignItems: 'center'/*'stretch'*/,
        flex: 1,
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
      card: {
        borderRadius: 0,
        shadowColor: '#fff',
      },
      header: {
        //how to get this centered
      },
      cardCover: {
        height: 200,
        borderRadius: 0,
        marginTop: -10
      },
      accordionContainer: {
        flexDirection: 'row',
        paddingTop: 5
        //justifyContent: 'center'
      },
      accordionTitle: {
        fontSize: 18,
        color: '#000',
        paddingLeft: 10,
        paddingTop: 20,
        //paddingRight: -20,
        //width: 20
      },
      accordion: {
        //color: '#000',
        textDecorationColor: '#000',
        padding: 0,
        margin: 0,
        //justifyContent: 'flex-start',
        width: 50
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
      },
      content: {
        paddingRight: 100,
        marginTop: -10,
        marginLeft: -30,
        justifyContent: 'space-evenly'
      }
    });