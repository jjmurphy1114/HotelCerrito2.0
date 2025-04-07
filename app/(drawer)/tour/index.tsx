import { View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import tourStops from './stops';

export default function TourStops() {
  const router = useRouter();
  const { t } = useTranslation();

  // This is the current menu for switching between stops. To change the order of the stops, go to stops.ts
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text variant="headlineMedium">All Stops</Text>
      {tourStops.map((stop) => (
        <Button
          key={stop.route}
          onPress={() => router.push(stop.route)}
          style={{ marginTop: 10 }}
        >
          {t('tour.view_stops.stop')} {stop.number}: {t(stop.titleKey)}
        </Button>
      ))}
    </ScrollView>
  );
}
