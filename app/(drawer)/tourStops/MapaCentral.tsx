import StopTemplate from '../tour/StopTemplate';
import { useTranslation } from 'react-i18next';
import { RelativePathString } from 'expo-router';

export default function MapaCentral() {  

  const { t } = useTranslation();

  return (
    StopTemplate(t("tour.mapa_central.description"), 
      require('../../../assets/audio/en/mapa-central.mp3'),
      require('../../../assets/images/MapaCentral.jpg'),
      '/(drawer)/Tour' as RelativePathString,
      '/(drawer)/tourStops/Capilla' as RelativePathString
    )
  );
}
