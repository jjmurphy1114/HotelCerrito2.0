import { Stack } from 'expo-router';
import { useRouter } from 'expo-router';
import { Button } from 'react-native-paper';
import { View } from 'react-native';

export default function TourLayout() {
  const router = useRouter();

  return (
    <>
      <Stack
        screenOptions={{
          headerRight: () => (
            <Button onPress={() => router.push('/tour')} compact>
              View Stops
            </Button>
          ),
        }}
      />
    </>
  );
}
