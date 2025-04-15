import { RelativePathString } from "expo-router";
import { useTranslation } from "react-i18next";

// Array of stops. Add stops here in order to change the order of the tour
const tourStops = [
  {
      titleKey: "tour.start",
      route: '/(drawer)/tour' as RelativePathString,
      number: 0 //Not actually a stop
  }, 
  {
      titleKey: 'tour.mapa_central.title',
      route: '/(drawer)/tourStops/MapaCentral' as RelativePathString,
      number: 1,
    },
    {
      titleKey: 'tour.cancha.title',
      route: '/(drawer)/tourStops/Cancha' as RelativePathString,
      number: 2,
    },
    {
      titleKey: 'tour.sector_academico.title',
      route: '/(drawer)/tourStops/SectorAcademico' as RelativePathString,
      number: 3,
    },
    {
      titleKey: 'tour.capilla.title',
      route: '/(drawer)/tourStops/Capilla' as RelativePathString,
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
    {
      titleKey: 'tour.end.title',
      route: '/(drawer)/tourStops/EndScreen' as RelativePathString,
      number: 12 //Not actually a stop
    }
];
  
export default tourStops;

// 🔊 Audio file map for each stop per language
export const descriptionsAudioMap: Record<string, Record<string, any>> = {
  en: {
    start: require('../../../assets/audio/en/descriptions/start_screen.mp3'),
    mapa_central: require('../../../assets/audio/en/descriptions/central_map.mp3'),
    capilla: require('../../../assets/audio/en/descriptions/chapel.mp3'),
    cancha: require('../../../assets/audio/en/descriptions/fields.mp3'),
    sector_academico: require('../../../assets/audio/en/descriptions/academic_sector.mp3'),
    patio_central: require('../../../assets/audio/en/descriptions/central_patio.mp3'),
    comedor: require('../../../assets/audio/en/descriptions/restaurant.mp3'),
    CPA: require('../../../assets/audio/en/descriptions/cpa.mp3'),
    fabrica_de_queso: require('../../../assets/audio/en/descriptions/cheese_factory.mp3'),
    CPV: require('../../../assets/audio/en/descriptions/cpv.mp3'),
    piscina: require('../../../assets/audio/en/descriptions/pool.mp3'),
    hotel: require('../../../assets/audio/en/descriptions/hotel.mp3'),
    endScreen: require('../../../assets/audio/en/descriptions/end.mp3'),
  },
  es: {
    start: require('../../../assets/audio/es/descriptions/start_screen.mp3'),
    mapa_central: require('../../../assets/audio/es/descriptions/mapa_central.mp3'),
    capilla: require('../../../assets/audio/es/descriptions/capilla.mp3'),
    cancha: require('../../../assets/audio/es/descriptions/cancha.mp3'),
    sector_academico: require('../../../assets/audio/es/descriptions/sector_academico.mp3'),
    patio_central: require('../../../assets/audio/es/descriptions/patio_central.mp3'),
    comedor: require('../../../assets/audio/es/descriptions/comedor.mp3'),
    CPA: require('../../../assets/audio/es/descriptions/cpa.mp3'),
    fabrica_de_queso: require('../../../assets/audio/es/descriptions/fabrica_de_queso.mp3'),
    CPV: require('../../../assets/audio/es/descriptions/cpv.mp3'),
    piscina: require('../../../assets/audio/es/descriptions/piscina.mp3'),
    hotel: require('../../../assets/audio/es/descriptions/hotel.mp3'),
    endScreen: require('../../../assets/audio/es/descriptions/end_screen.mp3')
  }
};

export const directionsAudioMap: Record<string, Record<string, any>> = {
  en: {
    // start: require('../../../assets/audio/en/directions/central_map.mp3'),
    mapa_central: require('../../../assets/audio/en/directions/1-2.mp3'),
    cancha: require('../../../assets/audio/en/directions/2-3.mp3'),
    sector_academico: require('../../../assets/audio/en/directions/3-4.mp3'),
    capilla: require('../../../assets/audio/en/directions/4-5.mp3'),
    patio_central: require('../../../assets/audio/en/directions/5-6.mp3'),
    comedor: require('../../../assets/audio/en/directions/6-7.mp3'),
    CPA: require('../../../assets/audio/en/directions/7-8.mp3'),
    fabrica_de_queso: require('../../../assets/audio/en/directions/8-9.mp3'),
    CPV: require('../../../assets/audio/en/directions/9-10.mp3'),
    piscina: require('../../../assets/audio/en/directions/10-11.mp3'),
    hotel: require('../../../assets/audio/en/directions/end.mp3'),
    // endScreen: require('../../../assets/audio/en/directions/central_map.mp3'),
  },
  es: {
    // start: require('../../../assets/audio/es/directions/mapa_central.mp3'),
    mapa_central: require('../../../assets/audio/es/directions/1-2.mp3'),
    cancha: require('../../../assets/audio/es/directions/2-3.mp3'),
    sector_academico: require('../../../assets/audio/es/directions/3-4.mp3'),
    capilla: require('../../../assets/audio/es/directions/4-5.mp3'),
    patio_central: require('../../../assets/audio/es/directions/5-6.mp3'),
    comedor: require('../../../assets/audio/es/directions/6-7.mp3'),
    CPA: require('../../../assets/audio/es/directions/7-8.mp3'),
    fabrica_de_queso: require('../../../assets/audio/es/directions/8-9.mp3'),
    CPV: require('../../../assets/audio/es/directions/9-10.mp3'),
    piscina: require('../../../assets/audio/es/directions/10-11.mp3'),
    hotel: require('../../../assets/audio/es/directions/end.mp3'),
    // endScreen: require('../../../assets/audio/es/directions/end_screen.mp3')
  }
};

export function getAudio(stop: string, arrayName: string){
  // arrayName must be "descriptions" or "directions"
  const {i18n} = useTranslation();
  const language = i18n.language;
  if (arrayName === "descriptions") {
    return descriptionsAudioMap[language][stop];
  } else if (arrayName === "directions"){
      return directionsAudioMap[language][stop];
  } else {
    return null;
  }
}