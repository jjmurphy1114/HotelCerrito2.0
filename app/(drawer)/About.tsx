import { Text, View, StyleSheet, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { useTheme } from 'react-native-paper';
import { Platform } from 'react-native';

// Get screen width
const { width, height } = Dimensions.get('window');
const imageSizeWidth = width * 0.4;
const imageSizeHeight = height * 0.2;

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function About() {
  const { colors } = useTheme();

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
          <Text style={styles.headerText}>About Us</Text>
        </View>

        <Image
          style={styles.image}
          source={require('../../assets/images/hotel-cerrito-logo.png')}
          contentFit="contain"
          transition={1000}
        />

        <Text style={styles.subheader}>Fundación Paraguaya</Text>
        <Text style={styles.text}>Develop and implement practical, innovative, and sustainable solutions that unlock the entrepreneurial potential of families to eliminate multidimensional poverty and live with dignity.</Text>

        <Text style={styles.subheader}>The Cerrito School</Text>
        <Text style={styles.text}>Hotel Escuela Cerrito is a venture of Fundación Paraguaya. The school follows a self-management model, in which a self-sufficient farm school generates its own income. We foster an entrepreneurial spirit in our students, who come from 12 departments across the country and abroad. We are a coeducational boarding school with facilities for 150 students.
        </Text>

        <Text style={styles.subheader}>How You Can Help</Text>
        <Text style={styles.text}> Purchasing services and goods from the Cerrito School and Hotel helps generate income to support Cerrito and its work to support students. Booking rooms, using aundry services, eating at the hotel restaurant, and buying products, goods, or merchandise at the shop are all ways that you can support the school monetarily. You can also reccommend Cerrito to friends and family. </Text>
      
        <View style={styles.footer}>
          <Text style={styles.footerText}>Copyright © 2018 Fundación Paraguaya.</Text>
          <Text style={styles.footerText}>All rights reserved.</Text>
          <Text style={styles.footerText}>Created by Fundación Paraguaya</Text>
        </View>
      </ScrollView>

      
    </View>
  );
}
