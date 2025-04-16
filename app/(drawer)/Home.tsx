import { Text, View, StyleSheet, ScrollView, TouchableHighlight, Linking, Button } from 'react-native';
import 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import { Image } from 'expo-image';
import { Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as Font from 'expo-font';
import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { RelativePathString, useRouter } from 'expo-router';

// Get screen width
const { width, height } = Dimensions.get('window');
const imageSizeWidth = width * 0.6;
const imageSizeHeight = height * 0.3;

type ImageButtonPairProps = {
  button: number;
};

type ButtonSelectProps = {
  path: RelativePathString;
};

function ImageButtonPair({ button } : ImageButtonPairProps) {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const router = useRouter();

  const handleButtonSelect = ({ path } : ButtonSelectProps) => {
    if(button == 6) {
      Linking.openURL('mailto:info@hotelcerrito.com.py')
    }
    else if (button == 4) {
      Linking.openURL('https://cerritopy.com.py/cerrito-gourmet/#/home');
    }
    else {
      router.replace(path)
    }
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      marginTop: width * 0.008,
      padding: width * 0.085,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: imageSizeWidth,
      height: imageSizeHeight,
      backgroundColor: '#0553',
    },
    buttonContainer: {
      width: imageSizeWidth,
    },
    button: {
      color: colors.onSecondary, 
      backgroundColor: colors.secondary,
      textAlign: 'center',
      fontSize: 15,
      padding: width * 0.05,
      fontFamily: Platform.select({
        android: 'Inter_900Black',
        ios: 'Inter-Black',
      }),
    },
  });

  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  var buttonTitle; 
  var imagePath;
  var routerPath: ButtonSelectProps;

  const images = [
    require("../../assets/images/CerritoSign.jpeg"),
    require("../../assets/images/MapaCentral.jpeg"),
    require("../../assets/images/HorseRiding.jpeg"),
    require("../../assets/images/Store.jpeg"),
    require("../../assets/images/HotelSide.jpeg"),
    require("../../assets/images/HotelFrontDesk.jpeg"),
    require("../../assets/images/HowlerMonkey.jpeg"),
  ];

  const routerPaths: RelativePathString[] = [
    '/(drawer)/About' as RelativePathString,
    '/(drawer)/Tour' as RelativePathString,
    '/(drawer)/Activities' as RelativePathString,
    '/(drawer)/Home' as RelativePathString,
    '/(drawer)/OtherServices' as RelativePathString,
    '/(drawer)/Home' as RelativePathString,
    '/(drawer)/HowlerMonkeys' as RelativePathString,
  ]

  if (button == 1) {
    buttonTitle = t('home.button1')
    imagePath = images[0]
    routerPath = { path: routerPaths[0] };
  }
  else if (button == 2) {
    buttonTitle = t('home.button2')
    imagePath = images[1]
    routerPath = { path: routerPaths[1] };
  }
  else if (button == 3) {
    buttonTitle = t('home.button3')
    imagePath = images[2]
    routerPath = { path: routerPaths[2] };
  }
  else if (button == 4) {
    buttonTitle = t('home.button4')
    imagePath = images[3]
    routerPath = { path: routerPaths[0] };
  }
  else if (button == 5) {
    buttonTitle = t('home.button5')
    imagePath = images[4]
    routerPath = { path: routerPaths[4] };
  }
  else if (button == 6) {
    buttonTitle = t('home.button6')
    imagePath = images[5]
    routerPath = { path: routerPaths[0] };
  }
  else {
    buttonTitle = t('home.button7')
    imagePath = images[6]
    routerPath = { path: routerPaths[6] };
  }


  return (
    <View style={styles.container}>
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={(e) => handleButtonSelect(routerPath)}>
        
        <View style={styles.buttonContainer}>
        <Image
          style={styles.image}
          source={imagePath}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
          <Text style={styles.button}>{buttonTitle}</Text>
        </View>
      </TouchableHighlight>
    </View>

  )
}

export default function Home() {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scrollView: {
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      padding: width * 0.04,
      paddingBottom: width * 0.2
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.primary,
      padding: width * 0.04,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerText: {
      fontSize: 11,
      fontFamily: Platform.select({
        android: 'Inter_900Black',
        ios: 'Inter-Black',
      })
    }
  });

  return (
    <View>
    <ScrollView contentContainerStyle={styles.scrollView}>
      <ImageButtonPair button={1}></ImageButtonPair>
      <ImageButtonPair button={2}></ImageButtonPair>
      <ImageButtonPair button={7}></ImageButtonPair>
      <ImageButtonPair button={3}></ImageButtonPair>
      <ImageButtonPair button={4}></ImageButtonPair>
      <ImageButtonPair button={5}></ImageButtonPair>
      <ImageButtonPair button={6}></ImageButtonPair>

      <View style={styles.footer}>
          <Text style={styles.footerText}>{t('home.Footer1')}</Text>
          <Text style={styles.footerText}>{t('home.Footer2')}</Text>
          <Text style={styles.footerText}>{t('home.Footer3')}</Text>
      </View>
    </ScrollView>
    </View>
  );
}


