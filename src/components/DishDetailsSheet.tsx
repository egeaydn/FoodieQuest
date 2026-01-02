/**
 * DishDetailsSheet Component
 * Yemek detaylarını gösteren alttan açılan interaktif panel
 * @gorhom/bottom-sheet kullanıyor
 */

import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import * as Haptics from 'expo-haptics';
import { Clock, MapPin, Navigation, Phone, Star } from 'lucide-react-native';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
    Image,
    Linking,
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Colors } from '../constants/Colors';
import { HeroDish } from '../types';
import { CheckInButton } from './CheckInButton';

interface DishDetailsSheetProps {
  dish: HeroDish | null;
  onClose: () => void;
}

export const DishDetailsSheet: React.FC<DishDetailsSheetProps> = ({
  dish,
  onClose,
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [hasCheckedIn, setHasCheckedIn] = useState(false);

  // Snap noktaları: kapalı, özet (40%), tam detay (90%)
  const snapPoints = useMemo(() => ['40%', '90%'], []);

  const handleCheckInSuccess = useCallback((dish: HeroDish) => {
    setHasCheckedIn(true);
    console.log('✅ Check-in başarılı:', dish.name);
    // TODO: Burada puan sistemini entegre edebiliriz
  }, []);

  const handleNavigate = useCallback(() => {
    if (!dish) return;
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    // Google Maps navigasyon
    const url = `https://www.google.com/maps/dir/?api=1&destination=${dish.location.latitude},${dish.location.longitude}`;
    Linking.openURL(url);
  }, [dish]);

  const handleCall = useCallback(() => {
    if (!dish?.restaurant.phone) return;
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    Linking.openURL(`tel:${dish.restaurant.phone}`);
  }, [dish]);

  // Backdrop (arka plan kararması)
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={0.5}
        pressBehavior="close"
      />
    ),
    []
  );

  if (!dish) return null;

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      enablePanDownToClose
      onClose={onClose}
      backdropComponent={renderBackdrop}
      backgroundStyle={styles.sheetBackground}
      handleIndicatorStyle={styles.indicator}
    >
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        {/* Hero Image */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: dish.imageUrl }}
            style={styles.heroImage}
            resizeMode="cover"
          />
          {dish.isFeatured && (
            <View style={styles.featuredBadge}>
              <Star size={16} color={Colors.background.primary} fill={Colors.background.primary} />
              <Text style={styles.featuredText}>Haftanın Seçimi</Text>
            </View>
          )}
        </View>

        {/* Content */}
        <View style={styles.content}>
          {/* Dish Name & Rating */}
          <View style={styles.header}>
            <Text style={styles.dishName}>{dish.name}</Text>
            <View style={styles.ratingContainer}>
              <Star size={20} color={Colors.accent.gold} fill={Colors.accent.gold} />
              <Text style={styles.rating}>{dish.rating}</Text>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.description}>{dish.description}</Text>

          {/* Price */}
          <Text style={styles.priceRange}>{dish.priceRange}</Text>

          {/* Tags */}
          <View style={styles.tagsContainer}>
            {dish.tags.map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>#{tag}</Text>
              </View>
            ))}
          </View>

          {/* Divider */}
          <View style={styles.divider} />

          {/* Restaurant Info */}
          <Text style={styles.sectionTitle}>Restoran</Text>
          <Text style={styles.restaurantName}>{dish.restaurant.name}</Text>

          {/* Address */}
          <View style={styles.infoRow}>
            <MapPin size={18} color={Colors.accent.gold} />
            <Text style={styles.infoText}>{dish.restaurant.address}</Text>
          </View>

          {/* Phone */}
          {dish.restaurant.phone && (
            <Pressable style={styles.infoRow} onPress={handleCall}>
              <Phone size={18} color={Colors.accent.gold} />
              <Text style={[styles.infoText, styles.linkText]}>
                {dish.restaurant.phone}
              </Text>
            </Pressable>
          )}

          {/* Opening Hours */}
          {dish.restaurant.openingHours && (
            <View style={styles.infoRow}>
              <Clock size={18} color={Colors.accent.gold} />
              <View style={styles.hoursContainer}>
                <Text style={styles.infoText}>
                  Bugün: {dish.restaurant.openingHours.monday}
                </Text>
              </View>
            </View>
          )}

          {/* Check-in Button */}
          {!hasCheckedIn && (
            <CheckInButton dish={dish} onCheckInSuccess={handleCheckInSuccess} />
          )}

          {hasCheckedIn && (
            <View style={styles.checkedInBadge}>
              <Star size={20} color={Colors.semantic.success} fill={Colors.semantic.success} />
              <Text style={styles.checkedInText}>Hazine Bulundu! 🎉</Text>
            </View>
          )}

          {/* Navigate Button */}
          <Pressable style={styles.navigateButton} onPress={handleNavigate}>
            <Navigation size={20} color={Colors.background.primary} />
            <Text style={styles.navigateText}>Hazineye Git</Text>
          </Pressable>

          {/* Spacer for bottom safe area */}
          <View style={styles.bottomSpacer} />
        </View>
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: Colors.background.secondary,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  indicator: {
    backgroundColor: Colors.accent.gold,
    width: 40,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 250,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  featuredBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: Colors.accent.gold,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 4,
  },
  featuredText: {
    color: Colors.background.primary,
    fontSize: 12,
    fontWeight: '700',
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  dishName: {
    flex: 1,
    fontSize: 24,
    fontWeight: '700',
    color: Colors.text.primary,
    marginRight: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text.primary,
  },
  description: {
    fontSize: 15,
    color: Colors.text.secondary,
    lineHeight: 22,
    marginBottom: 12,
  },
  priceRange: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.accent.gold,
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 20,
  },
  tag: {
    backgroundColor: Colors.background.tertiary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 12,
    color: Colors.accent.gold,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.background.tertiary,
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.text.muted,
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.text.primary,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
    color: Colors.text.secondary,
    lineHeight: 20,
  },
  linkText: {
    color: Colors.accent.gold,
    textDecorationLine: 'underline',
  },
  hoursContainer: {
    flex: 1,
  },
  navigateButton: {
    backgroundColor: Colors.accent.coral,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 24,
    gap: 8,
    shadowColor: Colors.accent.coral,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  navigateText: {
    color: Colors.background.primary,
    fontSize: 16,
    fontWeight: '700',
  },
  checkedInBadge: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 16,
    gap: 8,
    borderWidth: 2,
    borderColor: Colors.semantic.success,
  },
  checkedInText: {
    color: Colors.semantic.success,
    fontSize: 16,
    fontWeight: '700',
  },
  bottomSpacer: {
    height: 20,
  },
});
