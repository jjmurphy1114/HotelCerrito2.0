import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();

  const handleLanguageSelect = () => {
    // Navigate to the drawer group (starts with /home)
    router.replace('/(drawer)/Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome!</Text>
      <Button title="Choose English" onPress={handleLanguageSelect} />
    </View>
  );
}
