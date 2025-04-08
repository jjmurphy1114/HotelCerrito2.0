import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.piscina.description"), 
      require('../../../assets/audio/en/mapa-central.mp3'),
      require('../../../assets/images/Piscina.jpg'),
      '/(drawer)/tourStops/CPV' as RelativePathString,
      "/(drawer)/tourStops/Hotel" as RelativePathString
    )
  );
}
