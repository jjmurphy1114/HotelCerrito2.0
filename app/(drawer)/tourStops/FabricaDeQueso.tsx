import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.fabrica_de_queso.title"),
      t("tour.fabrica_de_queso.description"), 
      'fabrica_de_queso',
      require('../../../assets/images/FabricaDeQueso.jpg'),
      '/(drawer)/tourStops/CPA' as RelativePathString,
      "/(drawer)/tourStops/CPV" as RelativePathString
    )
  );
}
