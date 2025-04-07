import StopTemplate from './StopTemplate';
import { useTranslation } from 'react-i18next';
import { useLayoutEffect } from 'react';
import { RelativePathString, useNavigation } from 'expo-router';

export default function MapaCentral() {  

  const navigation = useNavigation();
  const { t } = useTranslation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: t('tour.mapa_central.title') });
  }, [navigation, t]);

  return (
    StopTemplate(t("tour.mapa_central.description"), 
      require('../../../assets/audio/en/mapa-central.mp3'),
      require('../../../assets/images/MapaCentral.jpg'),
      '/(drawer)/Tour' as RelativePathString,
      '/(drawer)/tour/Capilla' as RelativePathString
    )
  );
}
