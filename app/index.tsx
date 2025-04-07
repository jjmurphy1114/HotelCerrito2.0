import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Welcome() {
  const router = useRouter();
  const { i18n } = useTranslation();

  const handleLanguageSelect = (lang: string) => {
    i18n.changeLanguage(lang);
    router.replace('/(drawer)/Home');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Welcome!</Text>
      <Button title="Continue with English" onPress={() => handleLanguageSelect("en")} />
      <Button title="Continua con Español" onPress={() => handleLanguageSelect("es")} />
    </View>
  );
}
