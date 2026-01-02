/**
 * FoodieQuest: Ana Harita Ekranı
 * Kahraman yemekleri keşfet!
 */

import { CategoryFilter } from '@/src/components/CategoryFilter';
import { DishDetailsSheet } from '@/src/components/DishDetailsSheet';
import { FloatingActionMenu } from '@/src/components/FloatingActionMenu';
import { MapViewContainer } from '@/src/components/MapViewContainer';
import { Colors } from '@/src/constants/Colors';
import { DUMMY_DISHES } from '@/src/data/dummyDishes';
import { useLocation } from '@/src/hooks/useLocation';
import { DishCategory, HeroDish } from '@/src/types';
import React, { useMemo, useRef, useState } from 'react';
import { Alert, StatusBar, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';

export default function HomeScreen() {
  const { location } = useLocation();
  const [selectedDish, setSelectedDish] = useState<HeroDish | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<DishCategory | 'all'>('all');
  const mapRef = useRef<MapView>(null);

  const handleDishSelect = (dish: HeroDish) => {
    setSelectedDish(dish);
  };

  const handleCloseSheet = () => {
    setSelectedDish(null);
  };

  const handleCategoryChange = (category: DishCategory | 'all') => {
    setSelectedCategory(category);
  };

  // FAB Menu Handlers
  const handleMyLocation = () => {
    if (location) {
      mapRef.current?.animateToRegion(
        {
          ...location,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        },
        1000
      );
    }
  };

  const handleBadges = () => {
    Alert.alert('🏆 Rozetlerim', 'Rozet sistemi yakında geliyor!');
  };

  const handleProfile = () => {
    Alert.alert('👤 Profilim', 'Profil ekranı yakında geliyor!');
  };

  // Kategoriye göre filtrelenmiş yemekler
  const filteredDishes = useMemo(() => {
    if (selectedCategory === 'all') {
      return DUMMY_DISHES;
    }
    return DUMMY_DISHES.filter(dish => dish.category === selectedCategory);
  }, [selectedCategory]);

  // Konum yüklenene kadar varsayılan bölge (İstanbul - Tüm yemekleri gösterecek zoom)

        {/* Floating Action Menu */}
        <FloatingActionMenu
          onMyLocation={handleMyLocation}
          onBadgesPress={handleBadges}
          onProfilePress={handleProfile}
        />
  const initialRegion = location || {
    latitude: 41.0082,
    longitude: 28.9784,
    latitudeDelta: 0.3,
    longitudeDelta: 0.3,
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background.primary} />
      <View style={styles.mapContainer}>
        <MapViewContainer
          dishes={filteredDishes}
          initialRegion={initialRegion}
          selectedDish={selectedDish}
          onDishSelect={handleDishSelect}
        />
        
        {/* Kategori Filtreleme */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </View>

      {/* Yemek Detay Paneli */}
      {selectedDish && (
        <DishDetailsSheet dish={selectedDish} onClose={handleCloseSheet} />
      )}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  mapContainer: {
    flex: 1,
  },
});
