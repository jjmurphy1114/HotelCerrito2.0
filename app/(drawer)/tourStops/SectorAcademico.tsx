import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();

  return (
    StopTemplate(t("tour.sector_academico.title"),
      t("tour.sector_academico.description"), 
      require('../../../assets/audio/en/mapa-central.mp3'),
      require('../../../assets/images/SectorAcademico.jpg'),
      '/(drawer)/tourStops/Cancha' as RelativePathString,
      "/(drawer)/tourStops/PatioCentral" as RelativePathString
    )
  );
}
