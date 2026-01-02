/**
 * FoodieQuest: Ana Harita Ekranı
 * Kahraman yemekleri keşfet!
 */

import { DishDetailsSheet } from '@/src/components/DishDetailsSheet';
import { MapViewContainer } from '@/src/components/MapViewContainer';
import { Colors } from '@/src/constants/Colors';
import { DUMMY_DISHES } from '@/src/data/dummyDishes';
import { useLocation } from '@/src/hooks/useLocation';
import { HeroDish } from '@/src/types';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const { location } = useLocation();
  const [selectedDish, setSelectedDish] = useState<HeroDish | null>(null);

  const handleDishSelect = (dish: HeroDish) => {
    setSelectedDish(dish);
  };

  const handleCloseSheet = () => {
    setSelectedDish(null);
  };

  // Konum yüklenene kadar varsayılan bölge (İstanbul - Tüm yemekleri gösterecek zoom)
  const initialRegion = location || {
    latitude: 41.0200,
    longitude: 28.9900,
    latitudeDelta: 0.15,
    longitudeDelta: 0.15,
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.background.primary} />
      <View style={styles.mapContainer}>
        <MapViewContainer
          dishes={DUMMY_DISHES}
          initialRegion={initialRegion}
          selectedDish={selectedDish}
          onDishSelect={handleDishSelect}
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
