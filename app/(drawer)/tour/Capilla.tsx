import StopTemplate from './StopTemplate';
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
      require('../../../assets/audio/en/KylePleaseStopEdging.mp3'),
      require('../../../assets/images/Capilla.jpg'),
      '/(drawer)/tour/MapaCentral' as RelativePathString,
      "../stop1"
    )
  );
}
