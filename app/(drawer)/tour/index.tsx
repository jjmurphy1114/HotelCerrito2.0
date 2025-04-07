import { View, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function TourStops() {
  const router = useRouter();

  // This is the current menu for switching between stops
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text variant="headlineMedium">All Stops</Text>
      <Button onPress={() => router.push('../stop1')}>Stop 1: Lobby</Button>
    </ScrollView>
  );
}
