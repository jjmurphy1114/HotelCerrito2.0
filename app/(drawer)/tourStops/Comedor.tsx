import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.comedor.title")}
      description={t("tour.comedor.description")}
      directions={t("tour.comedor.directions")}
      audioPathKey="comedor"
      image={require('../../../assets/images/Comedor.jpg')}
      prev={'/(drawer)/tourStops/PatioCentral' as RelativePathString}
      next={'/(drawer)/tourStops/CPA' as RelativePathString}
    />
  );
}
