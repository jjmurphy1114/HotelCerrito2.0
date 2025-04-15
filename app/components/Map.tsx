import ImageZoom from "react-native-image-pan-zoom"
import { Image } from "expo-image"
import { Dimensions, View, Platform } from "react-native"
import { usePathname } from "expo-router";
import tourStops from "../(drawer)/tour/stops";
import { Text } from "react-native-paper";
import { useTranslation } from "react-i18next";

interface MapComponentProps {
    percentWidth?: number;
    percentHeight?: number;
    percentCropWidth?: number;
    percentCropHeight?: number;
    showPath?: boolean;
    hideOverlay?: boolean;
}


export default function MapComponent({percentWidth = .9, percentHeight = .4, percentCropWidth = .9, percentCropHeight = .4, showPath=true, hideOverlay=false}: MapComponentProps) {
    
    const { t } = useTranslation();

    const pathname = usePathname();

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

    const displayWidth = width * percentWidth;
    const displayHeight = height * percentHeight;
    const cropWidth = width * percentCropWidth;
    const cropHeight = height * percentCropHeight;

    // Logic for getting path image
    const pathImages: { [key: string]: any } = {
    '1-2': require('../../assets/images/paths/1-2.png'),
    '2-3': require('../../assets/images/paths/2-3.png'),
    '3-4': require('../../assets/images/paths/3-4.png'),
    '4-5': require('../../assets/images/paths/4-5.png'),
    '5-6': require('../../assets/images/paths/5-6.png'),
    '6-7': require('../../assets/images/paths/6-7.png'),
    '7-8': require('../../assets/images/paths/7-8.png'),
    '8-9': require('../../assets/images/paths/8-9.png'),
    '9-10': require('../../assets/images/paths/9-10.png'),
    '10-11': require('../../assets/images/paths/10-11.png')
    };

    // We used 0 based indexing for the path images
    const pathKey = `${currentIndex }-${currentIndex + 1}`;
    const pathImage = pathImages[pathKey];
    
    return (
    <View style={{ alignItems: 'center', justifyContent: 'center', padding: 10 }}>
        {showPath && (
        <Text style={{ fontSize: 16, marginBottom: 8, textAlign: 'center', fontFamily: Platform.select({
                    android: 'Inter_900Black',
                    ios: 'Inter-Black',
                  }), }}>
          {t('tour.map.path')} {t(currentStop?.titleKey || '')} → {t(nextStop?.titleKey || '')}
        </Text>
        )}
        {/* @ts-ignore */}
        <ImageZoom
        cropWidth={cropWidth}
        cropHeight={cropHeight}
        imageWidth={displayWidth}
        imageHeight={displayHeight}
        >
        
        <View style={{ width: displayWidth, height: displayHeight }}>
        <Image
            source={require('../../assets/images/MapaCentral.jpg')}
            style={{ width: '100%', height: '100%' }}
            contentFit="contain"
        />
        {/* Path overlay image */}
        {pathImage && !hideOverlay &&
            <Image
                source={pathImage}
                style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 999
                }}
                contentFit="contain"
            />
        }
        </View>
    </ImageZoom>
    </View>
    ) 
}