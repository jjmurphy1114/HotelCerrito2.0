import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function TourStart() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
       <Text variant="headlineMedium" style={{textAlign: "center"}}>{t("tour.welcome")}</Text>
      <Button
        mode="contained"
        onPress={() => router.push('/tour/MapaCentral')}
      >
        {t('tour.begin_tour')}
      </Button>
      
      {/* <Button mode="contained" onPress={() => router.push('../tour')}>
        View Stops
      </Button> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, textAlign: 'center' },
});
