/**
 * FoodieQuest: Ana Harita Ekranı
 * Kahraman yemekleri keşfet!
 */

import { CategoryFilter } from '@/src/components/CategoryFilter';
import { DishDetailsSheet } from '@/src/components/DishDetailsSheet';
import { MapViewContainer } from '@/src/components/MapViewContainer';
import { Colors } from '@/src/constants/Colors';
import { DUMMY_DISHES } from '@/src/data/dummyDishes';
import { useLocation } from '@/src/hooks/useLocation';
import { DishCategory, HeroDish } from '@/src/types';
import React, { useMemo, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const { location } = useLocation();
  const [selectedDish, setSelectedDish] = useState<HeroDish | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<DishCategory | 'all'>('all');

  const handleDishSelect = (dish: HeroDish) => {
    setSelectedDish(dish);
  };

  const handleCloseSheet = () => {
    setSelectedDish(null);
  };

  const handleCategoryChange = (category: DishCategory | 'all') => {
    setSelectedCategory(category);
  };

  // Kategoriye göre filtrelenmiş yemekler
  const filteredDishes = useMemo(() => {
    if (selectedCategory === 'all') {
      return DUMMY_DISHES;
    }
    return DUMMY_DISHES.filter(dish => dish.category === selectedCategory);
  }, [selectedCategory]);

  // Konum yüklenene kadar varsayılan bölge (İstanbul - Tüm yemekleri gösterecek zoom)
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
