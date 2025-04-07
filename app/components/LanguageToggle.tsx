import React, { useEffect, useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

const LANGUAGE_KEY = 'user-language';

export default function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const [isSpanish, setIsSpanish] = useState(false);
  const [loading, setLoading] = useState(true);

  // Load stored language on mount
  useEffect(() => {
    const loadLanguage = async () => {
      const storedLang = await AsyncStorage.getItem(LANGUAGE_KEY);
      const isES = storedLang === 'es';
      setIsSpanish(isES);
      if (storedLang) {
        i18n.changeLanguage(storedLang);
      }
      setLoading(false);
    };
    loadLanguage();
  }, []);

  const toggleLanguage = async () => {
    const newLang = isSpanish ? 'en' : 'es';
    setIsSpanish(!isSpanish);
    await AsyncStorage.setItem(LANGUAGE_KEY, newLang);
    i18n.changeLanguage(newLang);
  };

  if (loading) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{isSpanish ? 'Español' : 'English'}</Text>
      <Switch
        value={isSpanish}
        onValueChange={toggleLanguage}
        trackColor={{ false: '#ccc', true: '#ffae42' }}
        thumbColor={isSpanish ? '#f57c00' : '#00a86b'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', gap: 10, marginVertical: 10 },
  label: { fontSize: 16 },
});
