import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { RelativePathString, useRouter } from 'expo-router';
import { useTheme } from 'react-native-paper';
import { Image } from 'expo-image';
import AudioPlayer from '@/app/components/AudioPlayer';

export default function StopTemplate(title: string, 
                                    description: string, 
                                    audioPath: any, 
                                    image: any, 
                                    prev: RelativePathString, 
                                    next: RelativePathString
                                  ) {
  
  // Need to implement audio player here

  const router = useRouter();
  const { colors } = useTheme();

  /*For navigating to the next page*/
  const NextPage = () => {
    try {
     router.replace(next);
    } catch (error) {
      console.log("Potential error in NextPage")
    }
  };

  /*For navigating to the previous page*/
  const PrevPage = () => {
    try {
      router.replace(prev);
    } catch (error) {
      console.log("Potential error in PrevPage")
    }
  };

  // Expo Image setup

  const { width, height } = Dimensions.get('window');
  const imageSizeWidth = width * 0.4;
  const imageSizeHeight = width * 0.4;

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

    // Placeholder for when the image is not loaded
    const blurhash =
    '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';
  
  
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <Text style={{ fontSize: 24 }}>{title}</Text>
      <Image
            style={styles.image}
            source={image} 
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
      <AudioPlayer source={audioPath} />
      <Text style={{ fontSize: 18 }}>{description}</Text>
    </View>
  );
}