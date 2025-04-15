import { View, Text, ActivityIndicator, StyleSheet, Platform } from 'react-native';
import { useTheme, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

const LANGUAGE_KEY = 'user-language';

export default function Welcome() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(true);
  const { colors } = useTheme();

  const styles = StyleSheet.create({ 
    container: {
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
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
    directionsButton: {
      backgroundColor: colors.primary
    }
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
  AsyncStorage.removeItem('user-language');

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'space-evenly', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome!</Text>
      <Button onPress={() => handleLanguageSelect("en")}> Continue in English </Button>
      <Button
          style={styles.directionsButton}
          labelStyle={{
            fontFamily: Platform.select({
              android: 'Inter_500Medium',
              ios: 'Inter-Medium',
            }),
            fontSize: 16, // optional
          }}
          mode="contained"
        > button
        </Button>
      <Button onPress={() => handleLanguageSelect("es")}> Continuar en Español </Button>
    </View>
  );
}
