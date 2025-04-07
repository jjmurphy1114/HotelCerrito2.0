import { View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function TourStops() {
  const router = useRouter();
  const { t } = useTranslation();

  // This is the current menu for switching between stops
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text variant="headlineMedium">All Stops</Text>
      <Button onPress={() => router.replace('/(drawer)/tour/MapaCentral')}>{t("tour.view_stops.stop")} 1: {t('tour.mapa_central.title')}</Button>
      <Button onPress={() => router.replace('/(drawer)/tour/MapaCentral')}>{t("tour.view_stops.stop")} 2: {t('tour.capilla.title')}</Button>
    </ScrollView>
  );
}
