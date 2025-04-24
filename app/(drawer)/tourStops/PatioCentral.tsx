import ImageCarousel from '@/app/components/ImageCarousel';
import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.patio_central.title")}
      description={t("tour.patio_central.description")}
      directions={t("tour.patio_central.directions")}
      audioPathKey="patio_central"
      image={require('../../../assets/compressed/PatioCentral.webp')}
       customVisual={
              <ImageCarousel images={[require('../../../assets/compressed/PatioCentral.webp'),
                                      require('../../../assets/compressed/PatioWithStudents.webp')
                                    ]}/>
            }
      prev={'/(drawer)/tourStops/Capilla' as RelativePathString}
      next={'/(drawer)/tourStops/Comedor' as RelativePathString}
    />
  );
}
