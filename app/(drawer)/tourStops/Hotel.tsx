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
      image={require('../../../assets/images/Hotel.jpg')}
       customVisual={
              <ImageCarousel images={[require('../../../assets/images/Hotel.jpg'),
                                      require('../../../assets/images/HotelFrontDesk.jpeg')
                                    ]}/>
            }
      prev={'/(drawer)/tourStops/Piscina' as RelativePathString}
      next={'/(drawer)/tourStops/EndScreen' as RelativePathString}
    />
  );
}
