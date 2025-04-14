import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.patio_central.title")}
      description={t("tour.patio_central.description")}
      directions="N/A"
      audioPathKey="patio_central"
      image={require('../../../assets/images/PatioCentral.jpg')}
      prev={'/(drawer)/tourStops/Capilla' as RelativePathString}
      next={'/(drawer)/tourStops/Comedor' as RelativePathString}
    />
  );
}
