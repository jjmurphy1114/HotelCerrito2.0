import { RelativePathString } from "expo-router";

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
      titleKey: 'tour.planta_lactea.title',
      route: '/(drawer)/tourStops/PlantaLactea' as RelativePathString,
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