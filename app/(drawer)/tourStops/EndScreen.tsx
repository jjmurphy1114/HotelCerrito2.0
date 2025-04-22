import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Image } from 'expo-image';
import ImageCarousel from '../../components/ImageCarousel';
import AudioPlayer from '@/app/components/AudioPlayer';
import { getAudio } from '../tour/stops';

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
        columnGap: 5
    }
  });
  
  const audio = getAudio('endScreen', 'descriptions');

  return (
    <View style={styles.container}>
      <ImageCarousel
        images={[
          require('../../../assets/images/HotelWithTrees.webp'),
          require('../../../assets/images/HowlerMonkey2.jpg'),
          require('../../../assets/images/StudentsAtCPV.jpg'),
        ]}
      />
      <AudioPlayer source={audio}/> 
      <Card style={styles.card}>
        <ScrollView
          style={styles.scrollBox}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          <Text style={styles.text}>
            {t("tour.end.description")}
          </Text>
        </ScrollView>
      </Card>
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