import { Slot } from 'expo-router';
import { useRouter, usePathname } from 'expo-router';
import { Button, useTheme, Text } from 'react-native-paper';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import tourStops from '../tour/stops';

export default function TourLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation();
  const { colors } = useTheme();

  // Grab the last part of the route (e.g., 'MapaCentral')
  const stopName = pathname.split('/').pop();
  const currentStop = tourStops.find((stop) =>
    stop.route.endsWith(`/${stopName}`)
  );

  const translatedTitle = currentStop ? t(currentStop.titleKey) : 'Tour Stop';

  return (
    <View style={{ flex: 1 }}>
    <View
      style={{
        height: 60,
        backgroundColor: colors.secondary,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Text style={{ fontSize: 18 }}>{translatedTitle}</Text>
      <Button onPress={() => router.push('/(drawer)/tour')} compact>
        View Stops
      </Button>
    </View>

    <Slot />
  </View>
  );
}
