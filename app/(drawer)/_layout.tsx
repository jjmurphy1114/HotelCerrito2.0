import { Drawer } from 'expo-router/drawer';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';

export default function DrawerLayout() {
  
    const { colors } = useTheme();
    const { t } = useTranslation();
  
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
      <Drawer.Screen name="Home" options={{ title: t('home.title') }} />
      <Drawer.Screen name="About" options={{ title: t('about.title') }} />
      <Drawer.Screen name="Tour" options={{ title: t('tour.title') }} />
      <Drawer.Screen name="Activities" options={{ title: 'Activities' }} />
      <Drawer.Screen name="OtherServices" options={{ title: t('otherServices.title')} } />
      <Drawer.Screen name="Settings" options={{ title: t('settings.title')} } />

      {/* Tour stops hidden from the main drawer but still accessible */}
      <Drawer.Screen name='tour' options={{ drawerItemStyle: {display: 'none'}, title: "Self-Guided Tour"}} />
      <Drawer.Screen name='tour/stop1' options={{ drawerItemStyle: {display: 'none'}, title: "Stop 1"}} />
      <Drawer.Screen name='otherServices/CerritoRestaurant' options={{ drawerItemStyle: {display: 'none'}, title: "Cerrito Restaurant"}} />
      <Drawer.Screen name='otherServices/Laundry' options={{ drawerItemStyle: {display: 'none'}, title: "Laundry"}} />
      <Drawer.Screen name='otherServices/WaterRefill' options={{ drawerItemStyle: {display: 'none'}, title: "Water Refill"}} />
      <Drawer.Screen name='otherServices/RoomCleaning' options={{ drawerItemStyle: {display: 'none'}, title: "RoomCleaning"}} />
      <Drawer.Screen name='otherServices/Reserve Activities' options={{ drawerItemStyle: {display: 'none'}, title: "Reserve Activities"}} />
      <Drawer.Screen name='otherServices/Maintenance' options={{ drawerItemStyle: {display: 'none'}, title: "Maintenance"}} />
    </Drawer>
  );
}
