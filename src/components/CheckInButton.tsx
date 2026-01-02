/**
 * CheckInButton Component
 * GPS bazlı konum doğrulama ve check-in işlemi
 */

import * as Haptics from 'expo-haptics';
import * as Location from 'expo-location';
import { MapPin } from 'lucide-react-native';
import React, { useState } from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSequence,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import { Colors } from '../constants/Colors';
import { HeroDish } from '../types';

interface CheckInButtonProps {
  dish: HeroDish;
  onCheckInSuccess: (dish: HeroDish) => void;
}

const CHECK_IN_RADIUS = 100; // 100 metre yarıçap

// Haversine formülü - İki GPS koordinatı arasındaki mesafeyi hesapla
const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number => {
  const R = 6371e3; // Dünya'nın yarıçapı (metre)
  const φ1 = (lat1 * Math.PI) / 180;
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Metre cinsinden mesafe
};

export const CheckInButton: React.FC<CheckInButtonProps> = ({
  dish,
  onCheckInSuccess,
}) => {
  const [isChecking, setIsChecking] = useState(false);
  const [message, setMessage] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState(false);

  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  const handleCheckIn = async () => {
    setIsChecking(true);
    setMessage('');
    setIsSuccess(false);

    try {
      // Konum iznini kontrol et
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setMessage('❌ Konum izni gerekli');
        setIsChecking(false);
        return;
      }

      // Mevcut konumu al
      const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const { latitude, longitude } = location.coords;

      // Mesafeyi hesapla
      const distance = calculateDistance(
        latitude,
        longitude,
        dish.location.latitude,
        dish.location.longitude
      );

      console.log(`📍 Mesafe: ${distance.toFixed(0)} metre`);

      if (distance <= CHECK_IN_RADIUS) {
        // Başarılı check-in!
        setIsSuccess(true);
        setMessage(`🎉 Hazineyi Buldun! (+${dish.isFeatured ? 20 : 10} puan)`);
        
        // Haptic feedback
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

        // Başarı animasyonu
        scale.value = withSequence(
          withSpring(1.2, { damping: 10 }),
          withSpring(1)
        );
        
        rotate.value = withRepeat(
          withTiming(360, { duration: 500, easing: Easing.linear }),
          2,
          false
        );

        // Callback
        setTimeout(() => {
          onCheckInSuccess(dish);
        }, 1500);
      } else {
        // Çok uzak
        setMessage(`📏 Çok uzaksın! (${distance.toFixed(0)}m)`);
        Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
        
        // Titreşim animasyonu
        scale.value = withSequence(
          withTiming(1.05, { duration: 100 }),
          withTiming(0.95, { duration: 100 }),
          withTiming(1.05, { duration: 100 }),
          withTiming(1, { duration: 100 })
        );
      }
    } catch (error) {
      console.error('Check-in error:', error);
      setMessage('❌ Konum alınamadı');
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    } finally {
      setIsChecking(false);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { rotate: `${rotate.value}deg` }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={animatedStyle}>
        <Pressable
          style={[
            styles.button,
            isSuccess && styles.buttonSuccess,
            isChecking && styles.buttonDisabled,
          ]}
          onPress={handleCheckIn}
          disabled={isChecking || isSuccess}
        >
          {isChecking ? (
            <ActivityIndicator color={Colors.background.primary} size="small" />
          ) : (
            <>
              <MapPin color={Colors.background.primary} size={20} />
              <Text style={styles.buttonText}>
                {isSuccess ? 'Check-in Başarılı!' : 'Check-in Yap'}
              </Text>
            </>
          )}
        </Pressable>
      </Animated.View>

      {message && (
        <Text
          style={[
            styles.message,
            isSuccess ? styles.messageSuccess : styles.messageError,
          ]}
        >
          {message}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent.coral,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 12,
    gap: 8,
    shadowColor: Colors.accent.coral,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  buttonSuccess: {
    backgroundColor: Colors.semantic.success,
    shadowColor: Colors.semantic.success,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: Colors.background.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  message: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  messageSuccess: {
    color: Colors.semantic.success,
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
  },
  messageError: {
    color: Colors.semantic.error,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
  },
});
