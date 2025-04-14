import { Image } from "expo-image";
import { StyleSheet, Dimensions} from 'react-native';
import { Platform } from 'react-native';

type Props = {
  widthProp?: number;
  heightProp?: number;
};

const { width, height } = Dimensions.get('window');

export default function CerritoLogo({ widthProp, heightProp}: Props) {
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  
  const styles = StyleSheet.create({
    cerritoImage: {
      width: widthProp,
      height: heightProp,
      marginBottom: Platform.select({
        android: 0,
        ios: height * .015,
      })
    }
  });
  return (
    <Image
      source={require('../../assets/images/hotel-cerrito-logo.png')}
      style={styles.cerritoImage}
    //   placeholder={{ blurhash }}
      contentFit="contain"
      transition={500}
    />
  );
}
