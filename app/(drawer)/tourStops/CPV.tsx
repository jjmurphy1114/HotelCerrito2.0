import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.CPV.title"),
      t("tour.CPV.description"), 
      "N/A",
      'CPV',
      require('../../../assets/images/CPV.jpg'),
      '/(drawer)/tourStops/FabricaDeQueso' as RelativePathString,
      "/(drawer)/tourStops/Piscina" as RelativePathString
    )
  );
}
