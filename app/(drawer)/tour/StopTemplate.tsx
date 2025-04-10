import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { RelativePathString, useRouter, usePathname } from 'expo-router';
import { useTheme, Card, IconButton } from 'react-native-paper';
import { Image } from 'expo-image';
import AudioPlayer from '@/app/components/AudioPlayer';
import { useTranslation } from 'react-i18next';
import { audioMap, getAudio } from './stops';

export default function StopTemplate( title: string,
                                    description: string, 
                                    audioPathKey: any, 
                                    image: any, 
                                    prev: RelativePathString, 
                                    next: RelativePathString
                                  ) {
  
  // Need to implement audio player here

  const router = useRouter();
  const { colors } = useTheme();
  const { t } = useTranslation();
  const audio = getAudio(audioPathKey);

  /*For navigating to the next page*/
  const NextPage = () => router.replace(next);

  /*For navigating to the previous page*/
  const PrevPage = () => router.replace(prev);

  // Expo Image setup
  const { width, height } = Dimensions.get('window');
  const imageSizeWidth = width * 0.9;
  const imageSizeHeight = height * 0.25;

  const styles = StyleSheet.create({
      container: {
        backgroundColor: colors.background,
        marginTop: 5,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: imageSizeWidth,
        height: imageSizeHeight,
        backgroundColor: colors.background,
        marginTop: 5
      },
      card: {
        margin: 20,
        padding: 10,
        borderRadius: 10,
        backgroundColor: colors.secondary,
        width: "90%"
      },
      scrollBox: {
        maxHeight: 200,
      },
      scrollContent: {
        paddingRight: 10,
      },
      text: {
        fontSize: 18,
        lineHeight: 24,
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      navigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 10,
      },
      
      navButton: {
        alignItems: 'center',
        marginHorizontal: 10,
      },
      
      navLabel: {
        fontSize: 14,
        color: '#666', // or use theme.colors.onBackground
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
      <AudioPlayer source={audio} />
      <View style={styles.navigation}>
        <View style={styles.navButton}>
          <IconButton icon="arrow-left" onPress={PrevPage} />
          <Text style={styles.navLabel}>{t("tour.back")}</Text>
        </View>

        <View style={styles.navButton}>
          <IconButton icon="arrow-right" onPress={NextPage} />
          <Text style={styles.navLabel}>{t("tour.next")}</Text>
        </View>
      </View>
      <Card style={styles.card}>
        <ScrollView
          style={styles.scrollBox}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          <Text style={styles.text}>
            {description}
          </Text>
        </ScrollView>
      </Card>
    </View>
  );
}