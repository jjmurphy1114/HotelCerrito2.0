import { Text, View, StyleSheet, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import { Image } from 'expo-image';
import { Dimensions } from 'react-native';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';

// Get screen width
const { width, height } = Dimensions.get('window');
const imageSizeWidth = width * 0.4;
const imageSizeHeight = width * 0.4;

type ImageButtonPairProps = {
  button: number;
};

function ImageButtonPair({ button } : ImageButtonPairProps) {
  const { colors } = useTheme();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      marginTop: 5,
      padding: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: imageSizeWidth,
      height: imageSizeHeight,
      backgroundColor: '#0553',
    },
    button: {
      color: colors.onSecondary, 
      backgroundColor: colors.secondary,
      fontSize: 20,
      fontFamily: Platform.select({
        android: 'Inter_900Black',
        ios: 'Inter-Black',
      }),
    }
  });

  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  var buttonTitle; 
  var imagePath;

  const images = [
    require("../../assets/images/emoji1.png"),
    require("../../assets/images/emoji2.png"),
    require("../../assets/images/emoji3.png"),
    require("../../assets/images/emoji4.png"),
    require("../../assets/images/emoji5.png"),
    require("../../assets/images/emoji6.png"),
  ];

  if (button == 1) {
    buttonTitle = "About Cerrito School and Hotel"
    imagePath = images[0]
  }
  else if (button == 2) {
    buttonTitle = "Take the Self-Guided Tour"
    imagePath = images[1]
  }
  else if (button == 3) {
    buttonTitle = "Explore Activities"
    imagePath = images[2]
  }
  else if (button == 4) {
    buttonTitle = "View Shop"
    imagePath = images[3]
  }
  else if (button == 5) {
    buttonTitle = "Other Services"
    imagePath = images[4]
  }
  else {
    buttonTitle = "Make a Reservation"
    imagePath = images[5]
  }


  return (
  <View style={styles.container}>
      <Image
        style={styles.image}
        source={imagePath}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      
      <Text style={styles.button}>{buttonTitle}</Text>
    </View>
  )
}

export default function Home() {
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      marginTop: 5,
      padding: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageButtonPair button={1}></ImageButtonPair>
      <ImageButtonPair button={2}></ImageButtonPair>
      <ImageButtonPair button={3}></ImageButtonPair>
      <ImageButtonPair button={4}></ImageButtonPair>
      <ImageButtonPair button={5}></ImageButtonPair>
      <ImageButtonPair button={6}></ImageButtonPair>
    </ScrollView>
  );
}


