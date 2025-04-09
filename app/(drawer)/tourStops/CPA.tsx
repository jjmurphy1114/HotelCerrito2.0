import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.CPA.title"),
      t("tour.CPA.description"), 
      'CPA',
      require('../../../assets/images/CPA.jpg'),
      '/(drawer)/tourStops/Comedor' as RelativePathString,
      "/(drawer)/tourStops/FabricaDeQueso" as RelativePathString
    )
  );
}
