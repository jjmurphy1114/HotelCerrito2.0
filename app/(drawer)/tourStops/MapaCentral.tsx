import StopTemplate from '../tour/StopTemplate';
import { useTranslation } from 'react-i18next';
import { RelativePathString } from 'expo-router';

export default function MapaCentral() {  

  const { t } = useTranslation();

  return (
    <StopTemplate
      title={t("tour.mapa_central.title")}
      description={t("tour.mapa_central.description")}
      directions={t("tour.mapa_central.directions")}
      audioPathKey="mapa_central"
      image={require('../../../assets/images/MapaCentral.jpeg')}
      prev={'/(drawer)/Tour' as RelativePathString}
      next={'/(drawer)/tourStops/Cancha' as RelativePathString}
    />
  );
}
