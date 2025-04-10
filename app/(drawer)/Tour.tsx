import { View, StyleSheet, ScrollView, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { Text, Button, Card, useTheme, IconButton } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Image } from 'expo-image';
import ImageCarousel from '../components/ImageCarousel';

const { width, height } = Dimensions.get('window');
const imageSizeWidth = width * 0.4;

export default function TourStart() {
  const router = useRouter();
  const { t } = useTranslation();
  const { colors } = useTheme();
  
  /*For navigating to the previous page*/
  const PrevPage = () => router.replace('/(drawer)/Home');

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
      fontSize: 18,
      lineHeight: 24,
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
          require('../../assets/images/HotelWithTrees.jpg'),
          require('../../assets/images/CerritoSign.jpeg'),
          require('../../assets/images/Capilla.jpg'),
        ]}
      /> 
      <Card style={styles.card}>
        <ScrollView
          style={styles.scrollBox}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          <Text style={styles.text}>
            {t("tour.welcome")}
          </Text>
        </ScrollView>
      </Card>
      <Button
        mode="contained"
        onPress={() => router.push('/tourStops/MapaCentral')}
      >
        {t('tour.begin_tour')}
      </Button>
    </View>
  );
}