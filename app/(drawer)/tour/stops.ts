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
];
  
export default tourStops;