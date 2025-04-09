import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card, useTheme } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Image } from 'expo-image';
import ImageCarousel from '../components/ImageCarousel';

export default function TourStart() {
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
      fontSize: 18,
      lineHeight: 24,
    },
  });
  

  return (
    <View style={styles.container}>
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