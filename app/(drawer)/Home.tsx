import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Activities from './Activities';
import Tour from './Tour';
import { useTheme } from 'react-native-paper';

export default function Home() {
  const { colors } = useTheme();
  
  return (
    <View style={{backgroundColor: colors.background}}>
          <Text style={{color: colors.primary}}>HOME PAGE</Text>
        </View>
      );
    }

//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         backgroundColor: '#25292e',
//         alignItems: 'center',
//         justifyContent: 'center',
//       },
//       text: {
//         color: '#fff',
//       },
//       button: {
//         fontSize: 20,
//         textDecorationLine: 'underline',
//         color: '#fff',
//       },
// });
