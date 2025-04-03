import { Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Activities from './Activities';
import Tour from './Tour';
import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator(); 
const Stack = createNativeStackNavigator(); 

function MainDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Tour" component = {Tour} />
      <Drawer.Screen name="Activities" component = {Activities} />
    </Drawer.Navigator>
  )
}

function MainStack() {
  return (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainDrawer" component={MainDrawer} />
    </Stack.Navigator>
  )
}

export default function RootLayout() {
  return (
    <NavigationContainer>
      
    </NavigationContainer>

  );
}

{/* <Stack.Screen name="Tour Info" options={{ title: 'Tour Info' }} />
<Stack.Screen name="Mapa Central" options={{ title: 'Mapa Central' }} />
<Stack.Screen name="Comedor" options={{ title: 'Comedor' }} />
<Stack.Screen name="Capilla" options={{ title: 'Capilla' }} />
<Stack.Screen name="Cancha" options={{ title: 'Cancha' }} />
<Stack.Screen name="Sector Académico" options={{ title: 'Sector Académico' }} />
<Stack.Screen name="Patio Central" options={{ title: 'Patio Central' }} />
<Stack.Screen name="Centro de Producción Animales" options={{ title: 'Centro de Producción Animales' }} />
<Stack.Screen name="Planta Láctea" options={{ title: 'Planta Láctea' }} />
<Stack.Screen name="Centro de Producción Vegetales" options={{ title: 'Centro de Producción Vegetales' }} />
<Stack.Screen name="Piscina" options={{ title: 'Piscina' }} />
<Stack.Screen name="Hotel" options={{ title: 'Hotel' }} />
<Stack.Screen name="Tour End" options={{ title: 'Tour End' }} />  */}