import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  

  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.cancha.title"),
      t("tour.cancha.description"), 
      "N/A",
      'cancha',
      require('../../../assets/images/Cancha.jpg'),
      '/(drawer)/tourStops/MapaCentral' as RelativePathString,
      '/(drawer)/tourStops/SectorAcademico' as RelativePathString,
    )
  );
}
