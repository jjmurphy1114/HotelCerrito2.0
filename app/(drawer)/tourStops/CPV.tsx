import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.CPV.title"),
      t("tour.CPV.description"), 
      require('../../../assets/audio/en/mapa-central.mp3'),
      require('../../../assets/images/CPV.jpg'),
      '/(drawer)/tourStops/PlantaLactea' as RelativePathString,
      "/(drawer)/tourStops/Piscina" as RelativePathString
    )
  );
}
