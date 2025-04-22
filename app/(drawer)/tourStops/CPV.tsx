import ImageCarousel from '@/app/components/ImageCarousel';
import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.CPV.title")}
      description={t("tour.CPV.description")}
      directions={t("tour.CPV.directions")}
      audioPathKey="CPV"
      image={require('../../../assets/compressed/CPV.webp')}
      customVisual={<ImageCarousel images={[require('../../../assets/compressed/CPV.webp'), require('../../../assets/compressed/Gardening.webp')]}/>}
      prev={'/(drawer)/tourStops/FabricaDeQueso' as RelativePathString}
      next={'/(drawer)/tourStops/Piscina' as RelativePathString}
    />
  );
}
