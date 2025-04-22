import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.capilla.title")}
      description={t("tour.capilla.description")}
      directions={t("tour.capilla.directions")}
      audioPathKey="capilla"
      image={require('../../../assets/compressed/Capilla.webp')}
      prev={'/(drawer)/tourStops/SectorAcademico' as RelativePathString}
      next={'/(drawer)/tourStops/PatioCentral' as RelativePathString}
    />
  );
}
