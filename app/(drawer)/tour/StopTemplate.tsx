import { View, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useTheme } from 'react-native-paper';

export default function GeneralLugar(title, description, audioPath, imagePath, prev, next) {
  
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
  
    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.background }}>
      <Text style={{ fontSize: 24 }}>General Lugar</Text>
      <Text style={{ fontSize: 18 }}>This is the General Lugar screen.</Text>
    </View>
  );
}