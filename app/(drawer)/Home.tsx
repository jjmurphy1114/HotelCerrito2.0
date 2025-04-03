import { Text, View, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { useTheme } from 'react-native-paper';
import { Image } from 'expo-image';
import { Dimensions } from 'react-native';

// Get screen width
const { width, height } = Dimensions.get('window');
const imageSizeWidth = width * 0.4;
const imageSizeHeight = width * 0.4;

export function ImageButtonPair() {
  
}

export default function Home() {
  const { colors } = useTheme();
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      marginTop: 5,
      padding: 40,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      flex: 1,
      width: imageSizeWidth,
      height: imageSizeHeight,
      backgroundColor: '#0553',
    },
  });
  
  const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('/Users/ceciherriman/HotelCerrito2.0/assets/images/emoji4.png')} 
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      
      <Text style={{color: colors.primary}}>HOME PAGE</Text>

    </View>
    );
  }


