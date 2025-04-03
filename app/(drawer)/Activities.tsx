import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Link } from 'expo-router';

export default function Activities() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Activities screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
