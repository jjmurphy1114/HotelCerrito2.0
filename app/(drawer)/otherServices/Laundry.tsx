import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { RelativePathString, useRouter } from 'expo-router';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { useTheme, IconButton } from 'react-native-paper';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';

// Get screen width
const { width, height } = Dimensions.get('window');
const imageSizeWidth = width * 0.4;
const imageSizeHeight = height * 0.2;

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Laundry() {
  const { colors } = useTheme();
  const { t } = useTranslation();
  const router = useRouter();
  
  /*For navigating to the previous page*/
  const PrevPage = () => router.replace('/(drawer)/OtherServices');

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors.background,
      },
      header: {
        position: 'absolute',
        // flexDirection: 'row',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: colors.background,
        paddingVertical: 0,
        marginTop: 20,
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 10,
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
        position: 'absolute',
        left: 0,
        right: 0,
      },
      backButton: {
        alignSelf: 'flex-start',
        zIndex: 10
      },
      text: {
        color: colors.onSecondary, 
        textAlign: 'center',
        fontSize: 20,
        padding: 0,
        paddingLeft: 30,
        paddingRight: 30,
        fontFamily: Platform.select({
          android: 'Inter_400Regular',
          ios: 'Inter24pt-Regular',
        }),
      },
      textGreen: {
        color: colors.primary, 
        textAlign: 'center',
        fontSize: 20,
        padding: 0,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: Platform.select({
          android: 'Inter_400Regular',
          ios: 'Inter-Black',
        }),
      },
      textYellow: {
        color: colors.secondary, 
        textAlign: 'center',
        fontSize: 25,
        padding: 0,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: Platform.select({
          android: 'Inter_400Regular',
          ios: 'Inter-Black',
        }),
      },
      textUnderline: {
        color: colors.onSecondary, 
        textDecorationLine: 'underline',
        textAlign: 'center',
        fontSize: 20,
        padding: 0,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: Platform.select({
          android: 'Inter_400Italic',
          ios: 'Inter-Italic',
        }),
      },
      buttonContainer: {
        width: width * 0.8,
        flexDirection: 'row',   
        alignItems: 'center',   
        backgroundColor: colors.secondary,
        paddingVertical: 18,
        paddingRight: 10,
        borderRadius: 10,
        marginVertical: 20
      },
      buttonText: {
        color: colors.onSecondary,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: Platform.select({
          android: 'Inter_900Black',
          ios: 'Inter-Black',
        }),
        flex: 1,
      },
      buttonArrow: {
        width: imageSizeHeight * 0.15,  
        height: imageSizeHeight * 0.15, 
        resizeMode: 'cover',
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
        paddingBottom: 110,
      },
      bodyTextContainer: {
        marginTop: 20
      }
    });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={PrevPage} style={styles.backButton}>
            <IconButton icon="arrow-left" />
          </TouchableOpacity>
          <Text style={styles.headerText}>{t('laundry.header')}</Text>
        </View>

        <View style={styles.bodyTextContainer}>
        <Text style={styles.text}>{t('laundry.body1')}</Text>
        
        <Text style={styles.textUnderline}>{t('laundry.body2')}</Text>

        <Text style={styles.text}>{t('laundry.body3')}
        <Text style={styles.textGreen}>{t('laundry.body4')}</Text>
        <Text style={styles.text}>{t('laundry.body5')}</Text>
        <Text style={styles.textGreen}>{t('laundry.body6')}</Text>
        </Text>
        
        <Text style={styles.text}>{t('laundry.body7')}
        <Text style={styles.textGreen}>{t('laundry.body8')}</Text>
        </Text>
        
        <Text style={styles.textUnderline}>{t('laundry.body9')}</Text>
        
        <Text style={styles.text}>{t('laundry.body10')}
        <Text style={styles.textGreen}>{t('laundry.body11')}</Text>
        </Text>
        
        <Text style={styles.text}>{t('laundry.body12')}
        <Text style={styles.textGreen}>{t('laundry.body13')}</Text>
        </Text>
        </View>
        
      </ScrollView>
    </View>
  );
}
