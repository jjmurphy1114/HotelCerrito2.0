import { Text, View, StyleSheet, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from 'react-native-paper';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';

// Get screen width
const { width, height } = Dimensions.get('window');
const imageSizeWidth = width * 0.4;
const imageSizeHeight = height * 0.2;

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function About() {
  const { colors } = useTheme();
  const { t } = useTranslation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      marginTop: 5,
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
    },
    headerText: {
      color: colors.onSecondary, 
      textAlign: 'center',
      fontSize: 25,
      padding: 5,
      fontFamily: Platform.select({
        android: 'Inter_900Black',
        ios: 'Inter-Black',
      }),
    },
    subheader: {
      color: colors.onSecondary, 
      textAlign: 'center',
      fontSize: 20,
      paddingTop: 30,
      paddingBottom: 10,
      fontFamily: Platform.select({
        android: 'Inter_900Black',
        ios: 'Inter-Black',
      }),
    },
    text: {
      color: colors.onSecondary, 
      textAlign: 'left',
      fontSize: 15,
      padding: 0,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: Platform.select({
        android: 'Inter_400Regular',
        ios: 'Inter-Black',
      }),
    },
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
    image: {
      width: imageSizeWidth,
      height: imageSizeHeight,
      backgroundColor: '#0553',
      resizeMode: 'cover',
    },
    scrollView: {
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 60,
      paddingBottom: 80, // Ensure there's space for the footer
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.primary,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
    },
    footerText: {
      fontSize: 11,
      fontFamily: Platform.select({
        android: 'Inter_900Black',
        ios: 'Inter-Black',
      }),
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{t('About.Header')}</Text>
        </View>

        <Image
          style={styles.image}
          source={require('../../assets/images/hotel-cerrito-logo.png')}
          contentFit="contain"
          transition={1000}
        />

        <Text style={styles.subheader}>Fundación Paraguaya</Text>
        <Text style={styles.text}>{t('About.FDDesc')}</Text>

        <Text style={styles.subheader}>{t('About.CerritoTitle')}</Text>
        <Text style={styles.text}>{t('About.CerritoDesc')} </Text>

        <Text style={styles.subheader}>{t('About.HelpTitle')}</Text>
        <Text style={styles.text}>{t('About.HelpDesc')}</Text>
      
        <View style={styles.footer}>
          <Text style={styles.footerText}>{t('About.Footer1')}</Text>
          <Text style={styles.footerText}>{t('About.Footer2')}</Text>
          <Text style={styles.footerText}>{t('About.Footer3')}</Text>
        </View>
      </ScrollView>

      
    </View>
  );
}
