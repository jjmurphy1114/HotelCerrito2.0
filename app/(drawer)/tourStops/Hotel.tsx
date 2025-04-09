import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.hotel.title"),
      t("tour.hotel.description"), 
      require('../../../assets/audio/en/mapa-central.mp3'),
      require('../../../assets/images/Hotel.jpg'),
      '/(drawer)/tourStops/Piscina' as RelativePathString,
      "/(drawer)/tourStops/EndScreen" as RelativePathString
    )
  );
}
