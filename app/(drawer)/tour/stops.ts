import { RelativePathString } from "expo-router";
import { useTranslation } from "react-i18next";

// Array of stops. Add stops here in order to change the order of the tour
const tourStops = [
    {
      titleKey: 'tour.mapa_central.title',
      route: '/(drawer)/tourStops/MapaCentral' as RelativePathString,
      number: 1,
    },
    {
      titleKey: 'tour.capilla.title',
      route: '/(drawer)/tourStops/Capilla' as RelativePathString,
      number: 2,
    },
    {
      titleKey: 'tour.cancha.title',
      route: '/(drawer)/tourStops/Cancha' as RelativePathString,
      number: 3,
    },
    {
      titleKey: 'tour.sector_academico.title',
      route: '/(drawer)/tourStops/SectorAcademico' as RelativePathString,
      number: 4,
    },
    {
      titleKey: 'tour.patio_central.title',
      route: '/(drawer)/tourStops/PatioCentral' as RelativePathString,
      number: 5,
    },
    {
      titleKey: 'tour.comedor.title',
      route: '/(drawer)/tourStops/Comedor' as RelativePathString,
      number: 6,
    },
    {
      titleKey: 'tour.CPA.title',
      route: '/(drawer)/tourStops/CPA' as RelativePathString,
      number: 7,
    },
    {
      titleKey: 'tour.fabrica_de_queso.title',
      route: '/(drawer)/tourStops/FabricaDeQueso' as RelativePathString,
      number: 8,
    },
    {
      titleKey: 'tour.CPV.title',
      route: '/(drawer)/tourStops/CPV' as RelativePathString,
      number: 9,
    },
    {
      titleKey: 'tour.piscina.title',
      route: '/(drawer)/tourStops/Piscina' as RelativePathString,
      number: 10,
    },
    {
      titleKey: 'tour.hotel.title',
      route: '/(drawer)/tourStops/Hotel' as RelativePathString,
      number: 11,
    },
];
  
export default tourStops;

// 🔊 Audio file map for each stop per language
export const audioMap: Record<string, Record<string, any>> = {
  en: {
    // For now making these all Amalio as a placeholder
    mapa_central: require('../../../assets/audio/en/mapa_central.mp3'),
    capilla: require('../../../assets/audio/en/mapa_central.mp3'),
    cancha: require('../../../assets/audio/en/mapa_central.mp3'),
    sector_academico: require('../../../assets/audio/en/mapa_central.mp3'),
    patio_central: require('../../../assets/audio/en/mapa_central.mp3'),
    comedor: require('../../../assets/audio/en/mapa_central.mp3'),
    CPA: require('../../../assets/audio/en/mapa_central.mp3'),
    fabrica_de_queso: require('../../../assets/audio/en/mapa_central.mp3'),
    CPV: require('../../../assets/audio/en/mapa_central.mp3'),
    piscina: require('../../../assets/audio/en/mapa_central.mp3'),
    hotel: require('../../../assets/audio/en/mapa_central.mp3'),
  },
  es: {
    mapa_central: require('../../../assets/audio/es/mapa_central.mp3'),
    capilla: require('../../../assets/audio/es/mapa_central.mp3'),
    cancha: require('../../../assets/audio/es/cancha.mp3'),
    sector_academico: require('../../../assets/audio/es/mapa_central.mp3'),
    patio_central: require('../../../assets/audio/es/patio_central.mp3'),
    comedor: require('../../../assets/audio/es/comedor.mp3'),
    CPA: require('../../../assets/audio/es/cpa.mp3'),
    fabrica_de_queso: require('../../../assets/audio/es/mapa_central.mp3'),
    CPV: require('../../../assets/audio/es/cpv.mp3'),
    piscina: require('../../../assets/audio/es/mapa_central.mp3'),
    hotel: require('../../../assets/audio/es/mapa_central.mp3'),
  }
};

export function getAudio(stop: string){
  const {i18n} = useTranslation();
  const language = i18n.language;
  
  return audioMap[language][stop];
}