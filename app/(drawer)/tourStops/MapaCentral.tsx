import StopTemplate from '../tour/StopTemplate';
import { useTranslation } from 'react-i18next';
import { RelativePathString } from 'expo-router';
import MapComponent from '@/app/components/Map';
import { Dimensions } from 'react-native';


export default function MapaCentral() {  

  const { t } = useTranslation();

  return (
    <StopTemplate
      title={t("tour.mapa_central.title")}
      description={t("tour.mapa_central.description")}
      directions={t("tour.mapa_central.directions")}
      audioPathKey="mapa_central"
      image={require('../../../assets/images/MapaCentral.jpg')}
      customVisual={<MapComponent percentCropHeight={0.273} showPath={false} hideOverlay={true} />}
      prev={'/(drawer)/Tour' as RelativePathString}
      next={'/(drawer)/tourStops/Cancha' as RelativePathString}
    />
  );
}
