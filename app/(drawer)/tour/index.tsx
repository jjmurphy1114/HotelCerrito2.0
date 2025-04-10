import { View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter, useNavigation } from 'expo-router';
import { useTranslation } from 'react-i18next';
import tourStops from './stops';
import { useLayoutEffect } from 'react';

export default function TourStops() {
  const router = useRouter();
  const { t } = useTranslation();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: '' });
  }, [navigation, t]);
  

  // This is the current menu for switching between stops. To change the order of the stops, go to stops.ts
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text variant="headlineMedium">{t("tour.view_stops.title")}</Text>
      {tourStops.map((stop) => (
        <Button
          key={stop.route}
          onPress={() => router.replace(stop.route)}
          style={{ marginTop: 10 }}
        >
          {t('tour.view_stops.stop')} {stop.number}: {t(stop.titleKey)}
        </Button>
      ))}
    </ScrollView>
  );
}
