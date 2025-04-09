import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.capilla.title"),
      t("tour.capilla.description"), 
      require('../../../assets/audio/en/mapa-central.mp3'),
      require('../../../assets/images/Capilla.jpg'),
      '/(drawer)/tourStops/MapaCentral' as RelativePathString,
      "/(drawer)/tourStops/Cancha" as RelativePathString
    )
  );
}
