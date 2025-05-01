import { View, StyleSheet, ScrollView, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { Text, Button, Card, useTheme, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Image } from 'expo-image';
import ImageCarousel from '../components/ImageCarousel';
import AudioPlayer from '../components/AudioPlayer';
import { getAudio } from './tour/stops';
import ScrollingTextBox from '../components/ScrollingTextBox';

export default function TourStart() {
  const router = useRouter();
  const { t } = useTranslation();
  const { colors } = useTheme();
  
  /*For navigating to the previous page*/
  const PrevPage = () => router.replace('/(drawer)/Home');

  const audio = getAudio('start', 'descriptions');

  const { width, height } = Dimensions.get('window');
  const imageSizeWidth = width * 0.4;
  const isSmallDevice = height < 700;

  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      // padding: width*0.045, 
      paddingTop: isSmallDevice ? 10 : 15, // <- smart, dynamic top padding
      textAlign: 'center' 
    },
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
    text: {
      fontSize: 18,
      lineHeight: width*0.064,
      fontFamily: Platform.select({
        android: 'Inter_400Regular',
        ios: 'Inter24pt-Regular',
      }),
    },
  });
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <TouchableOpacity onPress={PrevPage} style={styles.backButton}>
              <IconButton icon="arrow-left" size={20} />
          </TouchableOpacity>
          <Text style={styles.headerText}>{t('tour.header')}</Text>
        </View>

      <ImageCarousel
        images={[
          require('../../assets/compressed/HotelWithTrees.webp'),
          require('../../assets/compressed/CerritoSign.webp'),
          require('../../assets/compressed/Capilla.webp'),
        ]}
        heightOverride={.35}
      /> 
      <AudioPlayer source={audio} shouldPlay={true}/>
     
      <ScrollingTextBox text={t("tour.welcome")}/>

      <Button
        mode="contained"
        labelStyle={{
          fontFamily: Platform.select({
            android: 'Inter_500Medium',
            ios: 'Inter-Medium',
          }),
          fontSize: 16, // optional
        }}
        style={{
          marginTop: 15
        }}
        onPress={() => router.push('/tourStops/MapaCentral')}
      >
        {t('tour.begin_tour')}
      </Button>
    </View>
  );
}