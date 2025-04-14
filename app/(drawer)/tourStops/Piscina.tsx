import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.piscina.title")}
      description={t("tour.piscina.description")}
      directions={t("tour.piscina.directions")}
      audioPathKey="piscina"
      image={require('../../../assets/images/Piscina.jpg')}
      prev={'/(drawer)/tourStops/CPV' as RelativePathString}
      next={'/(drawer)/tourStops/Hotel' as RelativePathString}
    />
  );
}
