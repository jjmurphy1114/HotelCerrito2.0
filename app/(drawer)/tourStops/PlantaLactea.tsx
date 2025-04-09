import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.planta_lactea.description"), 
      require('../../../assets/audio/en/mapa-central.mp3'),
      require('../../../assets/images/PlantaLactea.jpg'),
      '/(drawer)/tourStops/CPA' as RelativePathString,
      "/(drawer)/tourStops/CPV" as RelativePathString
    )
  );
}
