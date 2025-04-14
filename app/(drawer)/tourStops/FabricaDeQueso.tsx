import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    <StopTemplate
      title={t("tour.fabrica_de_queso.title")}
      description={t("tour.fabrica_de_queso.description")}
      directions={t("tour.fabrica_de_queso.directions")}
      audioPathKey="fabrica_de_queso"
      image={require('../../../assets/images/FabricaDeQueso.jpg')}
      prev={'/(drawer)/tourStops/CPA' as RelativePathString}
      next={'/(drawer)/tourStops/CPV' as RelativePathString}
    />
  );
}
