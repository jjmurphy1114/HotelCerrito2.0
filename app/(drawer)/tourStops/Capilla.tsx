import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.capilla.title")}
      description={t("tour.capilla.description")}
      directions="N/A"
      audioPathKey="capilla"
      image={require('../../../assets/images/Capilla.jpg')}
      prev={'/(drawer)/tourStops/SectorAcademico' as RelativePathString}
      next={'/(drawer)/tourStops/PatioCentral' as RelativePathString}
    />
  );
}
