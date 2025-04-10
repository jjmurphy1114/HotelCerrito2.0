import StopTemplate from '../tour/StopTemplate';
import { RelativePathString } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Capilla() {  
  
  const { t } = useTranslation();
  
  return (
    StopTemplate(t("tour.comedor.title"),
      t("tour.comedor.description"), 
      'comedor',
      require('../../../assets/images/Comedor.jpg'),
      '/(drawer)/tourStops/PatioCentral' as RelativePathString,
      "/(drawer)/tourStops/CPA" as RelativePathString
    )
  );
}
