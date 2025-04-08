import StopTemplate from '../tour/StopTemplate';
import { RelativePathString, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const navigation = useNavigation();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: t('tour.capilla.title') });
  }, [navigation, t]);
  
  return (
    StopTemplate(t("tour.capilla.description"), 
      require('../../../assets/audio/en/mapa-central.mp3'),
      require('../../../assets/images/Capilla.jpg'),
      '/(drawer)/tourStops/MapaCentral' as RelativePathString,
      "../stop1"
    )
  );
}
