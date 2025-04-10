import StopTemplate from '../tour/StopTemplate';
import { useTranslation } from 'react-i18next';
import { RelativePathString } from 'expo-router';

export default function MapaCentral() {  

  const { t } = useTranslation();

  return (
    StopTemplate(t("tour.mapa_central.title"),
      t("tour.mapa_central.description"), 
      "N/A",
      'mapa_central',
      require('../../../assets/images/MapaCentral.jpeg'),
      '/(drawer)/Tour' as RelativePathString,
      '/(drawer)/tourStops/Cancha' as RelativePathString
    )
  );
}
