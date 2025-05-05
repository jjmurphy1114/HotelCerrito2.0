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
      scrollContainer: {
        padding: 30,
        marginTop: 30,   // push it below the banner
        alignItems: 'center',       // center children horizontally
        width: '100%',              
      },
      stopButton: {
        width: '80%',               // or whatever makes sense visually
        marginVertical: 8,
      },
      stopLabel: {
        textDecorationLine: 'underline',
        fontSize: 16,
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
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {tourStops.map((stop, index) => {
        let buttonText = '';
        if (index === 0) {
          buttonText = t('tour.start');
        } else if (index === tourStops.length - 1) {
          buttonText = t('tour.end.title');
        } else {
          buttonText = `${t('tour.view_stops.stop')} ${stop.number}: ${t(stop.titleKey)}`;
        }

        return (
          <Button
            key={stop.route}
            onPress={() => router.replace(stop.route)}
            mode={'contained'}
            style={{ marginTop: 10, width: '100%', backgroundColor: colors.tertiary, }}
            labelStyle={{
              fontFamily: Platform.select({
                android: 'Inter_500Medium',
                ios: 'Inter-MediumBold',
              }),
              fontSize: 15.5, // optional
              color: '555555', // optional
              fontWeight: 'bold', // optional
            }}
          >
            {buttonText}
          </Button>
        );
      })}
    </ScrollView>
    </View>
  );
}
