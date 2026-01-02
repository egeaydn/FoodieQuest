/**
 * CustomMarker Component
 * Harita üzerinde görünen özel yemek pin'leri
 * - Dairesel yemek fotoğrafı
 * - Glow efekti (featured için)
 * - Haptic feedback
 */

import * as Haptics from 'expo-haptics';
import React, { useEffect } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { Colors } from '../constants/Colors';
import { HeroDish } from '../types';

interface CustomMarkerProps {
  dish: HeroDish;
  onPress: (dish: HeroDish) => void;
  isSelected?: boolean;
}

export const CustomMarker: React.FC<CustomMarkerProps> = ({
  dish,
  onPress,
  isSelected = false,
}) => {
  const scale = useSharedValue(1);
  const glowOpacity = useSharedValue(0.5);

  // Featured yemekler için glow animasyonu
  useEffect(() => {
    if (dish.isFeatured) {
      glowOpacity.value = withRepeat(
        withTiming(1, {
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
        }),
        -1,
        true
      );
    }
  }, [dish.isFeatured]);

  // Seçili pin büyütme animasyonu
  useEffect(() => {
    scale.value = withSpring(isSelected ? 1.3 : 1, {
      damping: 10,
      stiffness: 100,
    });
  }, [isSelected]);

  const animatedContainerStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const animatedGlowStyle = useAnimatedStyle(() => ({
    opacity: glowOpacity.value,
  }));

  const handlePress = () => {
    // Haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    
    // Kısa scale animasyonu
    scale.value = withSpring(0.9, { damping: 10 }, () => {
      scale.value = withSpring(isSelected ? 1.3 : 1);
    });
    
    onPress(dish);
  };

  return (
    <Pressable onPress={handlePress}>
      <Animated.View style={[styles.container, animatedContainerStyle]}>
        {/* Glow Efekti (Featured için) */}
        {dish.isFeatured && (
          <Animated.View style={[styles.glow, animatedGlowStyle]} />
        )}

        {/* Pin Çerçevesi */}
        <View
          style={[
            styles.markerBorder,
            {
              borderColor: dish.isFeatured
                ? Colors.marker.featuredBorder
                : Colors.marker.normalBorder,
              borderWidth: dish.isFeatured ? 3 : 2,
            },
          ]}
        >
          {/* Yemek Fotoğrafı */}
          <Image
            source={{ uri: dish.imageUrl }}
            style={styles.markerImage}
            resizeMode="cover"
          />
        </View>

        {/* Featured Badge (Opsiyonel) */}
        {dish.isFeatured && (
          <View style={styles.featuredBadge}>
            <View style={styles.starIcon} />
          </View>
        )}
      </Animated.View>
    </Pressable>
  );
};

const MARKER_SIZE = 50;
const GLOW_SIZE = 70;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    position: 'absolute',
    width: GLOW_SIZE,
    height: GLOW_SIZE,
    borderRadius: GLOW_SIZE / 2,
    backgroundColor: Colors.marker.glowColor,
    shadowColor: Colors.accent.gold,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    elevation: 10,
  },
  markerBorder: {
    width: MARKER_SIZE,
    height: MARKER_SIZE,
    borderRadius: MARKER_SIZE / 2,
    overflow: 'hidden',
    backgroundColor: Colors.background.secondary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  markerImage: {
    width: '100%',
    height: '100%',
  },
  featuredBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.accent.gold,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: Colors.background.primary,
  },
  starIcon: {
    width: 8,
    height: 8,
    backgroundColor: Colors.background.primary,
    transform: [{ rotate: '45deg' }],
  },
});
