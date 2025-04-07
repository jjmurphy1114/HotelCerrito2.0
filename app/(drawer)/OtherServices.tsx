import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';

// Get screen width
const { width, height } = Dimensions.get('window');
const imageSizeWidth = width * 0.4;
const imageSizeHeight = height * 0.2;

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function OtherServices() {
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
      backgroundColor: colors.background,
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
    buttonContainer: {
      width: width * 0.7,
      flexDirection: 'row',   
      alignItems: 'center',   
      backgroundColor: colors.secondary,
      paddingVertical: 15,
      paddingRight: 10,
      borderRadius: 10,
      margin: 10,
    },
    buttonText: {
      color: colors.onSecondary,
      textAlign: 'center',
      fontSize: 15,
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
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{t('otherServices.header')}</Text>
        </View>

        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{t('otherServices.button1')}</Text>
            <Image
              style={styles.buttonArrow}
              source={require("../../assets/images/RightArrow.png")}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{t('otherServices.button2')}</Text>
            <Image
              style={styles.buttonArrow}
              source={require("../../assets/images/RightArrow.png")}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{t('otherServices.button3')}</Text>
            <Image
              style={styles.buttonArrow}
              source={require("../../assets/images/RightArrow.png")}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{t('otherServices.button4')}</Text>
            <Image
              style={styles.buttonArrow}
              source={require("../../assets/images/RightArrow.png")}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{t('otherServices.button5')}</Text>
            <Image
              style={styles.buttonArrow}
              source={require("../../assets/images/RightArrow.png")}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        </TouchableOpacity>


        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{t('otherServices.button6')}</Text>
            <Image
              style={styles.buttonArrow}
              source={require("../../assets/images/RightArrow.png")}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        </TouchableOpacity>
        
      </ScrollView>
    </View>
  );
}
