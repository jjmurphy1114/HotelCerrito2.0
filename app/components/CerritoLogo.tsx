import { Image } from "expo-image";
import { StyleSheet} from 'react-native';
import { Platform } from 'react-native';

type Props = {
  width?: number;
  height?: number;
};

export default function CerritoLogo({ width = 40, height = 40 }: Props) {
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  const styles = StyleSheet.create({
    cerritoImage: {
      width: width,
      height: height,
      marginBottom: Platform.select({
        android: 0,
        ios: 12,
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
