import ImageCarousel from '@/app/components/ImageCarousel';
import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.CPA.title")}
      description={t("tour.CPA.description")}
      directions={t("tour.CPA.directions")}
      audioPathKey="CPA"
      image={require('../../../assets/images/CPA.jpg')}
       customVisual={
              <ImageCarousel images={[require('../../../assets/images/CPA.jpg'),
                                      require('../../../assets/images/CPA2.jpg')
                                    ]}/>
            }
      prev={'/(drawer)/tourStops/Comedor' as RelativePathString}
      next={'/(drawer)/tourStops/FabricaDeQueso' as RelativePathString}
    />
  );
}
