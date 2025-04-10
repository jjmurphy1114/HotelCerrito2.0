import { Audio } from 'expo-av';
import { useRef, useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

export default function AudioPlayer({ source }: { source: any }) {
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    let isMounted = true;

    const prepareAudio = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: false,
          playsInSilentModeIOS: true,
        });

        if (soundRef.current) {
          await soundRef.current.unloadAsync();
          soundRef.current.setOnPlaybackStatusUpdate(null);
          soundRef.current = null;
        }

        const { sound, status } = await Audio.Sound.createAsync(
          source,
          { shouldPlay: false },
          (status) => {
            if (!isMounted) return;

            if (status.isLoaded) {
              setIsPlaying(status.isPlaying);
              setIsLoaded(true);

              if (status.didJustFinish) {
                setIsPlaying(false);
              }
            } else {
              console.warn('Audio not loaded:', status);
              setIsLoaded(false);
            }
          }
        );

        soundRef.current = sound;
      } catch (error) {
        console.error('Failed to load audio', error);
      }
    };

    prepareAudio();

    return () => {
      isMounted = false;
      if (soundRef.current) {
        soundRef.current.unloadAsync();
        soundRef.current.setOnPlaybackStatusUpdate(null);
      }
    };
  }, [source]);

  const togglePlayPause = async () => {
    if (!soundRef.current || !isLoaded) return;

    const status = await soundRef.current.getStatusAsync();
    if (!status.isLoaded) return;

    if (status.isPlaying) {
      await soundRef.current.pauseAsync();
      setIsPlaying(false);
    } else {
      await soundRef.current.playAsync();
      setIsPlaying(true);
    }
  };

  const skip = async (ms: number) => {
    if (!soundRef.current || !isLoaded) return;

    const status = await soundRef.current.getStatusAsync();
    if (status.isLoaded) {
      let newPos = status.positionMillis + ms;
      newPos = Math.max(0, newPos);
      newPos = Math.min(newPos, status.durationMillis ?? Infinity);
      await soundRef.current.setPositionAsync(newPos);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant="labelLarge">{t('tour.audio_player')}</Text>

      <View style={styles.controls}>
        <IconButton icon="rewind-10" onPress={() => skip(-10000)} disabled={!isLoaded} />
        <IconButton
          icon={isPlaying ? 'pause' : 'play'}
          onPress={togglePlayPause}
          disabled={!isLoaded}
        />
        <IconButton icon="fast-forward-10" onPress={() => skip(10000)} disabled={!isLoaded} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 16 },
  controls: { flexDirection: 'row', alignItems: 'center' },
});
