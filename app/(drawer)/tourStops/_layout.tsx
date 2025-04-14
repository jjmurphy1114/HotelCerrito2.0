import { Slot } from 'expo-router';
import { useRouter, usePathname } from 'expo-router';
import { Button, useTheme, Text, Portal, Modal } from 'react-native-paper';
import { View, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';

export default function TourLayout() {
  const router = useRouter();
  const { t } = useTranslation();
  const { colors } = useTheme();
  const currentPathname = usePathname();

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

      {/* <View style={{ flexDirection: 'row', gap: 8 }}>
          <Button compact onPress={() => setMapVisible(true)}
                  icon={"map"}
            >
            {t('tour.map.open')}
          </Button>
      </View> */}

      <Button 
        labelStyle={{
            fontFamily: Platform.select({
              android: 'Inter_500Medium',
              ios: 'Inter-Medium',
            }),
            fontSize: 16, // optional
            textDecorationLine: 'underline'
          }}
          onPress={() => router.replace({ pathname: '/(drawer)/tour', params: { from: currentPathname } })}
        compact>
        {t("tour.view_stops.title")}
      </Button>
      
    </View>

    <Slot />

    {/* Map Modal
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
        <MapComponent percentWidth={.9} percentHeight={.5} percentCropWidth={.9} percentCropHeight={.5} />
        <Button
          mode="contained"
          onPress={() => setMapVisible(false)}
          style={{ marginTop: 10 }}
          labelStyle={{
            fontFamily: Platform.select({
              android: 'Inter_500Medium',
              ios: 'Inter-Medium',
            }),
            fontSize: 16, // optional
          }}
        >
          {t('tour.map.close')}
        </Button>
      </Modal>
      </Portal> */}
  </View>
  );
}
