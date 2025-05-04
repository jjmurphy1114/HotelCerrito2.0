import { Audio } from 'expo-av';
import { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';

// Global variables to track current audio
let currentGlobalSound: Audio.Sound | null = null;
let currentGlobalSource: string | null = null;
let isStopping = false;
let latestSetupId = 0;

export default function AudioPlayer({ source, shouldPlay = true }: { source: any, shouldPlay?: boolean }) {
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();

  const { height } = Dimensions.get('window');
  const isSmallDevice = height < 700;

  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: isSmallDevice ? 8 : 12,
    },
    controls: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  const stopAllAudio = async () => {
    if (isStopping) return;
    isStopping = true;
    try {
      if (currentGlobalSound) {
        const status = await currentGlobalSound.getStatusAsync();
        if (status.isLoaded) {
          await currentGlobalSound.stopAsync();
          await currentGlobalSound.unloadAsync();
        }
        currentGlobalSound.setOnPlaybackStatusUpdate(null);
      }
    } catch (e) {
      console.warn("Failed to stop/unload audio:", e);
    } finally {
      currentGlobalSound = null;
      currentGlobalSource = null;
      isStopping = false;
    }
  };

  useFocusEffect(
    useCallback(() => {
      let isMounted = true;
      const currentSetup = ++latestSetupId;

      const prepareAudio = async () => {
        try {
          await Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            staysActiveInBackground: false,
            playsInSilentModeIOS: true,
          });

          if (currentGlobalSource !== source?.uri) {
            await stopAllAudio();
          }

          const { sound, status } = await Audio.Sound.createAsync(
            source,
            { shouldPlay: false } // manual control
          );

          // Abort if a newer setup is running or component unmounted
          if (latestSetupId !== currentSetup || !isMounted) {
            await sound.unloadAsync();
            return;
          }

          soundRef.current = sound;
          currentGlobalSound = sound;
          currentGlobalSource = source?.uri;
          setIsLoaded(status.isLoaded);
          setIsPlaying(false);

          sound.setOnPlaybackStatusUpdate((status) => {
            if (!isMounted) return;
            if (status.isLoaded) {
              setIsPlaying(status.isPlaying);
              if (status.didJustFinish) {
                setIsPlaying(false);
              }
            } else {
              setIsLoaded(false);
            }
          });

          if (shouldPlay) {
            await sound.playAsync();
            setIsPlaying(true);
          }

        } catch (error) {
          console.error('Failed to load/play audio:', error);
        }
      };

      prepareAudio();

      return () => {
        isMounted = false;
        stopAllAudio();
        setIsPlaying(false);
        setIsLoaded(false);
      };
    }, [source?.uri])
  );

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
      <View style={styles.controls}>
        <IconButton icon="rewind-10" onPress={() => skip(-10000)} disabled={!isLoaded} size={isSmallDevice ? 18 : 24} />
        <IconButton icon={isPlaying ? 'pause' : 'play'} onPress={togglePlayPause} disabled={!isLoaded} size={isSmallDevice ? 20 : 28} />
        <IconButton icon="fast-forward-10" onPress={() => skip(10000)} disabled={!isLoaded} size={isSmallDevice ? 18 : 24} />
      </View>
    </View>
  );
}
