import React, { useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import { Dimensions, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';


type ImageCarouselProps = {
  images: any[];
  heightOverride?: number;
};

export default function ImageCarousel({ images, heightOverride }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { width, height } = Dimensions.get('window');
  const isSmallDevice = height < 700;
  
  const carouselHeight = heightOverride 
    ? heightOverride * height
    : isSmallDevice 
      ? height * 0.22 
      : height * 0.27;

  return (
    <View>
      <Carousel
        width={width}
        height={carouselHeight}
        data={images}
        autoPlay
        autoPlayInterval={3000}
        loop
        scrollAnimationDuration={600}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <Image
            source={item}
            style={{ width: '100%', height: '100%' }}
            contentFit="cover"
          />
        )}
      />

      {/* Pagination Dots
      <View style={styles.paginationContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : {},
            ]}
          />
        ))}
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#333',
  },
});
