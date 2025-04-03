import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Activities from './Activities';
import Tour from './Tour';
import Home from './Home'


const Drawer = createDrawerNavigator(); 

export default function Index() {
  return (
    <View style={styles.container}>
              <Text style={styles.text}>Tour screen</Text>
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
