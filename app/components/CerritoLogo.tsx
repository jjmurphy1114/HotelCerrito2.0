import { Image } from "expo-image";

type Props = {
  width?: number;
  height?: number;
};

export default function CerritoLogo({ width = 40, height = 40 }: Props) {
  const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

  return (
    <Image
      source={require('../../assets/images/hotel-cerrito-logo.png')}
      style={{ width, height }}
    //   placeholder={{ blurhash }}
      contentFit="contain"
      transition={500}
    />
  );
}
