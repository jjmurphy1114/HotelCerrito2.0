import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react'
import { useState } from 'react';
import { List, Card, IconButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { Icon } from 'react-native-paper/lib/typescript/components/List/List';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

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
          {/* <Text style={styles.accordionTitle}>
            {t("activities.details")}
          </Text> */}
          <List.Accordion
          onPress={handleDesc}
          style={styles.accordion}
          titleStyle={styles.accordionTitle}
          title={t("activities.details")}
          rippleColor={'transparent'}
          theme={{colors: {primary: 'transparent', background: 'transparent', placeholder: 'transparent'}}}
          right={() => (
            <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={1} >
                {isOpen ? <IconButton
                            icon = {'chevron-right'}
                            iconColor='gray'
                            size={20} /> :
                          <IconButton 
                            icon = {'chevron-down'}
                            iconColor='gray'
                            size={20} /> }
                                {/* {isOpen ? '▼' : '▶'} */}
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
        justifyContent: 'space-between', 
        paddingHorizontal: 10, 
        alignItems: 'center',
        flex: 1,
        marginTop: 20,
        borderWidth: 0,
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
        //fontSize: 16,
      },
      cardCover: {
        height: 200,
        borderRadius: 0,
        marginTop: -10
      },
      accordionContainer: {
        justifyContent: 'center',
        shadowColor: '#000',
        outlineColor: '#000',
        borderWidth: 2,
        borderColor: '#ddd',
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: '#eeebee'
      },
      accordionTitle: {
        fontSize: 18,
        color: '#000',
        paddingLeft: 0,
        paddingRight: 0,
      },
      accordion: {
        textDecorationColor: '#000',
        padding: 0,
        marginTop: -20,
        marginBottom: -20,
        width: 200,
        // rippleColor: 'transparent',
      },
      iconButton: {
        marginLeft: -100,
        fontSize: 1,
        color: '#555'
      },
      iconText: {
        fontSize: 18,
        color: '#000',
      },
      content: {
        marginRight: width/10,
        marginTop: 1,
        marginLeft: width/10,
        justifyContent: 'center',
        marginBottom: 20,
        fontSize: 16,
      }
    });