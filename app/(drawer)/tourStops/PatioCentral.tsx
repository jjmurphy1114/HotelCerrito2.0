import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.patio_central.title"),
      t("tour.patio_central.description"), 
      require('../../../assets/audio/en/mapa-central.mp3'),
      require('../../../assets/images/PatioCentral.jpg'),
      '/(drawer)/tourStops/SectorAcademico' as RelativePathString,
      "/(drawer)/tourStops/Comedor" as RelativePathString
    )
  );
}
