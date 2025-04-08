import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.CPA.description"), 
      require('../../../assets/audio/en/mapa-central.mp3'),
      require('../../../assets/images/CPA.jpg'),
      '/(drawer)/tourStops/Comedor' as RelativePathString,
      "/(drawer)/tourStops/PlantaLactea" as RelativePathString
    )
  );
}
