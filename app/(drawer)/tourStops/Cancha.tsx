import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  

  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.cancha.title")}
      description={t("tour.cancha.description")}
      directions={t("tour.cancha.directions")}
      audioPathKey="cancha"
      image={require('../../../assets/images/Cancha.jpg')}
      prev={'/(drawer)/tourStops/MapaCentral' as RelativePathString}
      next={'/(drawer)/tourStops/SectorAcademico' as RelativePathString}
    />
  );
}
