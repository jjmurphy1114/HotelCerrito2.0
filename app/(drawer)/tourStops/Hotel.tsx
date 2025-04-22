import ImageCarousel from '@/app/components/ImageCarousel';
import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.hotel.title")}
      description={t("tour.hotel.description")}
      directions={t("tour.hotel.directions")}
      audioPathKey="hotel"
      image={require('../../../assets/compressed/Hotel.webp')}
       customVisual={
              <ImageCarousel images={[require('../../../assets/compressed/Hotel.webp'),
                                      require('../../../assets/compressed/HotelFrontDesk.webp')
                                    ]}/>
            }
      prev={'/(drawer)/tourStops/Piscina' as RelativePathString}
      next={'/(drawer)/tourStops/EndScreen' as RelativePathString}
    />
  );
}
