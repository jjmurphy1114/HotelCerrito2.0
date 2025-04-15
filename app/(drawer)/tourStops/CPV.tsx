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
      image={require('../../../assets/images/CPV.jpg')}
      customVisual={<ImageCarousel images={[require('../../../assets/images/CPV.jpg'), require('../../../assets/images/Gardening.jpg')]}/>}
      prev={'/(drawer)/tourStops/FabricaDeQueso' as RelativePathString}
      next={'/(drawer)/tourStops/Piscina' as RelativePathString}
    />
  );
}
