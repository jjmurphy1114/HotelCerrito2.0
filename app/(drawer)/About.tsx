import { Text, View, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { useTheme, IconButton } from 'react-native-paper';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import { RelativePathString, useRouter } from 'expo-router';

// Get screen width
const { width, height } = Dimensions.get('window');
const imageSizeWidth = width * 0.4;
const imageSizeHeight = height * 0.2;

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function About() {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const router = useRouter();
  
  /*For navigating to the previous page*/
  const PrevPage = () => router.replace('/(drawer)/Home');


  const handleFacebookLink = () => {
    Linking.openURL('https://www.facebook.com/hotelescuelacerrito');
  };

  const handleXLink = () => {
    Linking.openURL('https://x.com/hotelcerrito');
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      marginTop: 0,
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
      padding: width*.012,
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
    subheader: {
      color: colors.onSecondary, 
      textAlign: 'center',
      fontSize: 28,
      paddingTop: width*.1,
      paddingBottom: width*.025,
      paddingLeft: width*.022,
      paddingRight: width*.022,
      fontFamily: Platform.select({
        android: 'Inter_900Black',
        ios: 'Inter-Black',
      }),
      marginBottom: width*.025,
    },
    text: {
      color: colors.onSecondary, 
      textAlign: 'left',
      fontSize: 23,
      padding: 0,
      paddingLeft: width*.052,
      paddingRight: width*.052,
      marginBottom: width*.02,
      fontFamily: Platform.select({
        android: 'Inter_400Regular',
        ios: 'Inter24pt-Regular',
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
      backgroundColor: '#ffff',
      resizeMode: 'cover',
    },
    scrollView: {
      backgroundColor: colors.background,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: width*.17,
      paddingBottom: width*.33,
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: colors.primary,
      padding: width*.03,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: width*.1,
    },
    footerText: {
      fontSize: 11,
      fontFamily: Platform.select({
        android: 'Inter_900Black',
        ios: 'Inter-Black',
      }),
    },
    socialMediaIcons: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: width*.025,
    },
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={PrevPage} style={styles.backButton}>
              <IconButton icon="arrow-left" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{t('about.Header')}</Text>
        </View>

        <Image
          style={styles.image}
          source={require('../../assets/images/escuela-cerrito.png')}
          contentFit="contain"
          transition={1000}
        />

        <Text style={styles.subheader}>{t('about.CerritoTitle')}</Text>
        <Text style={styles.text}>{t('about.CerritoDesc')} </Text>

        <Text style={styles.subheader}>{t('about.HelpTitle')}</Text>
        <Text style={styles.text}>{t('about.HelpDesc')}</Text>
      
        <View style={styles.footer}>
          <Text style={styles.footerText}>{t('about.Footer1')}</Text>
          <Text style={styles.footerText}>{t('about.Footer2')}</Text>
          <Text style={styles.footerText}>{t('about.Footer3')}</Text>

          <View style={styles.socialMediaIcons}>
            <TouchableOpacity onPress={handleFacebookLink}>
            <Text> Facebook </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleXLink}>
            <Text> X </Text>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>

      
    </View>
  );
}
