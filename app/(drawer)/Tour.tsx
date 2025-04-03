import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function TourStart() {
  const router = useRouter();

  return (
    <View style={styles.container}>
       <Text variant="headlineMedium">Welcome to the Tour</Text>
      <Button
        mode="contained"
        onPress={() => router.push('/tour/stop1')}
      >
        Begin Tour
      </Button>
      
      {/* <Button mode="contained" onPress={() => router.push('../tour')}>
        View Stops
      </Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});
