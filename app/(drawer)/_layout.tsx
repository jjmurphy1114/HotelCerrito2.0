import { Drawer } from 'expo-router/drawer';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'react-native-paper';
import { View } from 'react-native';
import CerritoLogo from '../components/CerritoLogo';

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
        headerRight: () => (
          <View style={{ marginRight: 12 }}>
            <CerritoLogo width={60} height={60} />
          </View>
        )
      }}>
      <Drawer.Screen name="Home" options={{ title: t('home.title') }} />
      <Drawer.Screen name="About" options={{ title: t('about.title') }} />
      <Drawer.Screen name="Tour" options={{ title: t('tour.title') }} />
      <Drawer.Screen name="Activities" options={{ title: t('activities.title')}} />
      <Drawer.Screen name="OtherServices" options={{ title: t('otherServices.title')} } />
      <Drawer.Screen name="Settings" options={{ title: t('settings.title')} } />

      {/* Tour stops hidden from the main drawer but still accessible */}
      <Drawer.Screen name='tour' options={{ drawerItemStyle: {display: 'none'}, title: t("tour.title")}} />
      <Drawer.Screen name='tour/index' options={{ drawerItemStyle: {display: 'none'}, title: t("tour.title")}} />
      <Drawer.Screen name='tour/stops' options={{ drawerItemStyle: {display: 'none'}, title: t("tour.title")}} />
      <Drawer.Screen name='tour/StopTemplate' options={{ drawerItemStyle: {display: 'none'}, title: t("tour.title")}} />
      <Drawer.Screen name='tourStops' options={{ drawerItemStyle: {display: 'none'}, title: t("tour.title")}} />

      <Drawer.Screen name='otherServices/CerritoRestaurant' options={{ drawerItemStyle: {display: 'none'}, title: t('cerritoRestaurant.title')}} />
      <Drawer.Screen name='otherServices/Laundry' options={{ drawerItemStyle: {display: 'none'}, title: t('laundry.title')}} />
      <Drawer.Screen name='otherServices/WaterRefill' options={{ drawerItemStyle: {display: 'none'}, title: t('waterRefill.title')}} />
      <Drawer.Screen name='otherServices/RoomCleaning' options={{ drawerItemStyle: {display: 'none'}, title: t('housekeeping.title')}} />
      <Drawer.Screen name='otherServices/ReserveActivities' options={{ drawerItemStyle: {display: 'none'}, title: t('reserveActivities.title')}} />
      <Drawer.Screen name='otherServices/Maintenance' options={{ drawerItemStyle: {display: 'none'}, title: t('maintenance.title')}} />
    </Drawer>
  );
}
