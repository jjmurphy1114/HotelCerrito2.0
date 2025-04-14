import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.hotel.title")}
      description={t("tour.hotel.description")}
      directions="N/A"
      audioPathKey="hotel"
      image={require('../../../assets/images/Hotel.jpg')}
      prev={'/(drawer)/tourStops/Piscina' as RelativePathString}
      next={'/(drawer)/tourStops/EndScreen' as RelativePathString}
    />
  );
}
