import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.hotel.title"),
      t("tour.hotel.description"), 
      'hotel',
      require('../../../assets/images/Hotel.jpg'),
      '/(drawer)/tourStops/Piscina' as RelativePathString,
      "/(drawer)/tourStops/EndScreen" as RelativePathString
    )
  );
}
