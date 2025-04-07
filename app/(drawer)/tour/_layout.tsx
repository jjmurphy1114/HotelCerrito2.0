import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { Button, useTheme } from 'react-native-paper';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'expo-router';

export default function TourLayout() {
  const router = useRouter();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const pathname = usePathname();

  const isOnViewStopsScreen = pathname === '/(drawer)/tour';

  const handleViewStops = () => {
    if (!isOnViewStopsScreen) {
      router.push('/(drawer)/tour');
    }
  };

  return (
    <Stack
      screenOptions={({ route }) => {
        const isIndexScreen = route.name === 'index';

        return {
          headerRight: !isIndexScreen
            ? () => (
                <Button compact onPress={handleViewStops}>
                  {t('tour.view_stops.title')}
                </Button>
              )
            : undefined,
          headerLeft: isIndexScreen ? undefined : () => null, // ❌ no back arrow on stop screens
          headerStyle: { backgroundColor: colors.secondary },
        };
      }}
    />
  );
}
