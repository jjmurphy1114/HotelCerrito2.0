import { View, StyleSheet, ScrollView, Platform } from 'react-native';
import { Text, Button, Card, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Image } from 'expo-image';
import ImageCarousel from '../../components/ImageCarousel';
import AudioPlayer from '@/app/components/AudioPlayer';
import { getAudio } from '../tour/stops';
import ScrollingTextBox from '@/app/components/ScrollingTextBox';

export default function EndScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const { colors } = useTheme();

  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, textAlign: 'center' },
    card: {
      margin: 20,
      padding: 10,
      borderRadius: 10,
      backgroundColor: colors.secondary,
      width: "90%",
      height: '40%'
    },
    scrollBox: {
      maxHeight: 400,
    },
    scrollContent: {
      paddingRight: 10,
    },
    text: {
      fontSize: 16,
      lineHeight: 22,
    },
    endButtons: {
        flexDirection: 'row',
        columnGap: 5,
        marginTop: 15
    }
  });
  
  const audio = getAudio('endScreen', 'descriptions');

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontFamily: Platform.select({
                  android: 'Inter_900Black',
                  ios: 'Inter-Black',
                }), }}>{t("tour.end.title")}</Text>
      <ImageCarousel
        images={[
          require('../../../assets/compressed/HotelWithTrees.webp'),
          require('../../../assets/compressed/HowlerMonkey2.webp'),
          require('../../../assets/compressed/StudentsAtCPV.webp'),
        ]}
      />
      <AudioPlayer source={audio}/> 
            
      <ScrollingTextBox text={t("tour.end.description")}/>

      <View style={styles.endButtons}>
        <Button
            mode="contained"
            onPress={() => router.replace('/Home')}
        >
            {t("tour.end.endButton")}
        </Button>
        <Button
            mode="outlined"
            onPress={() => router.replace('./MapaCentral')}
        >
           {t("tour.end.continue")}
        </Button>
      </View>
    </View>
  );
}