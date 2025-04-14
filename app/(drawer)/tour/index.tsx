import { View, ScrollView, StyleSheet, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Text, Button, useTheme, IconButton } from 'react-native-paper';
import { useRouter, useNavigation, RelativePathString, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import tourStops from './stops';
import { useLayoutEffect } from 'react';

export default function TourStops() {
  const router = useRouter();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const { colors } = useTheme();

  

  const { from } = useLocalSearchParams();
  const prevPath = (from || '/') as RelativePathString;

  const PrevPage = () => router.replace(prevPath);

  const { width, height } = Dimensions.get('window'); 

  useLayoutEffect(() => {
    navigation.setOptions({ title: '' });
  }, [navigation, t]);
  
   const styles = StyleSheet.create({
      container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, textAlign: 'center' },
      header: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: colors.secondary,
            paddingVertical: 0,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 999
          },
          headerText: {
            color: colors.onSecondary, 
            textAlign: 'center',
            fontSize: 20,
            padding: width*.008,
            fontFamily: Platform.select({
              android: 'Inter_900Black',
              ios: 'Inter-Black',
            }),
            position: 'absolute',
              left: 0,
              right: 0,
          },
          backButton: {
            alignSelf: 'flex-start',
            zIndex: 10
          },
   });

  // This is the current menu for switching between stops. To change the order of the stops, go to stops.ts
  return (
    <View>
      <View style={styles.header}>
          <TouchableOpacity onPress={PrevPage} style={styles.backButton}>
              <IconButton icon="arrow-left" size={20} />
          </TouchableOpacity>
          <Text style={styles.headerText} variant="headlineMedium">{t("tour.view_stops.title")}</Text>
        </View>
    <ScrollView contentContainerStyle={{ padding: 20, marginTop: 30 }}>
      {tourStops.map((stop) => (
        <Button
          key={stop.route}
          onPress={() => router.replace(stop.route)}
          style={{ marginTop: 10 }}
          labelStyle={{
            fontFamily: Platform.select({
              android: 'Inter_500Medium',
              ios: 'Inter-Medium',
            }),
            fontSize: 16, // optional
          }}
        >
          {t('tour.view_stops.stop')} {stop.number}: {t(stop.titleKey)}
        </Button>
      ))}
    </ScrollView>
    </View>
  );
}
