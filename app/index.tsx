import { View, Text, ActivityIndicator, StyleSheet, Platform, Dimensions } from 'react-native';
import { useTheme, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'expo-image';
import React from 'react';

const LANGUAGE_KEY = 'user-language';

export default function Welcome() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const { colors } = useTheme();

   // Expo Image setup
  const { width, height } = Dimensions.get('window');
  const imageSizeWidth = width * 0.9;
  const imageSizeHeight = height * 0.4;

  const styles = StyleSheet.create({ 
    container: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background
    },
    text: {
      fontSize: 24
    },
    navigation: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      marginTop: 10,
    },
    spanishButton: {
      backgroundColor: colors.primary,
      margin: 10,
      width: '70%', // Ensures both buttons have the same width
      height: '6%',
      alignSelf: 'center',
      justifyContent: 'center', // Centers text vertically
      alignItems: 'center', // Centers text horizontally
    },
    englishButton: {
      backgroundColor: colors.secondary,
      margin: 10,
      width: '70%', // Ensures both buttons have the same width
      height: '6%',
      alignSelf: 'center',
      justifyContent: 'center', // Centers text vertically
      alignItems: 'center', // Centers text horizontally
    },
    image: {
      width: imageSizeWidth,
      height: imageSizeHeight,
      backgroundColor: colors.background,
      margin: 10
    },
  })

  useEffect(() => {
    const checkLanguage = async () => {
      try {
        const storedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
        if (storedLang) {
          await i18n.changeLanguage(storedLang);
          router.replace('/(drawer)/Home'); // Skips welcome page if language is set
        } else {
          setLoading(false); // Shows buttons
        }
      } catch (error) {
          console.error('Error checking language', error);
          setLoading(false);
      }
    }

    checkLanguage();
  }, []);

  const handleLanguageSelect = async (lang: string) => {
    await AsyncStorage.setItem(LANGUAGE_KEY, lang) //Makes langauge choice persistent
    i18n.changeLanguage(lang);
    router.replace('/(drawer)/Home');
  };

  // Uncomment to clear language
  // AsyncStorage.removeItem('user-language');

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }  

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: colors.background, }}>
      <View style={{width: '100%', height: '100%', marginTop: '26%'}}>
      <Image source={require('../assets/images/cerrito-logo.png')} 
            style={styles.image}
            contentFit="cover"
            transition={1000}
      />
      <Button onPress={() => handleLanguageSelect("es")}
        style={styles.spanishButton}
        labelStyle={{
          fontFamily: Platform.select({
            android: 'Inter_500Medium',
            ios: 'Inter-Medium',
          }),
          fontSize: 18, // optional
        }}
        mode="contained"> Continuar en Español </Button>
      <Button onPress={() => handleLanguageSelect("en")}
        style={styles.englishButton}
        labelStyle={{
          fontFamily: Platform.select({
            android: 'Inter_500Medium',
            ios: 'Inter-Medium',
          }),
          fontSize: 18, // optional
        }}
        mode="contained"> Continue in English </Button>   
      </View>
    </View>
  );
}
