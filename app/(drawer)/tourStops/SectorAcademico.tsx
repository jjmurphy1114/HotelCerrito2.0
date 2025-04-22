import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();

  return (
    <StopTemplate
      title={t("tour.sector_academico.title")}
      description={t("tour.sector_academico.description")}
      directions={t("tour.sector_academico.directions")}
      audioPathKey="sector_academico"
      image={require('../../../assets/compressed/SectorAcademico.webp')}
      prev={'/(drawer)/tourStops/Cancha' as RelativePathString}
      next={'/(drawer)/tourStops/Capilla' as RelativePathString}
    />
  );
}
