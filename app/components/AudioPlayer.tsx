import { Audio, InterruptionModeAndroid, InterruptionModeIOS } from 'expo-av';
import { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import { useIsFocused } from '@react-navigation/native';

type AudioPlayerProps = {
  source: number;            // the return value of require('…mp3')
  shouldPlay?: boolean;
};

export default function AudioPlayer({
  source,
  shouldPlay = true,
}: AudioPlayerProps) {
  const isFocused = useIsFocused();
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let mounted = true;
    let mySound: Audio.Sound | null = null;

    // console.log("🎧 AudioPlayer source:", source, "focused?", isFocused);

    if (isFocused) {
      (async () => {
        // 1) Configure audio mode
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          staysActiveInBackground: false,
          playsInSilentModeIOS: true,
          interruptionModeIOS:    InterruptionModeIOS.DoNotMix,
          interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
          shouldDuckAndroid: true,
          playThroughEarpieceAndroid: false,
        });

        // 2) Create & load the sound using the module ID
        const { sound } = await Audio.Sound.createAsync(
          source,
          { shouldPlay: false }
        );
        if (!mounted) {
          await sound.unloadAsync();
          return;
        }
        mySound = sound;
        soundRef.current = sound;
        setIsLoaded(true);

        sound.setOnPlaybackStatusUpdate((status) => {
          if (!mounted) return;
          if (status.isLoaded) {
            setIsPlaying(status.isPlaying);
            if (status.didJustFinish) setIsPlaying(false);
          }
        });

        // 3) Optionally auto-play
        if (shouldPlay) {
          await sound.playAsync();
        }
      })();
    }

    return () => {
      mounted = false;
      if (mySound) {
        mySound
          .stopAsync()
          .catch(() => {})
          .then(() => mySound!.unloadAsync().catch(() => {}));
      }
      setIsLoaded(false);
      setIsPlaying(false);
    };
  }, [isFocused, source, shouldPlay]);

  const toggle = async () => {
    const s = soundRef.current;
    if (!s || !isLoaded) return;
    const status = await s.getStatusAsync();
    if (status.isLoaded) {
      status.isPlaying ? await s.pauseAsync() : await s.playAsync();
    }
  };

  const skip = async (ms: number) => {
    const s = soundRef.current;
    if (!s || !isLoaded) return;
    const status = await s.getStatusAsync();
    if (status.isLoaded && status.positionMillis !== undefined && status.durationMillis !== undefined) {
      const newPos = Math.min(Math.max(0, status.positionMillis + ms), status.durationMillis);
      await s.setPositionAsync(newPos);
    }
  };


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

  return (
    <View style={styles.container}>
      <View style={styles.controls}>
        <IconButton
          icon="rewind-10"
          onPress={() => skip(-10000)}
          disabled={!isLoaded}
          size={isSmallDevice ? 18 : 24}
        />
        <IconButton
          icon={isPlaying ? "pause" : "play"}
          onPress={toggle}
          disabled={!isLoaded}
          size={isSmallDevice ? 20 : 28}
        />
        <IconButton
          icon="fast-forward-10"
          onPress={() => skip(10000)}
          disabled={!isLoaded}
          size={isSmallDevice ? 18 : 24}
        />
      </View>
    </View>
  );
}
