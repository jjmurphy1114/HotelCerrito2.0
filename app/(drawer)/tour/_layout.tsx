import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { Button, useTheme } from 'react-native-paper';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function TourLayout() {
  const router = useRouter();
  const { t } = useTranslation();
  const { colors } = useTheme();

  return (
    <>
      <Stack
        screenOptions={{
          headerRight: () => (
            <Button onPress={() => router.push('/tour')} compact>
              {t('tour.view_stops.title')}
            </Button>
          ),
          headerStyle: {
            backgroundColor: colors.secondary
          }
        }}
      />
    </>
  );
}
