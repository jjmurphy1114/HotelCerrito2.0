import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.capilla.title"),
      t("tour.capilla.description"), 
      "N/A",
      'capilla',
      require('../../../assets/images/Capilla.jpg'),
      '/(drawer)/tourStops/SectorAcademico' as RelativePathString,
      "/(drawer)/tourStops/PatioCentral" as RelativePathString
    )
  );
}
