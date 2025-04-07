import { Audio } from 'expo-av';
import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View, StyleSheet } from 'react-native';
import { Button, IconButton, Text } from 'react-native-paper';

export default function AudioPlayer({ source }: { source: any }) {
  const soundRef = useRef<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState<number>(0);
  const { t } = useTranslation();

  useEffect(() => {
    
    const loadAndPlay = async () => {
        if (soundRef.current) {
          await soundRef.current.unloadAsync();
        }
    
        const { sound } = await Audio.Sound.createAsync(source, { shouldPlay: false });
        soundRef.current = sound;
    
        // Keep position updated
        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded) {
              setPosition(status.positionMillis);
              setIsPlaying(status.isPlaying);
            }
          });      
      };
    
    loadAndPlay();
    
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, [source]);

  const togglePlayPause = async () => {
    if (!soundRef.current) return;
    const status = await soundRef.current.getStatusAsync();
  
    if (status.isLoaded) {
      if (status.isPlaying) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
      } else {
        await soundRef.current.playAsync();
        setIsPlaying(true);
      }
    }
  };  

  const skip = async (ms: number) => {
    if (!soundRef.current) return;
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
      <Text variant="labelLarge">{t("tour.audio_player")}</Text>

      <View style={styles.controls}>
        <IconButton icon="rewind-10" onPress={() => skip(-10000)} />
        <IconButton icon={isPlaying ? 'pause' : 'play'} onPress={togglePlayPause} />
        <IconButton icon="fast-forward-10" onPress={() => skip(10000)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 16 },
  controls: { flexDirection: 'row', alignItems: 'center' },
});
