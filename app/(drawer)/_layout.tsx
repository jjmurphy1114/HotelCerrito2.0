import { Drawer } from 'expo-router/drawer';
import { useTheme } from 'react-native-paper';

export default function DrawerLayout() {
  
    const { colors } = useTheme();
  
    return (
    <Drawer
    screenOptions={{
        drawerStyle: {
          backgroundColor: colors.background, // ← background of drawer
        },
        drawerActiveTintColor: colors.primary, // ← active label color
        drawerInactiveTintColor: colors.onBackground, // ← normal text color
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTintColor: colors.onPrimary,
      }}>
      <Drawer.Screen name="Home" options={{ title: 'Home' }} />
      <Drawer.Screen name="Tour" options={{ title: 'Self-Guided Tour' }} />
      <Drawer.Screen name="Activities" options={{ title: 'Activities' }} />

      {/* Tour stops hidden from the main drawer but still accessible */}
      <Drawer.Screen name='tour' options={{ drawerItemStyle: {display: 'none'}, title: "Self-Guided Tour"}} />
      <Drawer.Screen name='tour/stop1' options={{ drawerItemStyle: {display: 'none'}, title: "Stop 1"}} />


    </Drawer>
  );
}
