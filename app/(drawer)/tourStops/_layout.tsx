import { Slot } from 'expo-router';
import { useRouter, usePathname } from 'expo-router';
import { Button, useTheme, Text, Portal, Modal } from 'react-native-paper';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import tourStops from '../tour/stops';
import { useState } from 'react';
import { Image } from 'expo-image';
import { Dimensions } from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';

export default function TourLayout() {
  const router = useRouter();
  const pathname = usePathname();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const [mapVisible, setMapVisible] = useState(false);

  // Grab the last part of the route (e.g., 'MapaCentral')
  const stopName = pathname.split('/').pop();

  // Find current index in tourStops
  const currentIndex = tourStops.findIndex((stop) =>
    stop.route.endsWith(`/${stopName}`)
  );

  // Current and next stop
  const currentStop = tourStops[currentIndex];
  const nextStop = tourStops[currentIndex + 1]; 

  const { width, height } = Dimensions.get('window');

  return (
    <View style={{ flex: 1 }}>
    <View
      style={{
        height: 40,
        backgroundColor: colors.secondary,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >

      <View style={{ flexDirection: 'row', gap: 8 }}>
          <Button compact onPress={() => setMapVisible(true)}
                  icon={"map"}
            >
            {t('tour.map.open')}
          </Button>
      </View>

      {/* <Text style={{ fontSize: 18 }}>{translatedTitle}</Text> */}

      <Button onPress={() => router.push('/(drawer)/tour')} compact>
        {t("tour.view_stops.title")}
      </Button>
      
    </View>

    <Slot />

    {/* Map Modal */}
    <Portal>
        <Modal
        visible={mapVisible}
        onDismiss={() => setMapVisible(false)}
        contentContainerStyle={{
          alignSelf: 'center',
          backgroundColor: 'white',
          borderRadius: 12,
          padding: 10,
          width: width * 0.95, // modal width (adjustable)
          height: height * 0.8, // modal height (adjustable)
        }}
      >
        <Text style={{ fontSize: 16, marginBottom: 8, textAlign: 'center' }}>
          {t('tour.map.path')} {t(currentStop?.titleKey || '')} → {t(nextStop?.titleKey || '')}
        </Text>
        <ImageZoom
          cropWidth={width * 0.9}
          cropHeight={height * 0.5}
          imageWidth={width * 0.9}
          imageHeight={height * 0.7}
        >
          <View style={{ width: width * 0.9, height: height * 0.6 }}>
            <Image
              source={require('../../../assets/images/MapaCentral.jpg')}
              style={{ width: '100%', height: '100%' }}
              contentFit="contain"
            />
            {/* Optional path overlay image */}
            {/* <Image
              source={require('../../../assets/images/path-1-2.png')}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              contentFit="contain"
            /> */}
          </View>
        </ImageZoom>

        <Button
          mode="contained"
          onPress={() => setMapVisible(false)}
          style={{ marginTop: 10 }}
        >
          {t('tour.map.close')}
        </Button>
      </Modal>
      </Portal>
  </View>
  );
}
